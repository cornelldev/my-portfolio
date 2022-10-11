import React from 'react'
import Avatar from '../../component/Avatar/Avatar'
import Bio from '../Home/Bio/Bio'
import './Home.css'

const Home = () => {
  return (
    // === HOME PAGE ===
    <div className='home'>
      < Avatar />
      < Bio />       
    </div>
  )
}

export default Home