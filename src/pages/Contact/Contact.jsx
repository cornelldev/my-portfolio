import React from 'react'
import Info from './Info/Info'
import './Contact.css'

const Contact = () => {
  return (
    <>
      {/* === CONTACT PAGE === */}
      <div className='container contact_container dark-bg'>
        <h2 className="center">Contact</h2>
        <div className="container_inner">
          < Info />
        </div>
      </div>
    </>
  )
}

export default Contact