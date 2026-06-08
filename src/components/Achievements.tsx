"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Star, Compass } from "lucide-react";
import SectionHeader from "./SectionHeader";

const achievements = [
  {
    title: "Winner FLS2N 2023",
    category: "Film Pendek Fiksi",
    desc: "Won first place in the national-level student art competition (FLS2N) for the short fiction film category representing SMKN 1 Talangpadang.",
    image: "/assets/Foto fotonya/SMK/Winner FLS2n.JPG",
    icon: <Award size={18} />,
    color: "text-brand-orange",
    bg: "bg-orange-50",
    position: "object-top",
  },
  {
    title: "Most Favorite Film Nominee",
    category: "Festival Film Lampung Nasional",
    desc: "Nominated for the Most Favorite Film \"Lampung\" award at the prestigious national-level IIB Darmajaya Lampung Film Festival.",
    image: "/assets/Foto fotonya/SMK/Nominated FFL .JPG",
    icon: <Star size={18} />,
    color: "text-brand-pink",
    bg: "bg-pink-50",
    position: "object-center",
  },
  {
    title: "National Digital Bootcamp Representative",
    category: "Bali Program",
    desc: "Selected as a regional representative to attend the elite National SMK Digital Bootcamp session held in Bali.",
    image: "/assets/Foto fotonya/SMK/Mewakili SMK talpa smk digital bootcamp nasional bali.JPEG",
    icon: <Compass size={18} />,
    color: "text-brand-purple",
    bg: "bg-purple-50",
    position: "object-center",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-24 lg:py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-yellow/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          label="Pinnacles"
          title="Achievements & Awards"
          subtitle="Milestones that mark the journey of growth, competition, and recognition."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[#F8F9FB] rounded-2xl overflow-hidden border border-[#EAEAEA] card-hover flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover ${item.position} transition-transform duration-500 group-hover:scale-105`}
                />
                <div className={`absolute top-4 left-4 z-10 w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center ${item.color} shadow-sm`}>
                  {item.icon}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] gradient-text mb-1.5 block">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-text-primary mb-2 font-heading leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
