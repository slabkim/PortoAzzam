"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Camera, PenTool, ArrowUpRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { projects } from "../lib/projectsData";

const categoryIcons: Record<string, React.ReactNode> = {
  "Video Editing": <Play size={13} />,
  "Photography": <Camera size={13} />,
  "Graphic Design": <PenTool size={13} />,
};

const categories = ["All", "Video Editing", "Photography", "Graphic Design"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const displayedProjects = filtered.slice(0, 6);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FB]/40 backdrop-blur-[1px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header + Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-16 md:mb-20">
          <div className="flex flex-col max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.2em] font-semibold gradient-text mb-3"
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-[1.15] mb-5"
            >
              Creative Portfolio
            </motion.h2>
            <div className="gradient-line" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? "gradient-bg text-white shadow-md shadow-brand-orange/15"
                    : "bg-white border border-[#EAEAEA] text-text-secondary hover:text-text-primary hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#EAEAEA] card-hover flex flex-col cursor-pointer h-full"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-xs font-semibold flex items-center gap-1">
                        View Project <ArrowUpRight size={12} />
                      </span>
                    </div>
                    {/* Category tag */}
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full glass text-[10px] font-bold uppercase tracking-wider text-text-primary flex items-center gap-1.5">
                      {categoryIcons[project.category]}
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-[15px] font-bold text-text-primary mb-2 font-heading leading-snug group-hover:text-brand-orange transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                      {project.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <div className="flex justify-center mt-14">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-[#EAEAEA] bg-white text-text-primary hover:text-brand-orange hover:border-brand-orange/30 text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-brand-orange/5 hover:-translate-y-0.5 transition-all duration-300 select-none"
          >
            <span>View All Projects</span>
            <MoveRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
