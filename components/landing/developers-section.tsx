"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const projectImages = [
  {
    src: "/images/FOOTPATH-CONDITION-AUDIT.jpg",
    alt: "Footpath condition assessment for Yarra Ranges Council",
    title: "Footpath Condition Audit",
    description: "Yarra Ranges Council — assessed 820km of pathways and trails across 164,000 five-metre intervals. Asset register now 80% more accurate for future planning.",
  },
  {
    src: "/images/OPEN-SPACE-DATA-COLLECTION.jpg",
    alt: "Open space data collection for Macedon Ranges Shire",
    title: "Open Space Data Collection",
    description: "Macedon Ranges Shire — audited 130 parks and reserves, verifying 4,537 unique open space assets including fences, park furniture, sporting fields and lighting towers.",
  },
  {
    src: "/images/ROAD-MANAGEMENT-PLAN-INSPECTIONS.jpg", 
    alt: "Road management plan inspections for Maribyrnong City Council",
    title: "Road Management Plan Inspections",
    description: "Maribyrnong City Council — biannual inspection of 520km footpaths and 344km roads since 2018. Averages 6,500 defects identified annually ensuring Road Management Plan compliance.",
  },
  {
    src: "/images/STREET-FURNITURE-DATA-COLLECTION.jpg",
    alt: "Street furniture data collection for Maribyrnong City Council",
    title: "Street Furniture Data Collection",
    description: "Maribyrnong City Council — identified and mapped 4,090 street furniture assets plus 1,260 maintenance defects. Complete register for long-term planning and reporting.",
  },
  {
    src: "/images/ROAD-FOOTPATH-AND-CAR-PARK-DATA-COLLECTION.png",
    alt: "Road and carpark data collection for Monash and Deakin universities",
    title: "Road, Footpath & Carpark Data Collection",
    description: "Monash University & Deakin University — built complete digital asset registers across multiple campuses using differential GPS. Condition audits and 10-year renewal funding models delivered.",
  },
  {
    src: "/images/Arial-Photo6-Asset-Lab.jpg",
    alt: "Aerial photo of asset register review area",
    title: "Asset Register Review",
    description: "Rural City of Wangaratta — reviewed and reconfigured data structure to support better reporting at strategic, management, and operational levels. Prepared data management manual.",
  },
];

const values = [
  { 
    title: "Data-first approach", 
    description: "Every recommendation is backed by verified field data."
  },
  { 
    title: "Client-focused", 
    description: "We work as an extension of your team, not a disconnected consultant."
  },
  { 
    title: "Practical outcomes", 
    description: "Deliverables designed for real-world implementation, not shelf-ware."
  },
  { 
    title: "Continuous improvement", 
    description: "We refine our methods and technology with every project."
  },
];

export function DevelopersSection() {
  const [activeImage, setActiveImage] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % projectImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Our Approach
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Built on data.
              <br />
              <span className="text-muted-foreground">Driven by outcomes.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Asset Lab was founded with a clear mission — help organisations make 
              better decisions about their assets through accurate data and practical insights.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Project image slider */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10 overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5">
                {projectImages.map((img, idx) => (
                  <div
                    key={img.src}
                    className={`absolute inset-0 transition-all duration-700 ${
                      activeImage === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Caption */}
              <div className="p-6 border-t border-foreground/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{projectImages[activeImage].title}</h4>
                  <span className="text-xs font-mono text-muted-foreground">
                    {String(activeImage + 1).padStart(2, "0")} / {String(projectImages.length).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{projectImages[activeImage].description}</p>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex gap-2 mt-4">
              {projectImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`h-2 transition-all duration-300 ${
                    idx === activeImage
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
