import React from 'react'

export default function Footer() {
  return (
    <footer className='relative container p-10 mt-10 flex items-center justify-center'>
      <p className='text-sm font-bold text-sky-700 text-center'>created by mustopha</p>
      <button className='absolute right-6'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='size-6'>
            <path fill="currentColor" d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"></path>
        </svg>
      </button>
    </footer>
  )
}
