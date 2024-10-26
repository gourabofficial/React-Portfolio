import React from 'react'
import ProjectCard from './ProjectCard';

export const Project = () => {
  return (
    <div  id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Project</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5" >

        <ProjectCard title= "Weather Application" main= "current weather checking" />
        <ProjectCard title= "Currency Converter" main= "currency converter " />
        <ProjectCard title= "Password Generator " main= "password generator react " />
        <ProjectCard title= "Myntra clone " main= "myntra clone using html css" />

      </div >
    </div>
  )
}

export default Project;
