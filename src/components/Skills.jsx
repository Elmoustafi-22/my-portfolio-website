'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/data/skills'


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }  // Fixed incorrect y animation
}

export default function Skills() {
  return (
    <section className='mt-8 container max-w-lg mx-auto'>
      <h3 className='font-extrabold text-3xl text-gray-700 text-center uppercase dark:text-darkTextDeep'>Skills</h3>
      <motion.ul 
        className='text-gray-700 flex flex-wrap gap-4 justify-center items-center mt-6'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map(({ name, icon }) => (
          <motion.li
            key={name}
            whileHover={{ scale: 1.05 }}
            variants={itemVariants}
            className='dark:text-darkTextDeep flex flex-col items-center gap-1 text-xs cursor-pointer text-center uppercase transition-transform duration-300'
          >
            {icon}
            {name}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
