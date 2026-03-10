import { motion } from "framer-motion";

const DataCenter = () => (
  <section className="relative z-10 h-[60vh] md:h-[70vh] overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')",
      }}
    />
    <div className="absolute inset-0 bg-background/70" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
    >
      <p className="text-xs text-primary font-code tracking-[0.3em] mb-4 uppercase">Global Infrastructure</p>
      <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">Co-Located Servers</h2>
      <p className="text-muted-foreground font-code text-sm max-w-xl">
        Bare-metal servers co-located in NY4, LD4, TY3, and SG1 data centers.
        Direct cross-connects to major exchange matching engines.
      </p>
      <div className="flex gap-8 mt-10">
        {["NY4", "LD4", "TY3", "SG1"].map((dc) => (
          <div key={dc} className="text-center">
            <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-2 animate-pulse-glow" />
            <span className="text-xs font-code text-muted-foreground">{dc}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default DataCenter;
