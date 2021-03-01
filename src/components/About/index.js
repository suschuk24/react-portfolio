import React from 'react'

function About() {
    return (

        <section className="about" id="about">
            
            <div>
                <h3 className="section-title primary-border">
                    About Me
                </h3>
            </div>
            <div className="about-me-details">
                <img src={require("../../assets/images/profile-pic.jpg")} />
                <div className="my-paragraphs">
                    <p>
                        After eight successful years of leadership and management throughout various retail industries, I am
                        looking to use my newly honed skills as a full stack web developer, so I can venture into a field
                        that I am passionate about and leverage my skills within a community of cutting edge developers.
                    </p>
                </div>
            </div>
            {/* <div className="quote">
                <h2>"Websites promote you 24/7: No employee will do that."</h2>
                <p>-Paul Cockson</p>
            </div> */}
        </section>
    )
};

export default About;