"use client";

import { useEffect, useState, useRef } from "react";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Adam Lehmann",
    role: "Director",
    photo: "/images/Adam-Lehmann.jpg",
    bio: "Adam has over 25 years' experience working in local government infrastructure management. He has held roles with primary accountability for providing expert advice to organisations on asset management governance, process, performance, and budgeting.",
    longBio: "Adam sees the bigger picture. A strategic thinker, he is able to respond intuitively to client's needs and turn complex information into simple meaningful messages.",
    skills: [
      "Asset Management systems (Policies, Strategies and Plans)",
      "Capital, operational, and renewal planning",
      "Business process auditing and improvement",
      "Data analysis and predictive modelling",
      "Forecasting asset lifecycle cashflows",
      "Regulatory compliance reporting and auditing",
    ],
    linkedin: "https://www.linkedin.com/in/adam-lehmann-asset-lab/",
  },
  {
    name: "Edita Galović",
    role: "Director",
    photo: "/images/Edita-Galovic.jpg",
    bio: "Edita brings specialist skills and knowledge in data collection, analysis and maintenance, data classification and structure, asset systems (Authority, IPS, TechOne, etc), GIS and project management.",
    longBio: "Edita is driven by her commitment to help clients to make evidence-based decisions using high quality information. Backed by her focus, her attention to detail, and ability to think analytically.",
    skills: [
      "Data collection, analysis, and maintenance",
      "Data classification and structure",
      "Asset systems (Authority, IPS, TechOne, etc)",
      "GIS",
      "Project management",
    ],
    linkedin: "https://www.linkedin.com/in/edita-galovic/",
  },
];

export function TeamSection() {
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
    <section id="team" ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
              <span className="w-8 h-px bg-background/30" />
              Meet the Team
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              The people behind
              <br />
              <span className="text-background/50">your asset data.</span>
            </h2>
          </div>
          <p className="text-lg text-background/60 max-w-lg leading-relaxed italic">
            &ldquo;Collaboration, flexibility and honesty drive our advice and service.&rdquo;
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-px bg-background/10">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`bg-foreground p-8 lg:p-12 group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Photo */}
              <div className="relative w-32 h-32 mb-8 overflow-hidden border border-background/20 group-hover:border-background/40 transition-colors">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="128px"
                />
              </div>

              {/* Info */}
              <div className="mb-4">
                <h3 className="text-3xl font-display mb-1">{member.name}</h3>
                <span className="text-sm font-mono text-background/40 uppercase tracking-widest">{member.role}</span>
              </div>

              <p className="text-background/70 leading-relaxed mb-3">
                {member.bio}
              </p>

              <p className="text-background/50 leading-relaxed mb-6 text-sm">
                {member.longBio}
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-xs font-mono text-background/30 uppercase tracking-widest mb-3">Expertise</h4>
                <ul className="space-y-1">
                  {member.skills.map((skill) => (
                    <li key={skill} className="text-sm text-background/50 flex items-start gap-2">
                      <span className="w-1 h-1 mt-2 bg-background/30 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-background/40 hover:text-background transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-16 pt-16 border-t border-background/10">
          <p className="text-background/40 text-center max-w-3xl mx-auto leading-relaxed">
            Our philosophy is that a true partnership is a two-way street — ideas and information flow openly and regularly, 
            based on a foundation of mutual trust and respect for one another&apos;s expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
