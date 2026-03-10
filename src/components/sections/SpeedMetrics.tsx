import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix = "", decimals = 0 }: { end: number; suffix?: string; decimals?: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 2000;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(ease * end);
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
      {val.toFixed(decimals)}{suffix}
    </span>
  );
};

const metrics = [
  { label: "Order Execution", value: 0.27, suffix: "ms", decimals: 2 },
  { label: "Market Data Feed", value: 0.12, suffix: "ms", decimals: 2 },
  { label: "API Response", value: 0.89, suffix: "ms", decimals: 2 },
  { label: "Websocket Latency", value: 0.05, suffix: "ms", decimals: 2 },
];

const SpeedMetrics = () => (
  <section className="section-padding relative z-10 border-y border-border/50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs text-primary font-code tracking-[0.3em] mb-4 uppercase">Performance</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">Sub-Millisecond Execution</h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <Counter end={m.value} suffix={m.suffix} decimals={m.decimals} />
            <p className="text-xs text-muted-foreground font-code mt-3 tracking-wider uppercase">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SpeedMetrics;
