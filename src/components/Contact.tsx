"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";

/* Custom SVG icons for social platforms (lucide-react may not export these) */
function InstagramIcon({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  {
    name: "Email",
    val: "azzamazizdzakwan46@gmail.com",
    link: "mailto:azzamazizdzakwan46@gmail.com",
    icon: <Mail className="text-brand-orange" size={20} />,
    bg: "bg-orange-50",
  },
  {
    name: "Instagram",
    val: "@zamstudi.o / @zzamzma",
    link: "https://www.instagram.com/zamstudi.o",
    icon: <InstagramIcon className="text-brand-pink" size={20} />,
    bg: "bg-pink-50",
  },
  {
    name: "LinkedIn",
    val: "Azzam Aziz Dzakwan",
    link: "https://www.linkedin.com/in/azzam-aziz?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: <LinkedinIcon className="text-brand-purple" size={20} />,
    bg: "bg-purple-50",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    
    // Check if Web3Forms Access Key is configured
    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "3cc89a49-d4a7-4e26-819a-f4b07c2dd403";

    if (web3Key) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: formState.name,
            email: formState.email,
            message: formState.message,
            subject: `New Portfolio Message from ${formState.name}`,
          }),
        });
        
        const data = await response.json();
        if (data.success) {
          setSubmitted(true);
          setFormState({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          // If Web3Forms fails, fallback to mailto
          triggerMailtoFallback();
        }
      } catch (error) {
        // Network error, fallback to mailto
        triggerMailtoFallback();
      }
    } else {
      // No key configured, directly trigger mailto fallback
      triggerMailtoFallback();
    }

    setIsSubmitting(false);
  };

  const triggerMailtoFallback = () => {
    const mailtoUrl = `mailto:azzamazizdzakwan46@gmail.com?subject=Portfolio Message from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-[#F8F9FB]/40 backdrop-blur-[1px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Connect"
          title="Get In Touch"
          subtitle="Let's collaborate, discuss ideas, or explore creative opportunities together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left — Socials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl font-bold font-heading text-text-primary">
              Let&apos;s create something together.
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
              Whether you need a video editor, photographer, social media manager,
              or want to discuss academic research — I&apos;m just a message away.
            </p>

            <div className="space-y-3 pt-2">
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-[#EAEAEA] rounded-xl hover:border-gray-300 card-hover group"
                >
                  <div className={`w-10 h-10 rounded-xl ${soc.bg} flex items-center justify-center flex-shrink-0`}>
                    {soc.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-[0.15em]">
                      {soc.name}
                    </p>
                    <p className="text-sm font-bold text-text-primary group-hover:text-brand-orange transition-colors truncate">
                      {soc.val}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white border border-[#EAEAEA] p-7 sm:p-9 rounded-2xl shadow-sm"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                  <CheckCircle className="text-emerald-500" size={28} />
                </div>
                <h3 className="text-xl font-bold font-heading text-text-primary">Message Sent!</h3>
                <p className="text-sm text-text-secondary max-w-sm">
                  Thank you for reaching out. Azzam will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-secondary">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Azzam Aziz"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAEAEA] bg-[#F8F9FB] text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-orange/50 focus:bg-white focus:ring-2 focus:ring-brand-orange/10 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-secondary">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="azzam@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAEAEA] bg-[#F8F9FB] text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-orange/50 focus:bg-white focus:ring-2 focus:ring-brand-orange/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-secondary">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hello Azzam, I would love to talk about..."
                    className="w-full px-4 py-3 rounded-xl border border-[#EAEAEA] bg-[#F8F9FB] text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-brand-orange/50 focus:bg-white focus:ring-2 focus:ring-brand-orange/10 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full py-3.5 rounded-xl gradient-bg text-white font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-orange/15 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
