'use client'
import React, {useRef} from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const isinView = useInView(ref, { triggerOnce: false, threshold:0.2 })

  return (
    <motion.section 
      ref={ref}
      className='container'
      initial={{ opacity: 0, y: 50 }}
      animate={isinView ? { opacity: 1, y: 0 }: {opacity: 0, y: 50}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <p className='font-extrabold text-gray-700 uppercase text-3xl dark:text-darkTextDeep text-center'>Contact</p>
      <div className='flex items-center justify-center'>
        <motion.a 
          className='relative mt-4 bg-white px-4 py-2 border-[1.5px] cursor-pointer border-sky-600 dark:border-darkTextDeep overflow-hidden group dark:bg-darkBg'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
            <span className='relative text-sm text-sky-600 dark:text-darkText  z-10 group-hover:text-white dark:group-hover:text-darkBgDeep transition-colors duration-300'>email me</span>
            <div className='absolute inset-0 w-full bg-sky-600 dark:bg-darkTextDeep -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in'></div>
        </motion.a>
      </div>
      
    </motion.section>
  )
}
