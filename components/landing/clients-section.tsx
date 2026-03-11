"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const clients = [
  { name: "Deakin University", logo: "/images/Deakin-University.jpg" },
  { name: "Monash University", logo: "/images/Monash-University.jpg" },
  { name: "Yarra Ranges Council", logo: "/images/Yarra-Ranges-Council.jpg" },
  { name: "Maribyrnong City Council", logo: "/images/Maribyrnong-City-Council.jpg" },
  { name: "Macedon Ranges Shire Council", logo: "/images/Macedon-Ranges-Shire-Council.jpg" },
  { name: "Rural City of Wangaratta", logo: "/images/Rural-City-of-Wangaratta.jpg" },
  { name: "City of Stonnington", logo: "/images/City-of-Stonnington.jpg" },
  { name: "Merri-bek City Council", logo: "/images/Merri-bek-City-Council.jpg" },
  { name: "Melton City Council", logo: "/images/Melton-City-Council.jpg" },
  { name: "City of Canterbury Bankstown", logo: "/images/City-of-Canterbury-Bankstown.jpg" },
  { name: "Mitchell Shire Council", logo: "/images/Mitchell-Shire-Council.jpg" },
  { name: "Programmed", logo: "/images/Programmed.jpg" },
];

export function ClientsSection() {
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
    <section id="clients" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/20" />
            Our Clients
            <span className="w-8 h-px bg-foreground/20" />
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Trusted by councils
            <br />
            <span className="text-muted-foreground">& universities across Victoria.</span>
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-foreground/5">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`bg-background p-6 lg:p-8 flex items-center justify-center group transition-all duration-700 hover:bg-foreground/[0.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative w-full h-16 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
