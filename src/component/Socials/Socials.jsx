import React from 'react'
import {RiLinkedinLine} from 'react-icons/ri'
import {FiTwitter} from 'react-icons/fi'
import {VscGithub} from 'react-icons/vsc'
import './Socials.css'

const Socials = () => {
  return (
    // === SOCIAL MEDIA ICONS ===
    <div className='socials'>
      <a href="https://www.linkedin.com/in/mrcornelius" target="_blank" rel="noreferrer">< RiLinkedinLine /></a>
      <a href="https://twitter.com/corneldev" target="_blank" rel="noreferrer">< FiTwitter /></a>
      <a href="https://github.com/cornelldev" target="_blank" rel="noreferrer">< VscGithub /></a>
    </div>
  )
}

export default Socials