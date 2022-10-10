import React from 'react'
import project1 from '../../../assets/images/project1.png'
import project2 from '../../../assets/images/project2.png'
import project3 from '../../../assets/images/project3.png'
import project4 from '../../../assets/images/project4.png'
import project5 from '../../../assets/images/project5.jpg'
import project6 from '../../../assets/images/project6.png'
import './Cards.css'


const projectsArray = [
  {
    id: 1,
    image: project1,
    summary: 'Loopstudios landing page',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'Javascript',
    tech4: '',
    live: 'https://cornelldev.github.io/Loopstudios/',
    repo: 'https://github.com/cornelldev/Loopstudios'
  },
  {
    id: 2,
    image: project2,
    summary: 'Blogr landing page',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'Javascript',
    tech4: '',
    live: 'https://cornelldev.github.io/Blogr',
    repo: 'https://github.com/cornelldev/Blogr'
  },
  {
    id: 3,
    image: project3,
    summary: 'Sunnyside Agency landing page',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'Javascript',
    tech4: '',
    live: 'https://cornelldev.github.io/Sunnyside-agency-landing-page',
    repo: 'https://github.com/cornelldev/Sunnyside-agency-landing-page'
  },
  {
    id: 4,
    image: project4,
    summary: 'Corporate landing page',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'Javascript',
    tech4: '',
    live: 'https://ubiq.netlify.app',
    repo: 'https://github.com/cornelldev/Coperate_Landing_Page'
  },
  {
    id: 5,
    image: project5,
    summary: "A Recruitment dashboard (NDA)",
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'Javascript',
    tech4: '',
    live: 'https://corneldev.netlify.app/#!',
    repo: 'https://github.com/cornelldev/recruiters-dashboard'
  },
  {
    id: 6,
    image: project6,
    summary: "Robot friend app",
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'React',
    tech4: 'Api',
    live: 'https://myrobotsarmy.netlify.app',
    repo: 'https://github.com/cornelldev/myrobots'
  },
]

const Card = () => {
  return (
    // === PORTFOLIO CARDS GRID ===
    <div className='portfolio_cards'>

      {/* === CARD COMPONENT (MAP ARRAY) === */}
      {
        projectsArray.map(({id, image, summary, tech1, tech2, tech3, tech4, live, repo}) => {
          return(
            <div key={id} className="portfolio_card center dark-bg">
              <div className="portfolio_card_image_scroll">
                <img className="portfolio_card_image" alt={image} src={image}/>
              </div>
              
              <h4 className="portfolio_card_summary">{summary} </h4>

              {/* PROJECT TECH STACK */}
              <ul className="project_tech">
                  <li className="tech_list_item">{tech1}</li>
                  <li className="tech_list_item">{tech2}</li>
                  <li className="tech_list_item">{tech3}</li>
                  <li className="tech_list_item">{tech4}</li>
              </ul>

              {/* CARD CTA BUTTONS */}
              <div className="portfolio_cta">
                  <a href={live} target='_blank' rel="noreferrer" className="btn project_btn1">Live</a>
                  <a href={repo} target='_blank' rel="noreferrer" className="btn btn-primary project_btn2">Git</a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card