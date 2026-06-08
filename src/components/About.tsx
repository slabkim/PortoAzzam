"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Compass, Clapperboard, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const highlights = [
  {
    icon: <BookOpen size={22} />,
    color: "text-brand-orange",
    bg: "bg-orange-50",
    title: "Sociology & Society",
    desc: "Studying digital culture, AI ethics, and societal transformations at Universitas Udayana.",
  },
  {
    icon: <Users size={22} />,
    color: "text-brand-yellow",
    bg: "bg-amber-50",
    title: "Leadership & HR",
    desc: "Leading program development teams to build inclusive and high-performing communities.",
  },
  {
    icon: <Clapperboard size={22} />,
    color: "text-brand-pink",
    bg: "bg-pink-50",
    title: "Multimedia Production",
    desc: "Video editor, designer, and photographer collaborating with national brands.",
  },
  {
    icon: <Compass size={22} />,
    color: "text-brand-purple",
    bg: "bg-purple-50",
    title: "Social Development",
    desc: "Advocating for digital literacy, educational empowerment, and youth participation.",
  },
];

const stats = [
  { value: "10+", label: "National Brands" },
  { value: "3+", label: "Years Experience" },
  { value: "BNSP", label: "Certified" },
];

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, [isFlipped]);

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-transparent relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          label="About Me"
          title="Blending Social Science with Creative Expression"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0 aspect-[3/4] group [perspective:1000px] select-none">
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front Face (IMG_3498.JPG) */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg border border-[#EAEAEA] bg-white"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <Image
                    src="/assets/Foto fotonya/IMG_3498.JPG"
                    alt="Azzam Aziz Dzakwan — Portrait 1"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                  {/* Subtle Flip Hint */}
                </div>

                {/* Back Face (IMG_3506.JPG) */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg border border-[#EAEAEA] bg-white"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Image
                    src="/assets/Foto fotonya/IMG_3506.JPG"
                    alt="Azzam Aziz Dzakwan — Portrait 2"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                  {/* Subtle Flip Hint */}
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped((prev) => !prev);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-[#EAEAEA] shadow-md flex items-center justify-center text-text-primary hover:text-brand-orange hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped((prev) => !prev);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-[#EAEAEA] shadow-md flex items-center justify-center text-text-primary hover:text-brand-orange hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Next photo"
              >
                <ChevronRight size={16} />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(false);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    !isFlipped ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label="Photo 1"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(true);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isFlipped ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label="Photo 2"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — Bio, Stats & Focus Pillars */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio text */}
            <div className="space-y-4 text-[15px] text-text-secondary leading-relaxed">
              <p>
                My academic background in Sociology gives me a unique lens — I look
                beyond the pixels, focusing on how technology, algorithms, and visual media
                shape public perception and human interaction.
              </p>
              <p>
                As a young creator, I build experiences that are engaging and ethically conscious.
                My multimedia work is certified by the{" "}
                <strong className="text-text-primary">National Professional Certification Board (BNSP)</strong>,
                reflecting my commitment to professional quality.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-5 sm:py-6 border-y border-[#EAEAEA]">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center relative">
                  <span className="text-2xl lg:text-3xl font-extrabold text-text-primary font-heading block leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-text-secondary font-medium mt-1.5 block">
                    {stat.label}
                  </span>
                  {idx < stats.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-[#EAEAEA]" />
                  )}
                </div>
              ))}
            </div>

            {/* Focus Pillars */}
            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-bold text-text-primary font-heading">
                Core Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="p-6 rounded-2xl bg-[#F8F9FB] border border-[#EAEAEA] card-hover group"
                  >
                    <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mb-5 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-2 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
