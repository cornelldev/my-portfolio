import React from 'react'
import Card from './Cards/Cards'
import './Projects.css'

const Projects = () => {
  return (
    <>
    {/* PROJECTS PAGE */}
    <div className='container projects_container'>
        <h2 className='center projects_h2'>Projects</h2>
        <div className="container_inner">
          < Card />
        </div>
    </div>
    </>
  )
}

export default Projects