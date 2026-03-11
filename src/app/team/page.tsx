import type { Metadata } from "next";
import { TEAM } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/IconMap";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team at Asset Lab. Collaboration, flexibility and honesty drive our advice and service.",
};

const TeamPage = () => (
  <>
    <div className="page-hero">
      <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
        Our People
      </span>
      <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
        Meet the Team
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-slate-400 md:text-lg">
        Our focus is on delivering a range of high-value solutions for our customers, recognising
        that they have complex and ever-evolving needs.
      </p>
    </div>

    <section className="section-padding -mt-8">
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {TEAM.map((member, i) => (
          <GlassCard key={member.slug} delay={i * 0.15}>
            {/* Avatar initials */}
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-600/20 border border-blue-500/20 text-3xl font-bold text-blue-400" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {member.name.split(" ").map((n) => n[0]).join("")}
            </div>

            <h2 className="mt-5 text-2xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {member.name}
            </h2>
            <p className="text-sm font-medium text-blue-400">{member.role}</p>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {member.intro}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 italic">
              {member.vision}
            </p>

            <Button href={`/team/${member.slug}`} variant="outline" size="sm" className="mt-6">
              Full Profile
              <Icon name="ArrowRight" className="h-3.5 w-3.5" />
            </Button>
          </GlassCard>
        ))}
      </div>
    </section>
  </>
);

export default TeamPage;
