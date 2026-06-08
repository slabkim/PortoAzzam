"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_#EAEAEA] py-0"
          : "bg-transparent py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollTo(e, "home")} className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform duration-300">
            A
          </span>
          <span className="font-bold tracking-tight text-text-primary font-heading text-sm">
            AZZAM.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollTo(e, id)}
                className={`relative px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute inset-0 bg-[#F8F9FB] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full border border-text-primary text-[13px] font-medium text-text-primary hover:bg-text-primary hover:text-white transition-all duration-300"
          >
            <Sparkles size={12} className="group-hover:text-white" />
            Work Together
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-text-primary hover:bg-[#F8F9FB] rounded-xl transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden overflow-hidden bg-white border-t border-[#EAEAEA] shadow-lg"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navItems.map((item) => {
                const id = item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollTo(e, id)}
                    className={`py-2.5 px-3 rounded-lg text-[15px] font-medium transition-colors ${
                      activeSection === id
                        ? "text-text-primary bg-[#F8F9FB]"
                        : "text-text-secondary hover:text-text-primary hover:bg-[#F8F9FB]"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "contact")}
                className="mt-3 text-center w-full py-3 rounded-xl gradient-bg text-white font-semibold text-sm hover:opacity-95 transition-opacity"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
