'use client'
import React, { useCallback, useContext } from 'react'
import { DarkModeContext } from '@/context/DarkModeContext'
import { motion } from 'framer-motion';

export default function Header() {
    const {darkMode, setDarkMode} = useContext(DarkModeContext);

    const toggleDarkMode = useCallback(() => {
        setDarkMode(prevMode => !prevMode);
    }, [setDarkMode])

  return (
    <motion.header 
        className='container mx-auto px-6 py-4'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        <div className='flex justify-between items-center'>
            
            <motion.p 
                className='dark:text-darkTextDeep dark:after:bg-darkTextDeep text-xl font-semibold text-sky-600 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-sky-600 hover:after:w-full pb-1 after:transition-all after:duration-300 cursor-pointer '
                whileHover={{ scale: 1.1 }}
                transition={{ duration:0.3 }}
            >
                Mustopha.
            </motion.p>
            
            <nav className='flex items-center gap-6'>
                <ul className='flex gap-6 text-gray-600 dark:text-darkTextLight text-sm'>
                    {['projects', 'skills', 'contact'].map((item) => (
                        <motion.li 
                            key={item}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <a
                                href={`#${item}`}
                                className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-sky-600 dark:after:bg-darkTextDeep after:transition-all after:duration-300 hover:text-sky-600 hover:after:w-full pb-2 transition-all dark:hover:text-darkTextDeep'
                            >
                                {item}
                            </a>
                        </motion.li>
                    ))}                    
                </ul>
                <motion.button
                    onClick={toggleDarkMode}
                    className='p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition'
                    whileTap={{ rotate: 360, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    {darkMode ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='dark:text-darkText hover:text-darkBg'>
                            <path fill="currentColor" d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41z"></path>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" >
                            <path fill="currentColor" d="M9.5 2c-1.82 0-3.53.5-5 1.35c2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35c5.52 0 10-4.48 10-10S15.02 2 9.5 2"></path>
                        </svg>
                    }   
            </motion.button>
            </nav>
                        
        </div>
        
    </motion.header>
  )
}
