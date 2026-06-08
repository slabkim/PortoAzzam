"use client";

import { motion } from "framer-motion";
import { Trophy, Sparkles, Settings } from "lucide-react";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    title: "Leadership & Strategy",
    icon: <Trophy size={20} />,
    color: "text-brand-orange",
    bg: "bg-orange-50",
    borderAccent: "group-hover:border-brand-orange/30",
    skills: [
      { name: "Program Development", level: 90 },
      { name: "Organizational Leadership", level: 85 },
      { name: "Human Resource Management", level: 80 },
      { name: "Academic Moderation", level: 85 },
    ],
  },
  {
    title: "Creative Production",
    icon: <Sparkles size={20} />,
    color: "text-brand-pink",
    bg: "bg-pink-50",
    borderAccent: "group-hover:border-brand-pink/30",
    skills: [
      { name: "Video Editing", level: 95 },
      { name: "Photography & Photo Editing", level: 90 },
      { name: "Graphic Design & Branding", level: 88 },
      { name: "Visual Storytelling", level: 92 },
    ],
  },
  {
    title: "Digital & Marketing",
    icon: <Settings size={20} />,
    color: "text-brand-purple",
    bg: "bg-purple-50",
    borderAccent: "group-hover:border-brand-purple/30",
    skills: [
      { name: "Social Media Management", level: 88 },
      { name: "Content Strategy", level: 85 },
      { name: "Junior Robotics Teaching", level: 75 },
      { name: "AI Integration", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FB]/40 backdrop-blur-[1px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="My Capabilities"
          title="Skill Set & Expertise"
          subtitle="A unique blend of leadership, creative production, and digital marketing capabilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group p-7 rounded-2xl bg-white border border-[#EAEAEA] ${category.borderAccent} card-hover flex flex-col`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-7">
                <div className={`w-10 h-10 rounded-xl ${category.bg} flex items-center justify-center ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-text-primary">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-5 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="font-medium text-text-primary">{skill.name}</span>
                      <span className="text-xs text-text-secondary tabular-nums">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#F0F1F3] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + sIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
