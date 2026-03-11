"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/IconMap";

/** Sticky glass header with mobile drawer. */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        {/* Top bar — phone & hours */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs text-slate-400">
            <a href={COMPANY.phoneTel} className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              <Icon name="Phone" className="h-3 w-3" />
              {COMPANY.phone}
            </a>
            <span className="flex items-center gap-1">
              <Icon name="Clock" className="h-3 w-3" />
              {COMPANY.hours}
            </span>
          </div>
          <div className="glow-line" />
        </div>

        {/* Main nav */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/Asset-Lab-Square-Logo-100x100.jpg"
              alt="Asset Lab"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Asset<span className="gradient-text">Lab</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-4 py-2 text-sm text-slate-300 transition-all hover:bg-white/5 hover:text-white"
              >
                {label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" size="sm" className="ml-3">
              Get In Touch
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden rounded-lg p-2 text-slate-300 hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={menuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 flex"
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
            <div className="relative ml-auto flex w-72 flex-col glass h-full py-24 px-6">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-4 text-lg text-slate-200 hover:text-blue-400 transition-colors"
                >
                  {label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" size="md" className="mt-8">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
