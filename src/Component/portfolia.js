import React from "react";
import profile from '../utils/images/IMG20230212172424.jpg'
const Portfolio=()=>{
    return(
        <div>
            <h2 className="ui center aligned icon header">
                <i className="circular user icon"></i>
                About
            </h2>
            <div className="ui contents">
                <div className="comment">
                    <a href="/" className="avatar"><img src={profile} alt="images" width='300px' height='400px'/></a>
                <div className="content">
                    <a href="/" className="author">Jai</a>
                <div className="metadata">
                    <span className="text">Jai-Jayathilak
                    Saveetha Engineering college
                    CSE department
                    </span>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;