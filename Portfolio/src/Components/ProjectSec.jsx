import React from 'react'
import ProjectCard, { ProjectCardSec } from './ProjectCardSec';

export const ProjectSec = () => {
  return (
    <div  className="p-10 md:p-24 text-white shadow-xl  ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Project</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5" >

        <ProjectCardSec title= "Weather Application" main= "current weather checking" />
        <ProjectCardSec title= "Currency Converter" main= "currency converter " />
        <ProjectCardSec title= "Password Generator " main= "password generator react " />
        <ProjectCardSec title= "Myntra clone " main= "myntra clone using html css" />
        <ProjectCardSec title= "Amaxon clone  " main= "myntra clone using html css" />
        <ProjectCardSec title= "xyz clone " main= "myntra clone using html css" />

      </div >
    </div>
  )
}

export default ProjectSec;
