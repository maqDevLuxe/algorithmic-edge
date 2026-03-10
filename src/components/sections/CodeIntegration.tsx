import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  {
    lang: "Python",
    code: `from nexus import Client, Strategy

client = Client(api_key="nx_live_k8x9...")
 
class MomentumAlgo(Strategy):
    def on_bar(self, bar):
        sma_20 = self.sma(bar.close, 20)
        sma_50 = self.sma(bar.close, 50)
        
        if sma_20 > sma_50 and not self.position:
            self.buy(bar.symbol, qty=100)
        elif sma_20 < sma_50 and self.position:
            self.sell(bar.symbol, qty=100)

client.deploy(MomentumAlgo, symbols=["BTC/USD"])`,
  },
  {
    lang: "REST API",
    code: `curl -X POST https://api.nexus.trade/v1/orders \\
  -H "Authorization: Bearer nx_live_k8x9..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "symbol": "BTC/USD",
    "side": "buy",
    "type": "limit",
    "qty": "0.5",
    "price": "42150.00",
    "time_in_force": "GTC",
    "reduce_only": false
  }'`,
  },
  {
    lang: "WebSocket",
    code: `const ws = new WebSocket("wss://stream.nexus.trade/v1");

ws.onopen = () => {
  ws.send(JSON.stringify({
    action: "subscribe",
    channels: ["orderbook", "trades"],
    symbols: ["BTC/USD", "ETH/USD"],
    auth: "nx_live_k8x9..."
  }));
};

ws.onmessage = (msg) => {
  const data = JSON.parse(msg.data);
  console.log(\`[\${data.channel}] \${data.symbol}: \${data.price}\`);
};`,
  },
];

const CodeIntegration = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="docs" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs text-primary font-code tracking-[0.3em] mb-4 uppercase">Integration</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">Deploy in Minutes</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-lg overflow-hidden glow-border"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <div className="flex gap-1 ml-4">
              {tabs.map((t, i) => (
                <button
                  key={t.lang}
                  onClick={() => setActive(i)}
                  className={`px-3 py-1 text-xs font-code rounded transition-all ${
                    active === i ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.lang}
                </button>
              ))}
            </div>
          </div>

          {/* Code content */}
          <pre className="p-6 text-sm font-code text-foreground/80 overflow-x-auto leading-relaxed">
            <code>{tabs[active].code}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeIntegration;
