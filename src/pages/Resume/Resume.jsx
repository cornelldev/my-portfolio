import React from 'react'
import Experience from './Experience/Experience'
import Skills from './Skills/Skills'
import Education from './Education/Education'
import CV from '../../assets/cv.pdf'
import './Resume.css'

const Resume = () => {
  return (
    <>
      {/* === RESUME PAGE === */}
      <div className='container resume dark-bg'>
        <h2 className='center'>Resume</h2>

        {/* =========== EXPERIENCE ============ */}
        <div className='experience_section resume_sections'>
          <h3 className='resume_sections_title'> Experience</h3>
          < Experience />
        </div>

        {/* =========== SKILLS ============ */}
        <div class="Skills_section resume_sections">
          <h3 className='resume_sections_title'>Skills</h3>
          < Skills />
        </div>

        {/* =========== EDUCATION ============ */}
        <div class="education_section resume_sections">
          <h3 className='resume_sections_title'>Education</h3>
          < Education />
        </div>

        <a href={CV} download className='btn resume-btn'>Get Resume</a>
      </div>
      
    </>
  )
}

export default Resume