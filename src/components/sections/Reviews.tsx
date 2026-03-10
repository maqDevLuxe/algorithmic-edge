import { motion } from "framer-motion";

const reviews = [
  {
    name: "Dr. Sarah Chen",
    role: "Head of Quant, Meridian Capital",
    quote: "Nexus API reduced our execution latency by 73%. The co-location infrastructure is genuinely institutional-grade.",
  },
  {
    name: "Marcus Reinhardt",
    role: "CTO, Apex Trading Systems",
    quote: "We migrated from three separate vendors to Nexus. The unified API across exchanges saved us 6 months of development.",
  },
  {
    name: "Yuki Tanaka",
    role: "Portfolio Manager, Sakura Fund",
    quote: "The backtesting engine is exceptional. We've been able to validate strategies with 5 years of tick data in minutes.",
  },
];

const Reviews = () => (
  <section className="section-padding relative z-10">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-xs text-primary font-code tracking-[0.3em] mb-4 uppercase">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">Trusted by Institutions</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-md p-8"
          >
            <div className="text-primary text-2xl mb-4 font-heading">"</div>
            <p className="text-sm text-foreground/80 font-code leading-relaxed mb-6">{r.quote}</p>
            <div className="border-t border-border/50 pt-4">
              <div className="text-sm font-heading text-foreground">{r.name}</div>
              <div className="text-[10px] text-muted-foreground font-code mt-0.5">{r.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
