"use client";

import { motion } from "framer-motion";
import { COMPANY, STATS, SERVICES, VALUES } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Icon from "@/components/ui/IconMap";

/* ════════════════════════════════════════════════
   HOME PAGE
   ════════════════════════════════════════════════ */

const HomePage = () => (
  <>
    {/* ── Hero ────────────────────────────────── */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-cyan-500/8 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            {COMPANY.tagline}
          </span>

          <h1
            className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Helping organisations
            <br />
            <span className="gradient-text">make good decisions</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            {COMPANY.heroSub}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/services" variant="primary" size="lg">
              Browse Services
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Fade gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060d1f] to-transparent" />
    </section>

    {/* ── Stats bar ──────────────────────────── */}
    <section className="relative -mt-1 border-y border-white/5 bg-[#0a1628]/80 backdrop-blur-lg">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {STATS.map((stat) => (
          <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </section>

    {/* ── Services ────────────────────────────── */}
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="What We Do"
          title="Our Services"
          subtitle="From collecting data in the field to informing strategy and planning — comprehensive asset management solutions."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <GlassCard key={service.slug} delay={i * 0.1}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {service.tagline}
              </p>
              <Button href={`/services/${service.slug}`} variant="ghost" size="sm" className="mt-4 -ml-4">
                Learn More
                <Icon name="ArrowRight" className="h-3.5 w-3.5" />
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>

    {/* ── Mission Banner ─────────────────────── */}
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/5 to-blue-600/10" />
      <div className="glow-line" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <p className="text-2xl font-medium leading-relaxed text-white/90 md:text-3xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
          &ldquo;{COMPANY.mission}&rdquo;
        </p>
      </motion.div>
      <div className="glow-line mt-20" />
    </section>

    {/* ── Values ──────────────────────────────── */}
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Our Values"
          title="What Drives Us"
          subtitle={COMPANY.businessModel}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <GlassCard key={value.title} delay={i * 0.05} className="text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Icon name={value.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-white">{value.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{value.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ─────────────────────────────────── */}
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <GlassCard hover={false} className="relative overflow-hidden text-center">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-[80px]" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-cyan-500/8 blur-[60px]" />
          <div className="relative">
            <SectionHeading
              label="Let's Talk"
              title="If you have any questions, feel free to contact us"
              subtitle="Contact us today. We are ready to help."
            />
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Write a Message
                <Icon name="Mail" className="h-4 w-4" />
              </Button>
              <a
                href={COMPANY.phoneTel}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Icon name="Phone" className="h-4 w-4" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  </>
);

export default HomePage;
