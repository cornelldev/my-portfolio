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
      <div className='container resume_container dark-bg'>
        <h2 className='center'>Resume</h2>
        <div className="container_inner">
          {/* =========== EXPERIENCE ============ */}
          <div className='experience_section resume_sections'>
            <h3 className='resume_sections_title'> Experience</h3>
            < Experience />
          </div>

          {/* =========== EDUCATION ============ */}
          <div class="education_section resume_sections">
            <h3 className='resume_sections_title'>Education</h3>
            < Education />
          </div>

          <a href={CV} download className='btn resume-btn'>Get Resume</a>

          {/* =========== SKILLS ============ */}
          <div class="Skills_section resume_sections">
            <h3 className='resume_sections_title'>Skills</h3>
            < Skills />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Resume