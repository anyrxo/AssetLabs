"use client";

import { ArrowRight, Check } from "lucide-react";
import { openTypeformModal } from "@/components/typeform-modal";

const services = [
  {
    name: "Data Capture",
    description: "Field inspections and asset data collection",
    scope: "Per project",
    features: [
      "GPS-tagged inspections",
      "Condition assessments",
      "Photo documentation",
      "Mobile field capture",
      "Data quality assurance",
    ],
    cta: "Request a quote",
    popular: false,
  },
  {
    name: "Full Service",
    description: "End-to-end asset management solutions",
    scope: "Annual retainer",
    features: [
      "Everything in Data Capture",
      "Strategic asset management plans",
      "Lifecycle modelling",
      "Works programming",
      "GIS integration",
      "Ongoing data updates",
      "Priority support",
    ],
    cta: "Get in touch",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Large-scale council-wide programs",
    scope: "Custom scope",
    features: [
      "Everything in Full Service",
      "Multi-year programs",
      "Custom reporting dashboards",
      "Staff training & capability",
      "System integration support",
      "Dedicated project manager",
      "Board-ready reporting",
      "Compliance management",
    ],
    cta: "Talk to us",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Service Packages
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Flexible engagement
            <br />
            <span className="text-stroke">models</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Whether you need a one-off assessment or ongoing asset management support, 
            we tailor our services to fit your organisation.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {services.map((service, idx) => (
            <div
              key={service.name}
              className={`relative p-8 lg:p-12 bg-background ${
                service.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              {/* Service Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
              </div>

              {/* Scope */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                <span className="font-display text-4xl text-foreground">{service.scope}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                onClick={openTypeformModal}
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group cursor-pointer ${
                  service.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {service.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All engagements include detailed scope definition, quality assurance, and comprehensive reporting.{" "}
          <button type="button" onClick={openTypeformModal} className="underline underline-offset-4 hover:text-foreground transition-colors cursor-pointer">
            Discuss your needs
          </button>
        </p>
      </div>
    </section>
  );
}
