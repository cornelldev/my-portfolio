import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa'
import { IoLogoJavascript  } from 'react-icons/io'
import { SiTypescript, SiPostgresql, SiRedux, SiJquery } from 'react-icons/si'
import { BiGitMerge } from 'react-icons/bi'
import './Skills.css'


const Skills = () => {
  return (
    <>
      {/* === RESUME SKILLS COMPONENT === */}
      <ul className='skills'>
        <li className="skill-card javascript">
          <div> < IoLogoJavascript /> </div>
          <p className="skill_name">Javascript
          <br /><span>< SiJquery /> Jquery</span>
          </p>
        </li>
        <li className="skill-card typescript">
          < SiTypescript />
          <p className="skill_name">Typescript</p>
        </li>
        <li className="skill-card react">
          < FaReact />
          <p className="skill_name">ReactJS
          <br /><span>< SiRedux /> ReduxJS</span>
          </p>
        </li>
        <li className="skill-card node">
          < FaNodeJs />
          <p className="skill_name">NodeJS
          <br /><span> Express</span>
          </p>
        </li>
        <li className="skill-card sql">
          < FaDatabase />
          <p className="skill_name">SQL
          <br /><span>< SiPostgresql /> Postgresql</span>
          </p>
        </li>
        <li className="skill-card git">
          < BiGitMerge />
          <p className="skill_name">Git
          <br/><span>< FaGithub /> Github </span>
          </p>
        </li>
      </ul>
    </>
  )
}

export default Skills