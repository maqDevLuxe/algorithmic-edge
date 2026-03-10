import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { useMemo } from "react";

const Hero = () => {
  const chartData = useMemo(() => {
    const data = [];
    let val = 100;
    for (let i = 0; i < 120; i++) {
      val += (Math.random() - 0.47) * 3;
      data.push({ t: i, v: val, v2: val * 0.95 + Math.random() * 8 });
    }
    return data;
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Chart background */}
      <div className="absolute inset-0 opacity-20">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(142 70% 45%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(142 70% 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke="hsl(142 70% 45%)" strokeWidth={1} fill="url(#heroGrad)" />
            <Area type="monotone" dataKey="v2" stroke="hsl(142 70% 45% / 0.3)" strokeWidth={0.5} fill="none" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xs text-primary font-code tracking-[0.3em] mb-6 uppercase">
            Institutional-Grade Algorithmic Trading Infrastructure
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 text-foreground">
            Execute at the
            <br />
            <span className="glow-text">Speed of</span>
            <br />
            Markets
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-10 font-code leading-relaxed">
            Sub-millisecond execution. Direct market access across 40+ exchanges.
            Built for quantitative funds, proprietary trading desks, and serious algorithmic traders.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary">Request API Access</button>
          <button className="btn-outline">View Documentation</button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex justify-center gap-12 text-center"
        >
          {[
            { label: "Avg Latency", value: "<0.3ms" },
            { label: "Daily Volume", value: "$2.4B+" },
            { label: "Uptime", value: "99.99%" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-heading glow-text">{s.value}</div>
              <div className="text-xs text-muted-foreground font-code mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
