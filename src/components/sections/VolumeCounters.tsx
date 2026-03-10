import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 2500;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * end));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="glow-text font-heading text-4xl md:text-6xl">
      {prefix}{val.toLocaleString()}{suffix}
    </span>
  );
};

const counters = [
  { label: "Orders Executed", end: 847000000, prefix: "", suffix: "+" },
  { label: "Total Volume Traded", end: 2400, prefix: "$", suffix: "B+" },
  { label: "Active API Keys", end: 12400, prefix: "", suffix: "+" },
  { label: "Countries Served", end: 89, prefix: "", suffix: "" },
];

const VolumeCounters = () => (
  <section className="section-padding relative z-10 border-y border-border/50">
    <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
      {counters.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <AnimatedNumber end={c.end} prefix={c.prefix} suffix={c.suffix} />
          <p className="text-xs text-muted-foreground font-code mt-3 tracking-wider uppercase">{c.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default VolumeCounters;
