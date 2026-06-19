"use client";
import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Cpu, Database, Layout, Palette, Zap, Cloud, GitBranch } from "lucide-react";

const getIcon = (name: string) => {
  switch (name) {
    case "Cpu":
      return <Cpu className="text-sky-600" size={20} />;
    case "Database":
      return <Database className="text-sky-600" size={20} />;
    case "Layout":
      return <Layout className="text-sky-600" size={20} />;
    case "Palette":
      return <Palette className="text-sky-600" size={20} />;
    case "Zap":
      return <Zap className="text-sky-600" size={20} />;
    case "Cloud":
      return <Cloud className="text-sky-600" size={20} />;
    case "GitBranch":
      return <GitBranch className="text-sky-600" size={20} />;
    default:
      return <Cpu className="text-sky-600" size={20} />;
  }
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
  } as const;

  return (
    <section 
      id="skills" 
      className="relative w-full py-24 bg-white dark:bg-darkBgDeep border-t border-slate-200/40 dark:border-slate-800/40 overflow-hidden"
    >
      {/* Background ambient glowing blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sky-500/5 blur-[120px] pointer-events-none"></div>

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
            My Stacks
          </motion.h2>
          
          <motion.h3 
            className="text-3xl md:text-4xl font-extrabold tracking-tight font-poppins text-slate-850 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Technical Expertise
          </motion.h3>
          
          <motion.p 
            className="font-hanken text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            A breakdown of technologies, methodologies, and architectures I deploy to create production-ready digital products.
          </motion.p>
        </div>

        {/* Grouped Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 hover:border-sky-500/25 dark:hover:border-sky-500/15 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="space-y-4">
                {/* Card Title & Icon */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-850">
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850 shadow-sm">
                    {getIcon(cat.icon)}
                  </div>
                  <h4 className="font-poppins font-bold text-sm md:text-base text-slate-850 dark:text-white leading-tight">
                    {cat.category}
                  </h4>
                </div>

                {/* Card Skills Pill List */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs md:text-[13px] font-semibold font-hanken px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-slate-650 dark:text-slate-300 border border-slate-200/40 dark:border-slate-800/30 hover:border-sky-500/20 dark:hover:border-sky-500/10 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
