import React from "react";
import avatar from '../../assets/avatar.png';
import './Avatar.css';

const Avatar = () => {
    return (
        // AVATAR
        <div className="avatar">
            <img className="avatar-img" alt='Cornelius' src={avatar}/>
        </div>
    )
}

export default Avatar