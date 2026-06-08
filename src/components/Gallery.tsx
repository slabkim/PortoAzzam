"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface GalleryItem {
  src: string;
  category: "Photography" | "Campus" | "Organizational" | "Events";
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/assets/Foto fotonya/IMG_3506.JPG",
    category: "Photography",
    alt: "Creative portrait session and lifestyle photography",
  },
  {
    src: "/assets/Foto fotonya/UNUD FOTO/Ketua Ocehan (obrolan receh berwawasan).JPG",
    category: "Campus",
    alt: "Chairs academic OCEHAN discussion session",
  },
  {
    src: "/assets/Foto fotonya/UNUD FOTO/MC at Demissioner DPM PM UDAYANA.jpeg",
    category: "Events",
    alt: "Master of Ceremony at Demissioner DPM PM Udayana",
  },
  {
    src: "/assets/Foto fotonya/UNUD FOTO/MC Jegeg bagus sosiologi 2024.jpeg",
    category: "Events",
    alt: "MC at Jegeg Bagus Sosiologi competition 2024",
  },
  {
    src: "/assets/Foto fotonya/Organisasi/MUNCOMM/DSC08643.JPG",
    category: "Organizational",
    alt: "Udayana MUN Community committee meeting",
  },
  {
    src: "/assets/Foto fotonya/Organisasi/Akademik himasos/AKADEMIK.png",
    category: "Organizational",
    alt: "HIMASOS Academic division development plan",
  },
  {
    src: "/assets/Foto fotonya/Organisasi/Intern bem fisip/DSCF2547.JPG",
    category: "Organizational",
    alt: "BEM FISIP internship event and decoration",
  },
  {
    src: "/assets/Foto fotonya/SMK/2023_04_15_16_28_IMG_3624.JPG",
    category: "Campus",
    alt: "SMK practical bootcamp and collaboration",
  },
];

const categories = ["All", "Photography", "Campus", "Organizational", "Events"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-[50%] right-0 w-[400px] h-[400px] bg-brand-pink/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header + Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-16 md:mb-20">
          <div className="flex flex-col max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.2em] font-semibold gradient-text mb-3"
            >
              Moments
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-[1.15] mb-5"
            >
              Documentation Gallery
            </motion.h2>
            <div className="gradient-line" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
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
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
          {filtered.map((item, idx) => (
            <motion.div
              key={`${item.src}-${filter}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group border border-[#EAEAEA] shadow-sm cursor-pointer card-hover"
              onClick={() => setLightbox(item)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={700}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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

        {/* View More Photos Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-[#EAEAEA] bg-white text-text-primary hover:text-brand-orange hover:border-brand-orange/30 text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-brand-orange/5 hover:-translate-y-0.5 transition-all duration-300"
          >
            View More Photos
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 text-text-secondary group-hover:text-brand-orange" />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 text-white/60 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl max-h-[82vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1400}
                height={1000}
                className="max-w-full max-h-[82vh] object-contain rounded-xl"
              />
            </motion.div>

            <div className="text-center mt-5 max-w-lg px-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] gradient-text block mb-1">
                {lightbox.category}
              </span>
              <p className="text-sm font-medium text-white/90">{lightbox.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
