"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

/** Counts up from 0 to target when scrolled into view. */
const AnimatedCounter = ({ value, suffix = "", label, duration = 2000 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl font-bold tracking-tight text-white md:text-5xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {display}
        {suffix}
      </span>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
