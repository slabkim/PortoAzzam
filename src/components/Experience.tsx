"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";

const education = [
  {
    institution: "Universitas Udayana",
    degree: "Bachelor of Sociology",
    period: "2024 – Present",
    description: "Focusing on social humanities, digital culture, media studies, and social dynamics in modern society.",
  },
  {
    institution: "SMK Negeri 1 Talangpadang",
    degree: "Multimedia Major",
    period: "2020 – 2023",
    description: "Learned foundational digital design, video editing, photography, and audio-visual post-production.",
  },
];

const work = [
  {
    role: "Founder & Lead Video Editor",
    company: "Zam Studio",
    period: "Jan 2024 – Present",
    description: "Professional Freelance Video Editor. Collaborated with 10+ national brands (including Sukro and Lemonilo) and partnered with influencers such as Alphi Sugoi and Vidya Susanti (vsbvi) to produce high-impact marketing content.",
  },
  {
    role: "Teacher & Social Media Admin",
    company: "Smart Tech Academy",
    period: "Oct 2023 – March 2024",
    description: "Taught robotics and programming to elementary students. Managed social media branding and content strategy to strengthen online engagement.",
  },
  {
    role: "Photography & Editing Intern",
    company: "Foto Solo Digital Pringsewu",
    period: "Jan 2022 – Apr 2022",
    description: "Assisted in professional studio lighting, portrait photography, and on-location shoots. Conducted photo retouching and color-grading.",
  },
];

const organizations = [
  {
    role: "Vice Head of Program Dev & HR",
    org: "Udayana Model United Nations Community",
    period: "Feb 2026 – Feb 2027",
    description: "Co-led division in planning, developing, and coordinating Model United Nations conferences and community events.",
  },
  {
    role: "Academic Division Staff",
    org: "HIMASOS Universitas Udayana",
    period: "Feb 2025 – Feb 2026",
    description: "Initiated 'OCEHAN' academic discussions. Featured as the main speaker at the National Social Problems Practicum Dissemination event at Universitas Padjadjaran.",
  },
  {
    role: "Internship — BEM FISIP",
    org: "BEM FISIP Universitas Udayana",
    period: "Oct 2024 – Dec 2024",
    description: "Created 2 work programs focused on social and environmental issues. Participated in BEM events handling logistics and Publication, Design, and Decoration (PDD).",
  },
];

interface TimelineColumnProps {
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  dotColor: string;
  title: string;
  items: { period: string; primary: string; secondary: string; description: string }[];
  index: number;
}

function TimelineColumn({ icon, iconBg, iconColor, dotColor, title, items, index }: TimelineColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.22, // Staggered delay for cascading flow
        ease: [0.215, 0.610, 0.355, 1.000] // Smooth cubic-bezier
      }}
      className="space-y-7"
    >
      {/* Column header */}
      <div className="flex items-center gap-3 pb-5 border-b border-[#EAEAEA]">
        <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center ${iconColor}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold font-heading text-text-primary">{title}</h3>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 border-l-2 border-[#F0F1F3] space-y-8">
        {items.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Dot */}
            <div className={`absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full border-[3px] border-white ${dotColor} shadow-sm group-hover:scale-125 transition-transform duration-300`} />

            <div className="flex items-center gap-1.5 text-[11px] text-text-secondary font-medium mb-1.5">
              <Calendar size={11} />
              <span>{item.period}</span>
            </div>
            <h4 className="text-[15px] font-bold text-text-primary font-heading leading-snug mb-0.5">
              {item.primary}
            </h4>
            <p className="text-xs font-semibold gradient-text mb-2">{item.secondary}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 bg-transparent relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          label="My Journey"
          title="Education & Experience"
          subtitle="A timeline of academic growth, professional work, and organizational leadership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          <TimelineColumn
            icon={<GraduationCap size={20} />}
            iconColor="text-brand-orange"
            iconBg="bg-orange-50"
            dotColor="bg-brand-orange"
            title="Education"
            index={0}
            items={education.map((e) => ({
              period: e.period,
              primary: e.institution,
              secondary: e.degree,
              description: e.description,
            }))}
          />
          <TimelineColumn
            icon={<Briefcase size={20} />}
            iconColor="text-brand-pink"
            iconBg="bg-pink-50"
            dotColor="bg-brand-pink"
            title="Work History"
            index={1}
            items={work.map((w) => ({
              period: w.period,
              primary: w.company,
              secondary: w.role,
              description: w.description,
            }))}
          />
          <TimelineColumn
            icon={<Users size={20} />}
            iconColor="text-brand-purple"
            iconBg="bg-purple-50"
            dotColor="bg-brand-purple"
            title="Organizations"
            index={2}
            items={organizations.map((o) => ({
              period: o.period,
              primary: o.org,
              secondary: o.role,
              description: o.description,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
