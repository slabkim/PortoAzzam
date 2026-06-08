"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowLeft, Image as ImageIcon, Camera, Calendar } from "lucide-react";
import Footer from "@/components/Footer";

interface GalleryItem {
  src: string;
  category: "Photography" | "Campus" | "Organizational" | "Events" | "Film Making" | "High School";
  alt: string;
}

const moreGalleryItems: GalleryItem[] = [
  // Photography
  {
    src: "/assets/Foto fotonya/Jegeg bagus sosio foto/IMG_0171.jpg",
    category: "Photography",
    alt: "Outdoor portrait photoshoot for Jegeg Bagus Sosiologi, captured entirely utilizing natural light.",
  },
  {
    src: "/assets/Foto fotonya/Jegeg bagus sosio foto/IMG_0179.jpg",
    category: "Photography",
    alt: "Outdoor portrait photoshoot for Jegeg Bagus Sosiologi, captured entirely utilizing natural light.",
  },
  {
    src: "/assets/Foto fotonya/Jegeg bagus sosio foto/IMG_0188.jpg",
    category: "Photography",
    alt: "Outdoor portrait photoshoot for Jegeg Bagus Sosiologi, captured entirely utilizing natural light.",
  },
  {
    src: "/assets/Foto fotonya/Jegeg bagus sosio foto/IMG_0200.jpg",
    category: "Photography",
    alt: "Outdoor portrait photoshoot for Jegeg Bagus Sosiologi, captured entirely utilizing natural light.",
  },
  {
    src: "/assets/Foto fotonya/Jegeg bagus sosio foto/IMG_0209.jpg",
    category: "Photography",
    alt: "Outdoor portrait photoshoot for Jegeg Bagus Sosiologi, captured entirely utilizing natural light.",
  },
  {
    src: "/assets/Foto fotonya/Jegeg bagus sosio foto/IMG_0224.jpg",
    category: "Photography",
    alt: "Outdoor portrait photoshoot for Jegeg Bagus Sosiologi, captured entirely utilizing natural light.",
  },
  {
    src: "/assets/Foto fotonya/Jegeg bagus sosio foto/IMG_0227.jpg",
    category: "Photography",
    alt: "Outdoor portrait photoshoot for Jegeg Bagus Sosiologi, captured entirely utilizing natural light.",
  },
  {
    src: "/assets/Foto fotonya/Jegeg bagus sosio foto/IMG_0279.jpg",
    category: "Photography",
    alt: "Outdoor portrait photoshoot for Jegeg Bagus Sosiologi, captured entirely utilizing natural light.",
  },
  {
    src: "/assets/Foto fotonya/Jegeg bagus sosio foto/IMG_0287.jpg",
    category: "Photography",
    alt: "Outdoor portrait photoshoot for Jegeg Bagus Sosiologi, captured entirely utilizing natural light.",
  },

  {
    src: "/assets/Foto fotonya/galery/Koordinator Sie acara Seminas Nasional.jpg",
    category: "Organizational",
    alt: "Koordinator Sie Acara Seminar Nasional",
  },
  {
    src: "/assets/Foto fotonya/galery/Open House FISIP.JPG",
    category: "Events",
    alt: "Open House FISIP",
  },
  {
    src: "/assets/Foto fotonya/galery/SIE Sponshorship Socius day.jpg",
    category: "Organizational",
    alt: "Sie Sponsorship Socius Day",
  },
  {
    src: "/assets/Foto fotonya/galery/Sosialisasi Untuk Perempuan Intern-BEM FISIP.JPG",
    category: "Organizational",
    alt: "Sosialisasi Untuk Perempuan - Intern BEM FISIP",
  },
  // Campus
  {
    src: "/assets/Foto fotonya/UNUD FOTO/IMG_2694.JPG",
    category: "Campus",
    alt: "Chairperson for HIMASOS's 'Ocehan' talk show forum, heading the execution of casual, thought-provoking academic discussion sessions",
  },
  {
    src: "/assets/Foto fotonya/UNUD FOTO/Koordinator Ilmiah dan Kontribusi.jpeg",
    category: "Campus",
    alt: "Koordinator ilmiah dan kontribusi at Sosiology ospek \"KIsS\"",
  },
  {
    src: "/assets/Foto fotonya/SMK/2022_12_10_22_01_IMG_9519.JPG",
    category: "High School",
    alt: "Selected as a school representative for the National SMK Digital Bootcamp event held in Bali.",
  },
  {
    src: "/assets/Foto fotonya/SMK/2023_02_07_23_46_IMG_1615.JPG",
    category: "High School",
    alt: "Directing Filmaking FLS2n Kabupaten Tanggamus",
  },
  {
    src: "/assets/Foto fotonya/SMK/2023_02_08_01_18_IMG_1613.JPG",
    category: "High School",
    alt: "Collaborative short film production and on-set teamwork for the FLS2N film competition.",
  },
  {
    src: "/assets/Foto fotonya/SMK/2023_02_18_14_43_IMG_2032.JPG",
    category: "Film Making",
    alt: "Behind-the-scenes directing and scriptwriting for an independent short movie production.",
  },
  {
    src: "/assets/Foto fotonya/SMK/2023_02_25_23_36_IMG_2255.JPG",
    category: "Film Making",
    alt: "On-set directing and scriptwriting for a short film project submitted to Festival Film Lampung.",
  },

  // Organizational
  {
    src: "/assets/Foto fotonya/Organisasi/Akademik himasos/IMG_3629.JPG",
    category: "Organizational",
    alt: "Academic HIMASOS",
  },
  {
    src: "/assets/Foto fotonya/Organisasi/Intern bem fisip/2024_10_19_13_32_IMG_3637.JPG",
    category: "Organizational",
    alt: "Community outreach program during BEM FISIP internship, focusing on early childhood eco-education through creative upcycling activities.",
  },
  {
    src: "/assets/Foto fotonya/Organisasi/Intern bem fisip/2024_11_20_05_00_IMG_5293.JPG",
    category: "Organizational",
    alt: "Internship BEM FISIP",
  },
  {
    src: "/assets/Foto fotonya/Organisasi/Intern bem fisip/2024_12_08_23_43_IMG_5698.JPG",
    category: "Organizational",
    alt: "Group portrait of the BEM FISIP student internship participants during the program's field execution.",
  },
  {
    src: "/assets/Foto fotonya/Organisasi/MUNCOMM/DSC08644.JPG",
    category: "Organizational",
    alt: "Udayana Model United Nations community orientation",
  },

  // Events

  {
    src: "/assets/Foto fotonya/Work/Smart tech academy/2023_11_23_12_22_IMG_0577.JPG",
    category: "Events",
    alt: "Invited as a guest speaker for an elementary school robotics workshop, facilitating hands-on sessions on basic robot assembly",
  },
];

