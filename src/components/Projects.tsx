"use client";
import ProjectContainer from "@/app/ProjectContainer";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="relative w-full py-24 bg-slate-50 dark:bg-darkBgDeep border-t border-slate-200/40 dark:border-slate-800/40"
    >
      {/* Background radial glows for visual balance */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-sky-500/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.h2 
            className="text-xs uppercase tracking-widest font-extrabold text-sky-600 font-poppins"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            My Work
          </motion.h2>
          
          <motion.h3 
            className="text-3xl md:text-4xl font-extrabold tracking-tight font-poppins text-slate-850 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Featured Projects
          </motion.h3>
          
          <motion.p 
            className="font-hanken text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            A curated selection of core applications I have designed, architected, and built. Click a project card to view live platforms or source files.
          </motion.p>
        </div>

        {/* Project Card Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
