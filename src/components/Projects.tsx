"use client";
import ProjectContainer from "@/app/ProjectContainer";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import { poppins, hankenGrotesk } from "@/styles/fonts";
import Link from "next/link";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.5 });

  return (
    <motion.section
      id="projects"
      ref={ref}
      className={`container mt-0 ${poppins.className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-gray-700 dark:text-darkTextDeep text-center text-3xl font-bold uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {projects.map((project, index) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
}
