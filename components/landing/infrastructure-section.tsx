"use client";

import { useEffect, useState, useRef } from "react";

const serviceAreas = [
  { area: "Road Management", type: "Data Collection", scope: "Regional & Urban" },
  { area: "Open Space Assessment", type: "Condition Audit", scope: "Parks & Recreation" },
  { area: "Footpath & Cycleways", type: "Inspections", scope: "Municipal Networks" },
  { area: "Building Audits", type: "Compliance", scope: "Commercial & Public" },
  { area: "Drainage Networks", type: "Asset Register", scope: "Stormwater Systems" },
  { area: "Playground Safety", type: "Inspections", scope: "Public Facilities" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % serviceAreas.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Project Areas
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Coverage across
              <br />
              Victoria.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              From metropolitan Melbourne to regional Victoria, we deliver asset management 
              solutions across roads, open spaces, buildings, drainage, and more.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Asset classes</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">VIC</div>
                <div className="text-sm text-muted-foreground">State coverage</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right: Service areas list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Service Areas</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Accepting briefs
                </span>
              </div>

              {/* Areas */}
              <div>
                {serviceAreas.map((area, index) => (
                  <div
                    key={area.area}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeLocation === index ? "bg-foreground/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span 
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          activeLocation === index ? "bg-foreground" : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{area.area}</div>
                        <div className="text-sm text-muted-foreground">{area.scope}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{area.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
