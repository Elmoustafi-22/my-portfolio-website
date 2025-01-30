import React from 'react'

export default function Contact() {
  return (
    <section className='container'>
      <p className='font-extrabold text-gray-700 uppercase text-2xl text-center'>Contact</p>
      <div className='flex items-center justify-center'>
        <a className='relative mt-4 bg-white px-4 py-2 border-[1.5px] cursor-pointer border-sky-600 overflow-hidden group'>
            <span className='relative text-sm text-sky-600 z-10 group-hover:text-white transition-colors duration-300'>email me</span>
            <div className='absolute inset-0 w-full bg-sky-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in'></div>
        </a>
      </div>
      
    </section>
  )
}
