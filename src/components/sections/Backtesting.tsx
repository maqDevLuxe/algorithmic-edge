import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useMemo } from "react";

const Backtesting = () => {
  const data = useMemo(() => {
    const d = [];
    let strat = 10000;
    let bench = 10000;
    for (let i = 0; i < 60; i++) {
      strat *= 1 + (Math.random() - 0.42) * 0.04;
      bench *= 1 + (Math.random() - 0.48) * 0.03;
      d.push({
        month: `M${i + 1}`,
        strategy: Math.round(strat),
        benchmark: Math.round(bench),
      });
    }
    return d;
  }, []);

  const stats = [
    { label: "Total Return", value: "+284.7%", positive: true },
    { label: "Sharpe Ratio", value: "2.41", positive: true },
    { label: "Max Drawdown", value: "-12.3%", positive: false },
    { label: "Win Rate", value: "67.2%", positive: true },
    { label: "Profit Factor", value: "2.18", positive: true },
    { label: "Avg Trade", value: "+0.34%", positive: true },
  ];

  return (
    <section className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-xs text-primary font-code tracking-[0.3em] mb-4 uppercase">Backtesting Engine</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">Strategy Performance</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 glass-card rounded-lg p-6 glow-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-muted-foreground font-code">MOMENTUM ALGO v3.2 — 5Y BACKTEST</span>
              <span className="text-xs text-primary font-code">● LIVE</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="stratGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(142 70% 45%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(142 70% 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 10% 16%)" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: "hsl(220 10% 50%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "hsl(220 10% 50%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ background: "hsl(220 15% 8%)", border: "1px solid hsl(220 10% 16%)", borderRadius: 4, fontSize: 12, fontFamily: "JetBrains Mono" }} />
                <Area type="monotone" dataKey="strategy" stroke="hsl(142 70% 45%)" strokeWidth={2} fill="url(#stratGrad)" name="Strategy" />
                <Area type="monotone" dataKey="benchmark" stroke="hsl(220 10% 40%)" strokeWidth={1} fill="none" strokeDasharray="4 4" name="Benchmark" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grid grid-cols-2 gap-3 content-start">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-md p-4">
                <div className={`text-xl font-heading ${s.positive ? "glow-text" : "text-destructive"}`}>{s.value}</div>
                <div className="text-[10px] text-muted-foreground font-code mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Backtesting;
