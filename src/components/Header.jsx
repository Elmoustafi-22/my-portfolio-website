import React from 'react'

export default function Header() {
  return (
    <header className='container p-6'>
        <div className='flex justify-between items-center m-2'>
            <div>
                <p className='text-xl font-semibold text-sky-500'>Mustopha.</p>
            </div>
            <nav className='flex gap-4'>
                <ul className='flex gap-4'>
                    <li><a className='text-sm text-gray-600'>projects</a></li>
                    <li><a className='text-sm text-gray-600'>skills</a></li>
                    <li><a className='text-sm text-gray-600'>contact</a></li>
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