const categories = ["All", "Photography", "Campus", "Organizational", "Events"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = filter === "All" ? moreGalleryItems : moreGalleryItems.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#EAEAEA] h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
          <Link
            href="/#gallery"
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
                Archive
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-[1.15] mb-5 text-text-primary">
                Extended Gallery
              </h1>
              <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
                Exploring photography, university milestones, organizational engagements, and project documentations.
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

          {/* Masonry Columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((item, idx) => (
              <motion.div
                key={`${item.src}-${filter}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden group border border-[#EAEAEA] shadow-sm cursor-pointer card-hover bg-[#F8F9FB]"
                onClick={() => setLightbox(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={850}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-yellow block mb-1">
                        {item.category}
                      </span>
                      <p className="text-sm font-semibold text-white leading-snug max-w-[90%]">
                        {item.alt}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20 flex-shrink-0">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 border border-dashed border-[#EAEAEA] rounded-2xl">
              <ImageIcon className="mx-auto text-text-secondary/30 mb-4" size={40} />
              <p className="text-text-secondary font-medium">No photos found in this category.</p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox component */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 text-white/60 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1600}
                height={1200}
                className="max-w-full max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>

            <div className="text-center mt-5 max-w-xl px-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] gradient-text block mb-1">
                {lightbox.category}
              </span>
              <p className="text-sm font-semibold text-white/95">{lightbox.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
