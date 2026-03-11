"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

/** Glassmorphism card with optional hover glow and scroll-in animation. */
const GlassCard = ({ children, className = "", hover = true, delay = 0 }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={`glass rounded-2xl p-6 md:p-8 ${hover ? "glass-hover" : ""} ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassCard;
