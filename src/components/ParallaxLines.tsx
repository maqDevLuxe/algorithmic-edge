import { useEffect, useState } from "react";

const ParallaxLines = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    speed: 0.02 + i * 0.015,
    opacity: 0.03 + (i % 3) * 0.02,
    top: 10 + i * 12,
    angle: -2 + i * 0.8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {lines.map((l) => (
        <div
          key={l.id}
          className="absolute w-[200%] h-px"
          style={{
            top: `${l.top}%`,
            left: "-50%",
            transform: `translateY(${scrollY * l.speed}px) rotate(${l.angle}deg)`,
            background: `linear-gradient(90deg, transparent, hsl(var(--primary) / ${l.opacity}), transparent)`,
          }}
        />
      ))}
      {/* Vertical data streams */}
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-px"
          style={{
            left: `${15 + i * 18}%`,
            top: 0,
            height: "100%",
            transform: `translateY(${scrollY * (0.03 + i * 0.01)}px)`,
            background: `linear-gradient(180deg, transparent, hsl(var(--primary) / 0.04), transparent)`,
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxLines;
