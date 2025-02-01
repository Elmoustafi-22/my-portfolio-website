import React from 'react'

export default function Header() {
  return (
    <header className='container p-6'>
        <div className='flex justify-between items-center m-2'>
            <div>
                <p className='text-xl font-semibold text-sky-600 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-sky-600 hover:after:w-full pb-1 after:transition-all after:duration-300 cursor-pointer '>Mustopha.</p>
            </div>
            <nav className='flex gap-4'>
                <ul className='flex gap-4'>
                    <li><a className='text-sm text-gray-600 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-sky-600 after:transition-all after:duration-300 hover:text-sky-600 pb-2 hover:after:w-full transition-all cursor-pointer'>projects</a></li>
                    <li><a className='text-sm text-gray-600 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-sky-600 after:transition-all after:duration-300 hover:text-sky-600 hover:after:w-full transition-all pb-2 cursor-pointer'>skills</a></li>
                    <li><a className='text-sm text-gray-600 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-sky-600 after:transition-all after:duration-300 hover:text-sky-600 hover:after:w-full transition-all pb-2 cursor-pointer'>contact</a></li>
                </ul>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" >
                    <path fill="currentColor" d="M9.5 2c-1.82 0-3.53.5-5 1.35c2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35c5.52 0 10-4.48 10-10S15.02 2 9.5 2"></path>
                </svg>
            </button>
            </nav>
                        
        </div>
        
    </header>
  )
}
