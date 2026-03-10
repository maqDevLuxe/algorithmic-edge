import { motion } from "framer-motion";

const exchanges = [
  "Binance", "Coinbase", "Kraken", "FTX Pro", "Bitfinex", "Bybit",
  "OKX", "Huobi", "KuCoin", "Gate.io", "Gemini", "Bitstamp",
  "CME Group", "CBOE", "NYSE", "NASDAQ", "LSE", "Deutsche Börse",
];

const Exchanges = () => (
  <section className="section-padding relative z-10">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs text-primary font-code tracking-[0.3em] mb-4 uppercase">Connected Markets</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">40+ Supported Exchanges</h2>
      </motion.div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {exchanges.map((ex, i) => (
          <motion.div
            key={ex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            className="glass-card rounded-md p-4 flex items-center justify-center text-center hover:border-primary/30 transition-all duration-300 hoverable"
          >
            <span className="text-xs font-code text-muted-foreground">{ex}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Exchanges;
