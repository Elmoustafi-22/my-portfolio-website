"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="relative w-full py-24 bg-white dark:bg-darkBgDeep border-t border-slate-200/40 dark:border-slate-800/40 overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-sky-500/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.h2 
            className="text-xs uppercase tracking-widest font-extrabold text-sky-600 font-poppins"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            My Journey
          </motion.h2>
          
          <motion.h3 
            className="text-3xl md:text-4xl font-extrabold tracking-tight font-poppins text-slate-850 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Professional Experience
          </motion.h3>
          
          <motion.p 
            className="font-hanken text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            A history of frontend development, tech leadership, and full-stack engineering roles across diverse web initiatives.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line indicator */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-[7px] md:-translate-x-1/2 top-4 z-10 w-4 h-4 rounded-full bg-sky-600 border-4 border-white dark:border-darkBgDeep shadow-sm"></div>

                  {/* Left Spacer for Desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card Side */}
                  <motion.div 
                    className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8"
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="glass-card p-6 md:p-8 rounded-3xl relative shadow-sm border border-slate-200/50 dark:border-slate-800/40 hover:border-sky-500/20 transition-colors">
                      {/* Duration & Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1.5 text-xs font-semibold font-hanken text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-slate-900/60 px-3 py-1 rounded-full border border-sky-100/30 dark:border-sky-550/10">
                          <Calendar size={12} />
                          <span>{exp.duration}</span>
                        </div>
                        {exp.isVolunteer && (
                          <span className="text-[10px] uppercase font-extrabold tracking-wider bg-emerald-50 dark:bg-slate-900/60 border border-emerald-100/30 dark:border-emerald-550/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full">
                            Volunteer
                          </span>
                        )}
                      </div>

                      {/* Header */}
                      <div className="space-y-1 mb-4 text-left">
                        <h4 className="font-poppins font-bold text-lg md:text-xl text-slate-800 dark:text-white">
                          {exp.role}
                        </h4>
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold font-hanken text-slate-500 hover:text-sky-650 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
                        >
                          <span>{exp.company}</span>
                          <ChevronRight size={14} />
                        </a>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 text-left list-disc list-outside pl-4 font-hanken text-sm md:text-[15px] text-slate-650 dark:text-slate-355 leading-relaxed">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="hover:text-slate-700 dark:hover:text-slate-350 transition-colors">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
