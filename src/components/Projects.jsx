'use client'
import ProjectContainer from '@/app/ProjectContainer'
import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section className='container'>
      <motion.h2 
        className='text-gray-700 dark:text-darkTextDeep text-center text-3xl font-bold uppercase'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration:0.5, ease: 'easeOut' }}
      >
        Projects
      </motion.h2>
      <motion.div 
        className='grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {projects.map((project, index) => (
          <ProjectContainer key={index} project={project}/>
        )
        )}
      </motion.div>
    </section>
  )
}
