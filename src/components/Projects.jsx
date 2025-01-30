import ProjectContainer from '@/app/ProjectContainer'
import React from 'react'

export default function Projects() {
  return (
    <section className='container'>
      <h2 className='text-gray-600 text-center text-3xl font-semibold uppercase'>Projects</h2>
      <div className='grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3'>
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </div>
    </section>
  )
}
