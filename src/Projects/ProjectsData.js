import React from 'react'
import librarymanagement from '../Images/Library Managements.png'
import ProjectsCard from './ProjectsCard'


const ProjectsData = () => {
    let card = [{
        projectTitle: 'Library Managements',
        image: librarymanagement,
        github: 'https://github.com/Maheswarishankar/library-managements-formik',
        netify: 'https://react-library-managements.netlify.app/',
    },
    {
        projectTitle: 'Library Managements',
        image: librarymanagement,
        github: 'https://github.com/Maheswarishankar/library-managements-formik',
        netify: 'https://react-library-managements.netlify.app/'
    },
    {
        projectTitle: 'Library Managements',
        image: librarymanagement,
        github: 'https://github.com/Maheswarishankar/library-managements-formik',
        netify: 'https://react-library-managements.netlify.app/',
    }]
  return (
    <section className="projects" id="projects">
            <div className='project_title'>                
                <h1 className='animate__animated  animate__bounce  home-content pro-titleh5'> My Projects</h1><br/><br/>            
            <div className="projects-containers">
                <ProjectsCard data={card[0]} />
                <ProjectsCard data={card[1]} />
                <ProjectsCard data={card[2]} />
               
            </div>
            </div>
        </section>
    


  )
}

export default ProjectsData