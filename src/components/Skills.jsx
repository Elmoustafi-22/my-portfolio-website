'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/data/skills'
import { hankenGrotesk, poppins } from '@/styles/fonts'


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }  
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.3 })

  return (
    <section ref={ref} id='skills' className='mt-40 container mx-auto'>
      <h3 className={`${poppins.className} font-extrabold text-4xl text-gray-700 text-center uppercase dark:text-darkTextDeep`}>Skills</h3>
      <motion.ul 
        className='text-gray-700 flex gap-6 max-w-lg flex-wrap mx-auto justify-center items-center mt-6'
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map(({ name, icon, href }) => (
          <motion.li
            key={name}
            whileHover={{ scale: 1.05 }}
            variants={itemVariants}
            className={`${hankenGrotesk.className}`}
          > 
          <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='dark:text-darkTextDeep flex flex-col items-center gap-1 text-base cursor-pointer text-center uppercase transition-transform duration-300'
          >
            {icon}
            {name}
          </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
