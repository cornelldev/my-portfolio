import React from 'react'
import Form from './Form/Form'
import Fade from 'react-reveal/Fade';
import './Contact.css'

const Contact = () => {
  return (
    <Fade bottom>
      {/* === CONTACT PAGE === */}
      <div className='container contact dark-bg'>
        <h2 className="center">Contact</h2>
        < Form />
      </div>
    </Fade>
  )
}

export default Contact