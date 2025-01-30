import React from 'react'

export default function Skills() {
  return (
    <section className='mt-4 container mb-4 max-w-[400px]'>
      <h3 className='font-extrabold text-2xl text-gray-700 text-center uppercase'>Skills</h3>
      <ul className='text-xs text-gray-700 flex flex-wrap gap-3 justify-center items-center mt-6'>
            <li className='hover:-translate-y-1 transition duration-300  text-center uppercase py-2 px-4 bg-white shadow-md'>html</li>
            <li className='hover:-translate-y-1 transition duration-300  text-center uppercase py-2 px-4 bg-white shadow-md'>css</li>
            <li className='hover:-translate-y-1 transition duration-300  text-center py-2 px-4 bg-white shadow-md'>JavaScript</li>
            <li className='hover:-translate-y-1 transition duration-300  text-center py-2 px-4 bg-white shadow-md'>TypeScript</li>
            <li className='hover:-translate-y-1 transition duration-300  text-center py-2 px-4 bg-white shadow-md'>React</li>
            <li className='hover:-translate-y-1 transition duration-300  text-center py-2 px-4 bg-white shadow-md'>Redux</li>
            <li className='hover:-translate-y-1 transition duration-300  text-center uppercase py-2 px-4 bg-white shadow-md'>sass</li>
            <li className='hover:-translate-y-1 transition duration-300  text-center py-2 px-4 bg-white shadow-md'>Material UI</li>
            <li className='hover:-translate-y-1 transition duration-300  text-center py-2 px-4 bg-white shadow-md'>Git</li>
            <li className='hover:-translate-y-1 transition duration-300  text-center uppercase py-2 px-4 bg-white shadow-md'>ci/cd</li>
            <li className='hover:-translate-y-1 transition duration-300  text-center py-2 px-4 bg-white shadow-md'>Jest</li>
            <li className='hover:-translate-y-1 transition duration-300  text-center py-2 px-4 bg-white shadow-md'>Enzyme</li>
      </ul>
    </section>
  )
}
