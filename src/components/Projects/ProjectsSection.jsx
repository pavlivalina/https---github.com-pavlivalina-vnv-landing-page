import React from 'react'
import './ProjectSection.css';
import ProjectSlider from './ProjectSlider/ProjectSlider';

const ProjectsSection = () => {
  return (
    <div className='projects-section' id='projects-section'>
      <div className='projects-title'>
          <h1>Projects</h1>  
      </div>
      <ProjectSlider></ProjectSlider>
  </div>
  )
}

export default ProjectsSection