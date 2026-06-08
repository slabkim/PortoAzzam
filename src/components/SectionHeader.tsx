"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ label, title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col mb-12 sm:mb-16 md:mb-20 ${align === "center" ? "items-center text-center" : ""} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}
    >
      <span className="text-xs uppercase tracking-[0.2em] font-semibold gradient-text mb-3">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-[1.15] mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-text-secondary leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
      <div className="gradient-line mt-6" />
    </motion.div>
  );
}
