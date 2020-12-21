import React from 'react'

function Resume() {

    return (
        <div className="resume">
            <div className="resume-item">
                <a href="https://docs.google.com/document/d/1IQw02rMpAzm7ZScXtWFaUd6zltB5FjN3eW-jIxcBECo/edit?usp=sharing">My Resume
                </a>
            </div>
            <div className="resume-item">
                <img src={require("../../assets/images/resume-1.png")} />
                <img src={require("../../assets/images/resume-2.png")} />
            </div>

        </div>

    )
}

export default Resume