import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Platform", "Docs", "Pricing", "Research", "Status"];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="font-heading text-lg tracking-widest text-foreground">NEXUS</span>
          <span className="text-xs text-muted-foreground font-code ml-1">API</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase font-code">
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs text-primary font-code flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            ALL SYSTEMS OPERATIONAL
          </span>
          <button className="btn-primary text-xs !px-5 !py-2">Get API Key</button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden glass-card border-t border-border/50 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors font-code" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <button className="btn-primary text-xs mt-2">Get API Key</button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
