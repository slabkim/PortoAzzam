"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const certifications = [
  {
    title: "Desainer Multimedia Muda",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    period: "Issued Mar 2023 – Expires Mar 2026",
    credentialId: "BNSP-MULTIMEDIA-2023",
    desc: "National professional certification confirming standard capabilities and technical skills in multimedia design, layout editing, and creative production.",
  },
  {
    title: "TOEIC Listening & Reading",
    issuer: "ETS - International Test Center",
    period: "Issued Sep 2022 – Expires Sep 2024",
    credentialId: "Beginer - Intermediate Working Proficiency",
    desc: "Standardized test proving high proficiency in English listening and reading comprehension for international environments.",
  },
  {
    title: "Graphic Designer Certificate",
    issuer: "BLKK PEMNU",
    period: "Mei 2023 – Juni 2023",
    credentialId: "Reg: BLKK-GD-2023",
    desc: "Intensive workshop certification in vectors, brand identities, digital asset creation, typography, and professional design systems.",
  },
];

// All certificate images for the scrolling marquee
const allCertImages = [
  { src: "/assets/Foto fotonya/Sertif/2023_05_14_11_26_IMG_4722.JPG", aspect: "aspect-[3/4.2]", alt: "BNSP Certificate Portrait" },
  { src: "/assets/Foto fotonya/Sertif/7.png", aspect: "aspect-[4/2.85]", alt: "Obrolan Receh Panitia" },
  { src: "/assets/Foto fotonya/Sertif/Narasumber utama.png", aspect: "aspect-[4/2.85]", alt: "Narasumber Utama" },
  { src: "/assets/Foto fotonya/Sertif/1 (2).png", aspect: "aspect-[4/2.85]", alt: "Sociology Day" },
  { src: "/assets/Foto fotonya/Sertif/19.png", aspect: "aspect-[4/2.85]", alt: "Seminar Nasional" },
  { src: "/assets/Foto fotonya/Sertif/53.png", aspect: "aspect-[4/2.85]", alt: "Certificate 53" },
  { src: "/assets/Foto fotonya/Sertif/_Azzam Aziz Dzakwan.png", aspect: "aspect-[4/2.85]", alt: "Azzam Certificate 1" },
  { src: "/assets/Foto fotonya/Sertif/Azzam Aziz Dzakwan.png", aspect: "aspect-[4/2.85]", alt: "Azzam Certificate 2" },
  { src: "/assets/Foto fotonya/Sertif/Azzam Aziz Dzakwan beach clean day 18 agustus 2024.png", aspect: "aspect-[4/2.85]", alt: "Azzam Aziz Dzakwan Beach Clean Day 18 Agustus 2024" },
  { src: "/assets/Foto fotonya/Sertif/Azzam Aziz Fisip in action.png", aspect: "aspect-[4/2.85]", alt: "Azzam Aziz Fisip In Action" },
  { src: "/assets/Foto fotonya/Sertif/Sertifikat Panitia Live In II - Azzam Aziz Dzakwan.png", aspect: "aspect-[4/2.85]", alt: "Sertifikat Panitia Live In II - Azzam Aziz Dzakwan" },
  { src: "/assets/Foto fotonya/Sertif/Sertifikat Safari - 13.png", aspect: "aspect-[4/2.85]", alt: "Sertifikat Safari" },
  { src: "/assets/Foto fotonya/Sertif/bnsp.jpeg", aspect: "aspect-[3/4.2]", alt: "BNSP Card Portrait" },
];

// Split into two rows for the double-row marquee
const row1 = allCertImages.filter((_, i) => i % 2 === 0);
const row2 = allCertImages.filter((_, i) => i % 2 !== 0);

// Duplicate for seamless infinite loop
const row1Doubled = [...row1, ...row1];
const row2Doubled = [...row2, ...row2];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 lg:py-32 bg-[#F2F3F5]/30 backdrop-blur-[1px] relative overflow-hidden">
      
      {/* ── Infinite Scrolling Certificate Strip Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-[0.30] hidden sm:flex flex-col justify-center gap-6 py-8">
        
        {/* Row 1 — scrolls to the right */}
        <div className="relative flex overflow-hidden">
          <div
            className="flex gap-5 animate-marquee-right"
            style={{ width: "max-content" }}
          >
            {row1Doubled.map((cert, i) => (
              <div
                key={`r1-${i}`}
                className={`relative flex-shrink-0 w-80 ${cert.aspect} rounded-xl overflow-hidden shadow-xl border border-black/10 bg-white`}
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-cover contrast-[1.05]"
                  sizes="320px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls to the left (opposite direction) */}
        <div className="relative flex overflow-hidden">
          <div
            className="flex gap-5 animate-marquee-left"
            style={{ width: "max-content" }}
          >
            {row2Doubled.map((cert, i) => (
              <div
                key={`r2-${i}`}
                className={`relative flex-shrink-0 w-80 ${cert.aspect} rounded-xl overflow-hidden shadow-xl border border-black/10 bg-white`}
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-cover contrast-[1.05]"
                  sizes="320px"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Custom Header with specific styles for background clarity */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col mb-16 md:mb-20 max-w-3xl"
        >
          {/* Qualifications (Glowing Label) */}
          <span 
            className="text-xs uppercase tracking-[0.2em] font-extrabold mb-3 text-brand-orange drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]"
            style={{ textShadow: "0 0 10px rgba(249, 115, 22, 0.5)" }}
          >
            Qualifications
          </span>
          {/* Title - solid black */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-[1.15] mb-5 text-black">
            Certifications &amp; Licenses
          </h2>
          {/* Subtitle - solid black */}
          <p className="text-base text-black font-semibold leading-relaxed max-w-xl">
            Professional credentials that validate expertise and commitment to quality standards.
          </p>
          <div className="gradient-line mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 sm:p-7 rounded-2xl bg-white border border-[#EAEAEA] shadow-md shadow-black/5 card-hover flex flex-col justify-between"
            >
              <div>
                {/* Verified badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.15em]">
                    Verified Credential
                  </span>
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-1.5 font-heading leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold gradient-text mb-4">{cert.issuer}</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0F1F3] flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[11px] text-text-secondary font-medium">
                  <Calendar size={13} className="text-text-secondary/60" />
                  <span>{cert.period}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-text-secondary font-medium">
                  <Shield size={13} className="text-text-secondary/60" />
                  <span>{cert.credentialId}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
