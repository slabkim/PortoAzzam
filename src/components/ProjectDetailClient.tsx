"use client";

import { motion, Variants } from "framer-motion";
import { Project } from "@/lib/projectsData";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, ExternalLink, Briefcase, Wrench } from "lucide-react";
import Footer from "./Footer";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      {/* Navbar / Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#EAEAEA] h-16 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
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
      <main className="flex-grow pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {/* Header info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-[#EAEAEA] text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-text-primary leading-[1.15]">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Media embed / image */}
            <motion.div variants={itemVariants}>
              {project.youtubeId ? (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-[#EAEAEA] bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=0&rel=0`}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[#EAEAEA]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-cover"
                  />
                </div>
              )}
            </motion.div>

            {/* Metadata Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-10 border-t border-[#EAEAEA]"
            >
              {/* Left Column: Stats and Tools */}
              <div className="md:col-span-5 space-y-8">
                {/* Meta details list */}
                <div className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#EAEAEA] space-y-4">
                  {/* Role */}
                  <div className="flex items-center gap-3 text-sm">
                    <Briefcase size={16} className="text-brand-orange" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-text-secondary font-bold block">
                        My Role
                      </span>
                      <span className="font-semibold text-text-primary">
                        {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={16} className="text-brand-pink" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-text-secondary font-bold block">
                        Period
                      </span>
                      <span className="font-semibold text-text-primary">
                        {project.slug === "ugm-jersey"
                          ? "July 2023"
                          : project.slug === "jegeg-bagus-photo"
                          ? "September 2024"
                          : "Ongoing / 2024"}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={16} className="text-brand-purple" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-text-secondary font-bold block">
                        Location
                      </span>
                      <span className="font-semibold text-text-primary">
                        {project.slug === "jegeg-bagus-photo"
                          ? "Universitas Udayana"
                          : "Remote / Freelance"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-secondary flex items-center gap-2">
                    <Wrench size={13} /> Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-lg border border-[#EAEAEA] bg-[#F8F9FB] text-xs font-medium text-text-secondary transition-colors hover:border-brand-orange/30 hover:text-text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Responsibilities */}
              <div className="md:col-span-7 space-y-6">
                <h3 className="text-lg font-bold text-text-primary font-heading">
                  Key Responsibilities & Contribution
                </h3>
                <ul className="space-y-4">
                  {project.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-50 border border-brand-orange/20 text-brand-orange text-[10px] font-bold flex items-center justify-center mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <div className="pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-brand-orange/15 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    View Original Platform
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}