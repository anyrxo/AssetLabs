import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/IconMap";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  SERVICES.map((s) => ({ slug: s.slug }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.tagline,
  };
};

const ServiceDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <div className="page-hero">
        <Link
          href="/services"
          className="mb-4 inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400 transition-colors"
        >
          ← All Services
        </Link>
        <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
          {service.title}
        </h1>
      </div>

      <section className="section-padding -mt-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px]">
          {/* Content */}
          <div>
            <GlassCard hover={false}>
              <div className="space-y-4">
                {service.description.map((p, i) => (
                  <p key={i} className="leading-relaxed text-slate-300">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Our services include:
                </h3>
                <ul className="space-y-2.5">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-slate-400">{service.cta}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary" size="md">
                  Contact Us
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </Button>
                {service.caseStudy && (
                  <Button href={service.caseStudy} variant="outline" size="md">
                    View Case Studies
                  </Button>
                )}
              </div>
            </GlassCard>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <GlassCard hover={false} className="!p-5">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                All Services
              </h4>
              <ul className="space-y-1">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`block rounded-lg px-3 py-2.5 text-sm transition-all ${
                        s.slug === slug
                          ? "bg-blue-500/10 text-blue-400 font-medium"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard hover={false} className="!p-5 text-center">
              <Icon name="Phone" className="mx-auto mb-2 h-8 w-8 text-blue-400" />
              <p className="text-sm text-slate-400">Need help?</p>
              <a href="tel:0352428683" className="mt-1 block text-lg font-semibold text-white hover:text-blue-400 transition-colors">
                (03) 5242 8683
              </a>
            </GlassCard>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
