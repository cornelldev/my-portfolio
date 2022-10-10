import React from 'react'
import './Education.css'

const educationArray = [
  {
    id: 1,
    degree: 'Bsc. Entrepreneurship',
    date: '2014 - 2018',
    college: 'College of Management Sciences, Federal University of Abeokuta'
  },
  {
    id: 2,
    degree: 'Frontend Developer',
    date: 'Dec 2021 - Sept 2022',
    college: 'Zero To Mastery Academy',
  }
]

const Education = () => {
  return (
    <>
      {/* RESUME EDUCATION */}
      <div className="education">
        {
          educationArray.map(({id, degree, date, college}) => {
            return(
              <div key={id} className="education_card">
                <h4>{degree}</h4>
                <p className="education-date">{date}</p>
                <p className="education-place">{college}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Education