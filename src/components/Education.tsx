"use client";
import React from "react";
import { motion } from "framer-motion";
import { education, certifications } from "@/data/education";
import { GraduationCap, Award, CheckCircle } from "lucide-react";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="education" 
      className="relative w-full py-24 bg-slate-50 dark:bg-darkBgDeep border-t border-slate-200/40 dark:border-slate-800/40 overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-sky-500/5 blur-[100px] pointer-events-none"></div>

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
            Credentials
          </motion.h2>
          
          <motion.h3 
            className="text-3xl md:text-4xl font-extrabold tracking-tight font-poppins text-slate-850 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Education & Certifications
          </motion.h3>
          
          <motion.p 
            className="font-hanken text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            My academic foundation and technical training in computer science, software development, and AI engineering.
          </motion.p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="flex items-center gap-2 font-poppins font-bold text-xl text-slate-850 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-3 text-left">
              <GraduationCap className="text-sky-600" size={22} />
              <span>Education</span>
            </h4>

            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 text-left space-y-2 hover:border-sky-500/20 transition-all shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="text-[10px] uppercase font-bold tracking-wider text-sky-600 font-poppins">
                    Degree Program
                  </span>
                  <h5 className="font-poppins font-bold text-base text-slate-800 dark:text-white">
                    {item.degree}
                  </h5>
                  <p className="font-hanken text-sm text-slate-650 dark:text-slate-350">
                    {item.institution}
                  </p>
                  {item.details && (
                    <span className="inline-block text-[10px] font-bold bg-sky-50 dark:bg-slate-900 text-sky-700 dark:text-sky-400 px-2 py-0.5 rounded border border-sky-100/20 dark:border-sky-500/10">
                      {item.details}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Trainings & Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="flex items-center gap-2 font-poppins font-bold text-xl text-slate-850 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-3 text-left">
              <Award className="text-sky-600" size={22} />
              <span>Trainings & Certifications</span>
            </h4>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 text-left hover:border-sky-500/20 transition-all flex items-start gap-3 shadow-sm"
                  variants={itemVariants}
                >
                  <div className="p-2 rounded-xl bg-sky-50 dark:bg-slate-900 border border-sky-150/20 dark:border-sky-500/10 text-sky-600 mt-0.5 flex-shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-poppins font-semibold text-sm md:text-base text-slate-800 dark:text-white leading-tight">
                      {cert.title}
                    </h5>
                    <p className="font-hanken text-xs md:text-sm text-slate-500 dark:text-slate-400">
                      {cert.issuer} • <span className="font-semibold text-slate-650 dark:text-slate-350">{cert.year}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
