"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-8 bg-slate-50 dark:bg-darkBgDeep border-t border-slate-200/40 dark:border-slate-800/40">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright Text */}
        <p className="font-hanken text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Mustopha Abdulqadir. All Rights Reserved.
        </p>

        {/* Brand signoff */}
        <p className="font-hanken text-[11px] uppercase tracking-wider font-extrabold text-sky-600">
          Built with Next.js & Framer Motion
        </p>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-sky-600 dark:hover:text-sky-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top of page"
        >
          <ChevronUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
