import { motion } from "framer-motion";

const CTAFooter = () => (
  <>
    {/* CTA */}
    <section className="section-padding relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center glass-card rounded-lg p-12 md:p-16 glow-border"
      >
        <p className="text-xs text-primary font-code tracking-[0.3em] mb-4 uppercase">Get Started</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Request Your API Key</h2>
        <p className="text-sm text-muted-foreground font-code mb-8 max-w-lg mx-auto">
          Start with our sandbox environment. No credit card required.
          Production keys available after compliance review.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">Request API Key</button>
          <button className="btn-outline">Schedule Demo</button>
        </div>
      </motion.div>
    </section>

    {/* Footer */}
    <footer className="relative z-10 border-t border-border/50 px-6 py-12 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-heading text-sm tracking-widest text-foreground">NEXUS</span>
            </div>
            <p className="text-[10px] text-muted-foreground font-code leading-relaxed">
              Institutional-grade algorithmic trading infrastructure.
            </p>
          </div>
          {[
            { title: "Product", links: ["Platform", "Pricing", "Documentation", "API Status"] },
            { title: "Company", links: ["About", "Research", "Careers", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Compliance", "Security"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-code text-foreground tracking-wider uppercase mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[11px] font-code text-muted-foreground hover:text-primary transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] font-code text-muted-foreground">© 2026 Nexus Trading Systems. All rights reserved.</span>
          <span className="text-[10px] font-code text-primary flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  </>
);

export default CTAFooter;
