import React from 'react'
import './Projects.css'

const ProjectsCard = (props) => {
  return (

    <div className="project-container project-card">
    <h3 className="project-title">{props.data.projectTitle}</h3>
    <img
        src={props.data.image}
        alt="Project_Image"
        loading="lazy"
        className="project-pic"
    />   

    <div className="project_links">
        <a href={props.data.netify} target="_blank" rel="noreferrer" className="project-link">Demo
            
        </a>
        <a href={props.data.github} target="_blank" rel="noreferrer" className="project-link">Source Code
            
        </a>
    </div>
</div>
    
  )
}

export default ProjectsCard