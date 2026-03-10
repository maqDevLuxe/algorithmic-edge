import { motion } from "framer-motion";

const items = [
  { title: "AES-256 Encryption", desc: "All data encrypted at rest and in transit with military-grade encryption." },
  { title: "SOC 2 Type II", desc: "Annual third-party audits ensuring the highest standards of security compliance." },
  { title: "Multi-Sig Auth", desc: "Hardware security modules and multi-signature withdrawal authorization." },
  { title: "Zero-Knowledge", desc: "Strategy logic remains encrypted — we never see your trading algorithms." },
];

const Security = () => (
  <section className="section-padding relative z-10">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-xs text-primary font-code tracking-[0.3em] mb-4 uppercase">Security</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">Bank-Grade Infrastructure</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-md p-6 border-t-2 border-t-primary/30"
          >
            <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <h3 className="font-heading text-base text-foreground mb-2">{item.title}</h3>
            <p className="text-xs text-muted-foreground font-code leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Security;
