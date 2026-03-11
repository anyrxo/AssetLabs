import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TEAM } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";
import Icon from "@/components/ui/IconMap";
import Button from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  TEAM.map((m) => ({ slug: m.slug }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: member.name,
    description: member.intro,
  };
};

const TeamDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <div className="page-hero">
        <Link
          href="/team"
          className="mb-4 inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400 transition-colors"
        >
          ← Back to Team
        </Link>
        <h1 className="text-3xl font-bold text-white md:text-5xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
          {member.name}
        </h1>
        <p className="text-blue-400 font-medium mt-1">{member.role}</p>
      </div>

      <section className="section-padding -mt-8">
        <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-[1fr_280px]">
          {/* Main content */}
          <div className="space-y-6">
            <GlassCard hover={false}>
              <p className="leading-relaxed text-slate-300">{member.intro}</p>
              <p className="mt-3 leading-relaxed text-slate-300 italic">{member.vision}</p>
            </GlassCard>

            <GlassCard hover={false}>
              <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Background
              </h2>
              <p className="leading-relaxed text-slate-300">{member.background}</p>
            </GlassCard>

            <GlassCard hover={false}>
              <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Expert Skills
              </h2>
              <ul className="space-y-2.5">
                {member.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard hover={false}>
              <h2 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Key Strengths
              </h2>
              <ul className="space-y-2.5">
                {member.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <GlassCard hover={false} className="text-center !p-6">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-600/20 border border-blue-500/20 text-4xl font-bold text-blue-400" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-blue-400">{member.role}</p>
              <div className="glow-line my-4" />
              <a href="tel:0352428683" className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <Icon name="Phone" className="h-4 w-4" />
                {member.phone}
              </a>
            </GlassCard>

            <Button href="/contact" variant="primary" size="md" className="w-full">
              Contact {member.name.split(" ")[0]}
            </Button>
          </aside>
        </div>
      </section>
    </>
  );
};

export default TeamDetailPage;
