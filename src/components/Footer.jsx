'use client';
import React, {useRef} from 'react'
import { motion, useInView } from 'framer-motion';

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer 
      ref={ref}
      className='relative container p-10 mt-10 flex items-center justify-center'
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? {opacity: 1, y: 0} :  {opacity: 0, y: 30}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <p className='text-sm font-bold text-sky-700 text-center dark:text-darkTextDeep'>created by mustopha</p>
      <motion.button 
        className='absolute right-6'
        onClick={scrollToTop}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='size-6 dark:text-darkTextDeep'>
            <path fill="currentColor" d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"></path>
        </svg>
      </motion.button>
    </motion.footer>
  )
}
