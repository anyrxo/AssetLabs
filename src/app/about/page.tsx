import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, TEAM } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/IconMap";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Melbourne and Geelong-based engineering consultancy with extensive experience and specialist skills in the management of infrastructure and assets.",
};

const AboutPage = () => (
  <>
    <div className="page-hero">
      <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
        Who We Are
      </span>
      <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
        About Asset Lab
      </h1>
    </div>

    <section className="section-padding -mt-8">
      <div className="mx-auto max-w-4xl">
        <GlassCard hover={false}>
          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>{COMPANY.aboutIntro}</p>
            <p>{COMPANY.aboutPride}</p>
            <p>{COMPANY.aboutSolutions}</p>
          </div>
        </GlassCard>
      </div>
    </section>

    {/* What we are about */}
    <section className="section-padding pt-0">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Our Purpose" title="What We Are About" />
        <div className="space-y-4">
          {[COMPANY.aboutWhatP1, COMPANY.aboutWhatP2, COMPANY.aboutWhatP3].map((p, i) => (
            <GlassCard key={i} hover={false} delay={i * 0.1}>
              <p className="leading-relaxed text-slate-300">{p}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>

    {/* Core Principles */}
    <section className="section-padding pt-0">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Quality",
              desc: "We provide an unsurpassed service that delivers premium value to our customers.",
              icon: "Award",
            },
            {
              title: "Integrity",
              desc: "We uphold the highest standards of integrity in all our actions.",
              icon: "Shield",
            },
            {
              title: "Accountability",
              desc: "We are personally accountable for delivering on our commitments.",
              icon: "Target",
            },
          ].map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.1} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Icon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>

    {/* Team preview */}
    <section className="section-padding pt-0">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Our People"
          title="Meet Our Team"
          subtitle="Our focus is on delivering a range of high-value solutions for our customers, recognising that they have complex and ever-evolving needs."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {TEAM.map((member, i) => (
            <GlassCard key={member.slug} delay={i * 0.1}>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-2xl font-bold text-blue-400" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {member.name}
              </h3>
              <p className="text-sm text-blue-400">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">{member.intro}</p>
              <Button href={`/team/${member.slug}`} variant="ghost" size="sm" className="mt-3 -ml-4">
                View Profile
                <Icon name="ArrowRight" className="h-3.5 w-3.5" />
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
