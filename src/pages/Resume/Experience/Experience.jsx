import React from 'react'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import './Experience.css'


const experienceArray = [
  {
    id: 1,
    employer: 'Upwork',
    title: 'Frontend Developer',
    date: 'Nov 2021 - Present',
    summary: 'Currently a freelancer on upwork with more than 15 completed projects and over 150 work hours.'
  },
  {
    id: 2,
    employer: 'Olatech',
    title: 'Junior Frontend Developer',
    date: 'Sept 2020 - July 2021',
    summary: 'Created web pages, documentation, and provided technical support while supporting the team in design, development and testing'
  },
  {
    id: 3,
    employer: 'Outcess (Multichoice Nigeria)',
    title: 'Customer Service Agent',
    date: 'August 2021 - July 2022',
    summary: 'Processed inbound customer calls, providing information on service or product upgrades.'
  },
  {
    id: 4,
    employer: 'Vanke Machinery',
    title: 'Technical Support',
    date: 'April 2020 - July 2021',
    summary: 'Used company troubleshooting resolution trees to evaluate technical problems and find appropriate solutions.'
  },
  
];
  

const Experience = () => {
  return (
    <>
        {/* === RESUME EXPERIENCE === */}
        <div class="experience">
            {/* === EXPERIENCE CARD COMPONENT === */}
          {
            experienceArray.map(({id, employer, title, date, summary}) => {
              return (
                <div key={id} class="experience_card">
                  <div className="experience_card_title">
                      <i className='experience_card_title_icon'> < IoIosCheckmarkCircleOutline /> </i>
                      <h4>{title}</h4>
                  </div>
                  <div className="experience_card_description">
                      <h5>{employer}</h5>
                      <p className="job-date">{date}</p>
                      <p className="job-description">
                          {summary}
                      </p>
                  </div>
                </div>
              )
            })
          }

            
        </div>
   
    </>
  )
}

export default Experience