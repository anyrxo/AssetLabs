"use client";

import { useEffect, useState, useRef } from "react";

const tools = [
  { name: "GIS Mapping", category: "Spatial Data" },
  { name: "Assetic", category: "Asset Management" },
  { name: "Confirm", category: "Asset Systems" },
  { name: "Conquest", category: "Asset Management" },
  { name: "SMEC Pavement", category: "Road Analysis" },
  { name: "AutoCAD", category: "Design" },
  { name: "Excel Modelling", category: "Data Analysis" },
  { name: "GPS Survey", category: "Field Capture" },
  { name: "Drone Imagery", category: "Aerial Data" },
  { name: "Power BI", category: "Reporting" },
  { name: "ArcGIS", category: "Spatial Platform" },
  { name: "Asset Edge", category: "Asset Systems" },
];

export function IntegrationsSection() {
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
    <section id="tools" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Tools & Technology
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Industry-leading
            <br />
            tools & platforms.
          </h2>
          <p className="text-xl text-muted-foreground">
            We work with the systems your organisation already uses — and bring our own proven toolkit.
          </p>
        </div>

      </div>
      
      {/* Full-width marquees outside container */}
      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {tools.map((tool) => (
                <div
                  key={`${tool.name}-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {tool.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{tool.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Reverse marquee */}
      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[...tools].reverse().map((tool) => (
                <div
                  key={`${tool.name}-reverse-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {tool.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{tool.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
