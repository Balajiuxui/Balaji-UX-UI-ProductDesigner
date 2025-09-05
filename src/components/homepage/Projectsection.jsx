import React from 'react'
import "./Projectsection.css"
import { motion } from "motion/react"
import Projectcard from './Projectcard'
import { projects } from "./Projectdata.js";



const Projectsection = () => {
    console.log(projects)
  return (
    <>
    <div class="title-with-icon paddingclass no-padding-bottom container reveal from-bottom">
<img src="icons/casestudyicon.svg" alt="Description of icon" class="ux-process-icon"/>
<h1 class="heading-4 case-study-title">Featured Projects — From Insight to Impact</h1>
</div>

    <div className='container' >
        <div className="project-grid">
            
    {projects.map( project =>
<Projectcard 
   projectName={project.projectName}
      imageUrl={project.imageUrl}
      description={project.description}
       link= {project.link}
/>
    )}
    </div>
      {/* <Projectcard 
      projectName="Serein – A Happier Workplace Through Culture Design"
      imageUrl="/images/sereinmockup.png"
      description="hello testing des"
       link= "/serein"

      /> */}

    </div>
    </>
  )
}

export default Projectsection