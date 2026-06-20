"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-slate-50 dark:bg-darkBgDeep py-20 border-b border-slate-200/40 dark:border-slate-800/40">
      {/* Very subtle background ambient glows */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-slate-200/40 dark:bg-sky-950/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-slate-200/40 dark:bg-sky-950/10 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center max-w-4xl space-y-8 relative z-10">
        
        {/* Animated Pill Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/40 text-slate-650 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider shadow-sm"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Full Stack Software Developer
        </motion.div>

        {/* Name and Role Headline */}
        <div className="space-y-4">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins text-slate-850 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I am <span className="text-sky-600 dark:text-sky-455">Mustopha.</span>
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-4xl font-bold font-poppins text-slate-600 dark:text-slate-350"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A Software Engineer.
          </motion.h2>
        </div>

        {/* Profile Bio Description */}
        <motion.p
          className="max-w-2xl mx-auto font-hanken text-lg text-slate-650 dark:text-slate-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Results-driven Full-Stack Software Developer with extensive experience building, maintaining, and optimizing scalable web applications and high-performance backend infrastructure. Expert in backend architecture using Node.js, Express.js, and MongoDB alongside modern frontend frameworks like Next.js, React.js, and TypeScript.
        </motion.p>

        {/* Buttons / Resume / Socials */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://docs.google.com/document/d/1aAskQSTvnO6GIsalvd1eFLsiEKswShrG/edit?usp=sharing&ouid=101191662488808516242&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md hover:shadow-sky-500/10 active:scale-95 transition-all text-base"
          >
            <FileText size={18} />
            <span>Resume</span>
          </a>

          {/* Social Links */}
          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/Elmoustafi-22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-white hover:bg-slate-105 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-350 hover:text-sky-600 dark:hover:text-sky-400 hover:scale-105 active:scale-95 transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mustopha-abdulqadir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-white hover:bg-slate-105 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-350 hover:text-sky-600 dark:hover:text-sky-400 hover:scale-105 active:scale-95 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
