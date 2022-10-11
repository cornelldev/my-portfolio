import React from "react";
import Socials from "../../../component/Socials/Socials";
import './Bio.css';

const Bio = () => {
    return (
        // PROFILE BIO
        <div className="bio dark-bg">
             <h4 className="text-light">Hi, I'm</h4>
             <h1>Cornell</h1>
             <h4 className="text-light">A Frontend Engineer</h4>
             < Socials />
           
        </div>
    )
}

export default Bio