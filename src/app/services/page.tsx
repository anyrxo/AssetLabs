import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/IconMap";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic Asset Management, Asset Inspections and Data Capture, Asset Lifecycle Planning and Asset Management Practice.",
};

const ServicesPage = () => (
  <>
    <div className="page-hero">
      <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
        Our Expertise
      </span>
      <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
        Services
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-slate-400 md:text-lg">
        Asset Lab offers a wide range of professional consultancy and advisory services to organisations primarily
        responsible for managing infrastructure.
      </p>
    </div>

    <section className="section-padding -mt-8">
      <div className="mx-auto max-w-5xl space-y-6">
        {SERVICES.map((service, i) => (
          <GlassCard key={service.slug} delay={i * 0.1}>
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <Icon name={service.icon} className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {service.title}
                </h2>
                <p className="mt-3 leading-relaxed text-slate-400">
                  {service.tagline}
                </p>
                <Button href={`/services/${service.slug}`} variant="ghost" size="sm" className="mt-4 -ml-4">
                  Read More
                  <Icon name="ArrowRight" className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  </>
);

export default ServicesPage;
