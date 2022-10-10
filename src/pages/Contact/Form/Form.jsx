import React from 'react'
import { GoLocation } from 'react-icons/go'
import { AiOutlinePhone } from 'react-icons/ai'
import { FaEnvelope } from 'react-icons/fa'
import Socials from '../../../component/Socials/Socials'
import './Form.css'

const Form = () => {
  return (
    <>
        {/* CONTACT FORM  */}
        <div className="contact_info">

            <ul className="contact-info_list">
                <li className="contact_info_list_item">
                    < GoLocation className='conatct_info_icon'/>
                    <span className="contact_info_list_icon place">Ikeja, Lagos</span>
                </li>
                
                <li className="contact_info_list_item">
                    < AiOutlinePhone className='conatct_info_icon' />
                    <span className="contact_info_list_icon phone"><a href="tel:234-808-809-0573" title="Call me">(808) 809-0573</a></span>
                </li>
                
                <li className="contact_info_list_item">
                    < FaEnvelope className='conatct_info_icon'/>
                    <span className="contact_info_list_icon gmail"><a href="mailto:corneliusolusoji@gmail.com" title="Send an email">corneliusolusoji</a></span>
                </li>
            
            </ul>
            
            <div className="contact_social_media">
                < Socials />
            </div>
        </div>  
    </>
  )
}

export default Form