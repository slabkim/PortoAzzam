"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent py-10 border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold">
              A
            </span>
            <span className="font-bold tracking-tight text-text-primary font-heading text-sm">
              AZZAM.
            </span>
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-text-secondary text-center leading-relaxed">
            © {new Date().getFullYear()} Azzam Aziz Dzakwan. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-text-secondary hover:text-brand-orange transition-colors duration-300"
          >
            <span className="w-10 h-10 rounded-full border border-[#EAEAEA] flex items-center justify-center group-hover:border-brand-orange/40 group-hover:-translate-y-0.5 transition-all duration-300">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
