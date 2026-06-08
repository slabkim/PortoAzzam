"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const roles = [
    "Sociology Student",
    "Organizational Leader",
    "Video Editor",
    "Photographer",
    "Graphic Designer",
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-20 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-transparent"
    >
      {/* Ambient background blur circles */}
      <div className="absolute top-[15%] right-[5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-brand-orange/[0.04] blur-[100px] animate-float" />
      <div className="absolute bottom-[10%] left-[5%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-brand-purple/[0.05] blur-[100px] animate-float-slow" />
      <div className="absolute top-[40%] left-[30%] w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full bg-brand-pink/[0.03] blur-[80px] animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Status pill */}
            <motion.div variants={itemVariants} className="mb-5 sm:mb-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 gradient-bg" />
                </span>
                <span className="text-xs font-semibold tracking-wide text-text-primary">
                  Available for collaborations
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[2.1rem] sm:text-[2.75rem] xl:text-[4.25rem] font-extrabold tracking-[-0.03em] font-heading leading-[1.08] mb-5 sm:mb-7"
            >
              <span className="text-text-primary">Hi, I'm</span>
              <br />
              <span className="gradient-text">Azzam Aziz</span>
              <br />
              <span className="text-text-primary">Dzakwan</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg text-text-secondary leading-relaxed mb-6 sm:mb-8 max-w-lg"
            >
              Sociology student blending academic insight with creative
              multimedia — crafting visual stories that are engaging, ethical,
              and impactful.
            </motion.p>

            {/* Role pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-1.5 sm:gap-2 mb-7 sm:mb-10">
              {roles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-medium text-text-secondary bg-white border border-[#EAEAEA] rounded-full hover:border-brand-orange/40 hover:text-text-primary transition-colors duration-300 cursor-default"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full gradient-bg text-white text-sm font-semibold shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white border border-[#EAEAEA] text-text-primary text-sm font-semibold hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                <Sparkles size={14} className="text-brand-orange" />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[440px]">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-[2rem] border border-dashed border-brand-orange/20 pointer-events-none" />
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-brand-orange/40 rounded-tl-xl" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-brand-purple/40 rounded-br-xl" />
              
              {/* Main image card */}
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/10 group border border-[#EAEAEA]">
                <Image
                  src="/assets/Foto fotonya/IMG_3504.JPG"
                  alt="Azzam Aziz Dzakwan — Sociology Student & Multimedia Creator"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 440px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                {/* Info card overlay */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 z-20 glass p-3 sm:p-5 rounded-xl shadow-lg">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-bold gradient-text mb-0.5">
                    Sociology & Creative Media
                  </p>
                  <h3 className="text-xs sm:text-sm font-bold text-text-primary">
                    Azzam Aziz Dzakwan
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-text-secondary mt-0.5">
                    Universitas Udayana · Bali, Indonesia
                  </p>
                </div>
              </div>

              {/* Floating stat badges — desktop only */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-6 top-[30%] glass px-4 py-3 rounded-xl shadow-lg hidden lg:block"
              >
                <p className="text-xl font-extrabold text-text-primary font-heading leading-none">10+</p>
                <p className="text-[10px] text-text-secondary font-medium mt-0.5">Brand Collabs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 top-[60%] glass px-4 py-3 rounded-xl shadow-lg hidden lg:block"
              >
                <p className="text-xl font-extrabold text-text-primary font-heading leading-none">BNSP</p>
                <p className="text-[10px] text-text-secondary font-medium mt-0.5">Certified</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
