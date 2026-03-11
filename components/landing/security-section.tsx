"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";

const qualityFeatures = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous QA processes applied to all data capture and analysis. Every deliverable is peer-reviewed.",
  },
  {
    icon: Award,
    title: "Industry Standards",
    description: "Work completed to IIMM, IPWEA, and relevant Australian Standards for asset management.",
  },
  {
    icon: CheckCircle,
    title: "Data Integrity",
    description: "Comprehensive validation checks ensuring accuracy and consistency across all datasets.",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "Deliverables structured to meet audit requirements and regulatory reporting obligations.",
  },
];

const standards = ["IIMM", "IPWEA", "AS/NZS ISO 55001", "Fair Value", "AASB 13"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Quality & Compliance
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Quality is
              <br />
              non-negotiable.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Every project we deliver meets the highest industry standards. 
              Our processes ensure data accuracy, compliance readiness, and audit-grade documentation.
            </p>

            {/* Standards */}
            <div className="flex flex-wrap gap-3">
              {standards.map((standard, index) => (
                <span
                  key={standard}
                  className={`px-4 py-2 border border-foreground/10 text-sm font-mono transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {standard}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="grid gap-6">
            {qualityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
