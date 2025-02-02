'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectContainer({ project }) {
  return (
    <motion.div 
        className=' bg-white w-[280px] max-h-[300px] p-5 shadow-lg mt-10 hover:-translate-y-1 transition duration-300 dark:bg-darkBg'
        whileHover={{ scale:1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
    >
        <h3 className='text-center font-extrabold text-gray-600 dark:text-darkText text-xl'>{project.title}</h3>
        <div className='flex flex-col gap-6 mt-4'>
            <p className='text-center text-sm text-gray-600 dark:text-darkTextLight'>{project.description}</p>
            <ul className='flex gap-3 justify-center text-xs text-gray-800 font-medium'>
                {project.technologies.map((tech, index) => (
                    <motion.li
                        key={index}
                        className='px-2 py-1 bg-gray-100 rounded-md dark:bg-darkText dark:text-darkBgDeep'
                        whileHover={{ scale: 1.1 }}
                    >
                        {tech}
                    </motion.li>
                ))}
            </ul>
            <div className='flex justify-center gap-4 items-center'>
                <motion.a 
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-sky-600 dark:after:bg-darkTextDeep after:duration-300 hover:after:w-full cursor-pointer pb-2 group'
                    whileHover={{ scale: 1.2 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"  className='text-gray-600 dark:text-darkTextDeep size-5 duration-300 hover:text-sky-600 transition-all'><path fill="currentColor" fillRule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.98 7.98 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0" clipRule="evenodd"></path></svg>
                </motion.a>
                <motion.a 
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-sky-600 dark:after:bg-darkTextDeep after:duration-300 hover:after:w-full cursor-pointer pb-2'
                    whileHover={{ scale: 1.2 }}
                >    
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='text-gray-600 dark:text-darkTextDeep size-5 duration-300 hover:text-sky-600 transition-all'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                </motion.a>
            </div>
        </div>
    </motion.div>
  )
}
