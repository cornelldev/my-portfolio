import React from 'react'
import Card from './Cards/Cards'
import Pulse from 'react-reveal/Pulse';
import './Projects.css'

const Projects = () => {
  return (
    <Pulse>
    {/* PROJECTS PAGE */}
    <div className='container projects'>
        <h2 className='center'>Projects</h2>
        < Card />
    </div>
    </Pulse>
  )
}

export default Projects