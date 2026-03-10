import { motion } from "framer-motion";

const features = [
  { title: "Smart Order Routing", desc: "Automatic order splitting across venues for optimal execution and minimal slippage.", icon: "⚡" },
  { title: "TWAP & VWAP", desc: "Time-weighted and volume-weighted average price algorithms built for institutional scale.", icon: "📊" },
  { title: "Market Making", desc: "Automated bid-ask spread management with dynamic inventory rebalancing.", icon: "🔄" },
  { title: "Arbitrage Engine", desc: "Cross-exchange and triangular arbitrage detection with sub-millisecond execution.", icon: "🔺" },
  { title: "Risk Management", desc: "Real-time position monitoring, drawdown limits, and circuit breakers.", icon: "🛡" },
  { title: "Custom Strategies", desc: "Deploy custom Python or C++ strategies through our SDK and sandbox environment.", icon: "🧬" },
];

const Features = () => (
  <section id="platform" className="section-padding relative z-10">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs text-primary font-code tracking-[0.3em] mb-4 uppercase">Algo Suite</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">Institutional Algorithms</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card rounded-md p-8 hover:border-primary/20 transition-all group hoverable"
          >
            <div className="text-2xl mb-4">{f.icon}</div>
            <h3 className="font-heading text-lg text-foreground mb-3">{f.title}</h3>
            <p className="text-sm text-muted-foreground font-code leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
