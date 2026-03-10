import { motion } from "framer-motion";

const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const uptimeData = months.map(() => ({
  days: Array.from({ length: 30 }, () => Math.random() > 0.002 ? 1 : 0.5),
}));

const Uptime = () => (
  <section id="status" className="section-padding relative z-10">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-xs text-primary font-code tracking-[0.3em] mb-4 uppercase">Reliability</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-2">99.99% Uptime</h2>
        <p className="text-sm text-muted-foreground font-code">Guaranteed SLA with financial credits for any downtime.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-lg p-6">
        <div className="space-y-2">
          {uptimeData.map((m, mi) => (
            <div key={mi} className="flex items-center gap-2">
              <span className="text-[10px] font-code text-muted-foreground w-8">{months[mi]}</span>
              <div className="flex gap-[2px] flex-1">
                {m.days.map((d, di) => (
                  <div
                    key={di}
                    className="flex-1 h-4 rounded-[1px]"
                    style={{
                      backgroundColor: d === 1 ? "hsl(142 70% 45% / 0.6)" : "hsl(45 100% 50% / 0.6)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-4 justify-end">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-[1px]" style={{ backgroundColor: "hsl(142 70% 45% / 0.6)" }} />
            <span className="text-[10px] font-code text-muted-foreground">Operational</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-[1px]" style={{ backgroundColor: "hsl(45 100% 50% / 0.6)" }} />
            <span className="text-[10px] font-code text-muted-foreground">Degraded</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Uptime;
