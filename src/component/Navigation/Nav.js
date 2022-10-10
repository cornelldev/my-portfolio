import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import {AiOutlineUser, AiOutlineHome, AiOutlineSolution} from 'react-icons/ai'
import {IoBriefcaseOutline} from 'react-icons/io5'
import {MdOutlinePermPhoneMsg} from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
    const [activeNav, setActivNav] = useState('/')
    return (
        // === NAVIGATION (USING REACT-ROUTER LINK) ===
        <nav className="navBar glass-bg">

            <Link to='/' 
                onClick={() => setActivNav('#home')} 
                className={activeNav === '#home' ? 'active' : ''}
                data-tip="Home"> 
                <AiOutlineHome />
            </Link>

            <Link to='/about'  
                onClick={() => setActivNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}
                data-tip="About">
                <AiOutlineUser />
            </Link>

            <Link to='/resume'
                onClick={() => setActivNav('#resume')}
                className={activeNav === '#resume' ? 'active' : ''}
                data-tip="Resume">
                <AiOutlineSolution />
            </Link>

            <Link to='/projects'
                onClick={() => setActivNav('#projects')}
                className={activeNav === '#projects' ? 'active' : ''}
                data-tip="Projects">
                <IoBriefcaseOutline />
            </Link>

            <Link to='/contact'
                onClick={() => setActivNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}
                data-tip="Contact">
                <MdOutlinePermPhoneMsg />
            </Link>
            <ReactTooltip />
        </nav>
    )
}

export default Nav