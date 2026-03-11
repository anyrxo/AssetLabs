"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

/** Animated section heading with optional label pill and subtitle. */
const SectionHeading = ({ label, title, subtitle, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}
  >
    {label && (
      <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
        {label}
      </span>
    )}
    <h2
      className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
