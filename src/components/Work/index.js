import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Work () {
    return (
        <section className="my-work" id="my-work">
        <div>
            <h3 className="section-title secondary-border">
                My Favorite Applications
            </h3>
        </div>
        {/* <!--portfolio table--> */}
        <div className="portfolio-grid-wrapper">
            <div className="portfolio-grid-container">

                {/* <!-- Ultimate Movie Search--> */}
                <div className="portfolio-grid-item movie-search">
                    <div className="link">
                        <a href="https://teamjeangrey.github.io/ultimate-movie-search/" target="_blank">Ultimate Movie
                            Search</a>
                        <p>JavaScript</p>
                        <a href="https://github.com/TeamJeanGrey/ultimate-movie-search">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>
                {/* <!--Budget-Tracker---> */}
                <div className="portfolio-grid-item budget-tracker">
                    <div className="link">
                        <a href="https://budget-tracker-106.herokuapp.com/" target="_blank">Budget Tracker</a>
                        <p>Node.js</p>
                        <a href="https://github.com/suschuk24/budget-tracker">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>
                {/* <!--Run Buddy--> */}
                <div className="portfolio-grid-item run-buddy">
                    <div className="link">
                        <a href="https://suschuk24.github.io/run-buddy/" target="_blank">Run Buddy</a>
                        <p>HTML/CSS</p>
                        <a href="https://github.com/suschuk24/run-buddy">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>
                {/* <!--Weather Forecast--> */}
                <div className="portfolio-grid-item weather-forecast">
                    <div className="link">
                        <a href="https://suschuk24.github.io/weather-forecast/" target="_blank">Weather Forecast</a>
                        <p>JavaScript</p>
                        <a href="https://github.com/suschuk24/weather-forecast">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>
                {/* <!--Weather Forecast Dashboard--> */}
                <div className="portfolio-grid-item cloud-rolodex">
                    <div className="link">
                        <a href="https://powerful-ravine-82745.herokuapp.com/" target="_blank">Cloud Rolodex</a>
                        <p>Node/Express.js</p>
                        <a href="https://github.com/Team-Turkey/cloud-rolodex">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>
                {/* <!--Zookeepr--> */}
                <div className="portfolio-grid-item zookeepr">
                    <div className="link">
                        <a href="https://arcane-hollows-40719.herokuapp.com/" target="_blank">Zookeepr</a>
                        <p>Express.js</p>
                        <a href="https://github.com/suschuk24/zookeepr">
                             <FontAwesomeIcon  icon={["fab", "github-square"]}  size="2x" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}

export default Work