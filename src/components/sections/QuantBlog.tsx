import { motion } from "framer-motion";

const posts = [
  {
    title: "Optimal Execution in Fragmented Markets",
    date: "Mar 2026",
    tag: "Research",
    excerpt: "A deep dive into smart order routing across fragmented liquidity pools and the impact on execution quality.",
  },
  {
    title: "Latency Arbitrage: Myths vs. Reality",
    date: "Feb 2026",
    tag: "Analysis",
    excerpt: "Examining the real-world profitability of latency arbitrage strategies in modern co-located environments.",
  },
  {
    title: "Building Robust Backtesting Frameworks",
    date: "Jan 2026",
    tag: "Engineering",
    excerpt: "Common pitfalls in backtesting and how to build a framework that avoids lookahead bias and survivorship bias.",
  },
];

const QuantBlog = () => (
  <section className="section-padding relative z-10" id="research">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-xs text-primary font-code tracking-[0.3em] mb-4 uppercase">Research</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">Quant Research Blog</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-md p-6 hover:border-primary/20 transition-all group hoverable cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-code text-primary bg-primary/10 px-2 py-0.5 rounded">{p.tag}</span>
              <span className="text-[10px] font-code text-muted-foreground">{p.date}</span>
            </div>
            <h3 className="font-heading text-base text-foreground mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-xs text-muted-foreground font-code leading-relaxed">{p.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default QuantBlog;
