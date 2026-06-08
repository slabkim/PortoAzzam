"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, Camera, PenTool, ArrowUpRight, Layers } from "lucide-react";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projectsData";

const categoryIcons: Record<string, React.ReactNode> = {
  "Video Editing": <Play size={13} />,
  Photography: <Camera size={13} />,
  "Graphic Design": <PenTool size={13} />,
};

const categories = ["All", "Video Editing", "Photography", "Graphic Design"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#EAEAEA] h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-text-secondary hover:text-brand-orange transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full gradient-bg flex items-center justify-center text-white text-[11px] font-bold">
              A
            </span>
            <span className="font-bold tracking-tight text-text-primary font-heading text-xs">
              AZZAM.
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-16">
            <div className="flex flex-col max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold gradient-text mb-3 block">
                Full Archive
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-[1.15] mb-5 text-text-primary">
                All Creative Projects
              </h1>
              <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
                A complete collection of video editing, photography, and graphic design work — spanning branded content, editorial shoots, and social media campaigns.
              </p>
              <div className="gradient-line mt-6" />
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    filter === cat
                      ? "gradient-bg text-white shadow-md shadow-brand-orange/15"
                      : "bg-[#F8F9FB] border border-[#EAEAEA] text-text-secondary hover:text-text-primary hover:border-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
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
                      <h2 className="text-[15px] font-bold text-text-primary mb-2 font-heading leading-snug group-hover:text-brand-orange transition-colors duration-300">
                        {project.title}
                      </h2>
                      <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                        {project.desc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-24 border border-dashed border-[#EAEAEA] rounded-2xl">
              <Layers className="mx-auto text-text-secondary/30 mb-4" size={40} />
              <p className="text-text-secondary font-medium">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
