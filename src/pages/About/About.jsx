import React from 'react'
import Avatar from '../../component/Avatar/Avatar'
import './About.css'

const About = () => {
  return (
    <>
      {/* ABOUT PAGE AVATAR */}
      < Avatar />

      {/* ABOUT PAGE TEXT-BOX */}
      <div className='container about_container center dark-bg'>
        <h2 className='about-section-h2'>About Me</h2>
        <p className='about-section-p container_inner'>
        A self-taught Javascript developer with years of of experience building and maintaining web applications using CSS, React.js, Node.js and Github. I love visually appealing websites that feature user-friendly interface design and functionality.
        
        I'm always on frontend projects, working with HTML, CSS, Javascript and Git. I dream of working with a team of experienced developers, imagine all the knowledge!
        </p>
      </div>


    </>
    
  )
}

export default About