"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, ClipboardCheck, BarChart3, Wrench } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Strategic Asset Management",
    description: "We help organisations clearly define value and then design and implement appropriate asset management processes. From strategic planning to lifecycle modelling.",
    visual: "strategy",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Asset Inspections & Data Capture",
    description: "We design, develop, and implement solutions that benefit your organisation's data requirements and assure your asset data is captured accurately and efficiently.",
    visual: "inspect",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Condition Audits & Assessments",
    description: "Comprehensive condition assessments of your assets to support informed decision-making. We capture defects, measure deterioration, and assess remaining useful life.",
    visual: "audit",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Maintenance & Works Planning",
    description: "Data-driven maintenance strategies and works programming to optimise your asset investment. We help prioritise spending where it matters most.",
    visual: "maintain",
    icon: Wrench,
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const IconComponent = feature.icon;

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          
          {/* Icon Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-24 h-24 border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
              <IconComponent className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            What We Do
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Services.
            <br />
            <span className="text-muted-foreground">Your assets, optimised.</span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
