"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";
import Icon from "@/components/ui/IconMap";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      <div className="page-hero">
        <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
          Our Work
        </span>
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Projects
        </h1>
      </div>

      <section className="section-padding -mt-8">
        <div className="mx-auto max-w-5xl">
          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                    : "border border-white/10 text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <GlassCard className="h-full p-0! overflow-hidden">
                    {project.image && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060d1f] via-transparent to-transparent" />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {project.title}
                      </h3>
                      <span className="mt-3 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                        {project.category}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
