
import React from 'react'

export default function Hero() {
  return (
    <main className='container pt-12 max-w-xl'>
        <div className='flex flex-col gap-8'>
            <h1 className='text-center text-4xl font-bold text-gray-700'>
                Hi, I am <span className='text-sky-600'>Mustopha.</span>
            </h1>
            <h2 className='text-center text-2xl font-bold text-gray-600'>A Front End Engineer.</h2>
            <p className='max-w-[560px] mx-auto text-xs text-gray-600'>
                Front-end developer skilled in React, Next.js, and Tailwind CSS. Passionate about building responsive, user-friendly interfaces. Experienced in UI/UX design, component-based architecture, and performance optimization for modern web applications.
            </p>
            <div className=' flex items-center justify-center gap-4'>
                <a className='relative bg-white px-4 py-2 border-[1.5px] cursor-pointer border-sky-600 overflow-hidden group'>
                    <span className='relative text-sm text-sky-600 z-10 group-hover:text-white transition-colors duration-300'>resume</span>
                    <div className='absolute inset-0 w-full bg-sky-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in'></div>
                </a>
                <a className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"  className='text-gray-600 size-5'><path fill="currentColor" fillRule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.98 7.98 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0" clipRule="evenodd"></path></svg>
                </a>
                <a className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" className='text-gray-600 size-4'><path fill="currentColor" fillRule="evenodd" d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39m1 7.516V6.234h-2v6.579zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </main>
  )
}
