"use client";
import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectContainer({ project }: { project: Project }) {
  return (
    <motion.div
      className="group w-full md:w-[95%] lg:w-[48%] bg-white/40 dark:bg-slate-900/35 border border-slate-200/50 dark:border-slate-800/40 rounded-3xl p-5 shadow-sm hover:shadow-lg dark:shadow-none hover:border-sky-500/30 dark:hover:border-sky-550/20 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        {/* Project Thumbnail Screenshot */}
        <a href={project.live || "#"} target={project.live ? "_blank" : "_self"} rel="noopener noreferrer" className="block relative">
          <div className="relative w-full h-[260px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 shadow-inner">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-105 dark:bg-slate-900 text-slate-400">
                <span>No Image Available</span>
              </div>
            )}
          </div>
        </a>

        {/* Info */}
        <div className="space-y-2 text-left">
          <div className="flex justify-between items-center">
            <h3 className="font-poppins font-bold text-xl md:text-2xl text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {project.title}
            </h3>
            
            {/* Project Links */}
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                  title="Source Code"
                >
                  <Github size={18} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          <p className="font-hanken text-[15px] text-slate-600 dark:text-slate-350 leading-relaxed min-h-[50px]">
            {project.description}
          </p>
        </div>

        {/* Roles and Contribution */}
        <div className="space-y-2 text-left pt-3 border-t border-slate-100 dark:border-slate-850">
          <div className="text-sm text-slate-650 dark:text-slate-300">
            <span className="font-bold text-slate-700 dark:text-white uppercase tracking-wider text-xs">Role: </span>
            {project.role}
          </div>
          <div className="text-sm text-slate-550 dark:text-slate-350 leading-relaxed font-hanken">
            <span className="font-bold text-slate-700 dark:text-white uppercase tracking-wider text-xs block mb-0.5">Contribution: </span>
            {project.contribution}
          </div>
        </div>
      </div>

      {/* Tech Badges */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.filter(t => t !== "").map((tech, index) => (
          <span
            key={index}
            className="text-xs font-semibold font-hanken px-2.5 py-1 rounded-md glass-badge text-sky-650 dark:text-sky-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
