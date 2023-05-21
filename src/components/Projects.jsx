import React from 'react'
import Project from './Project'
import project from '../assets/project.png'

const Projects = () => {
  return (
    <div className="container projects">
      <div className="wrapper">
        <div className="title ">
          <h2 className="let-me">LET ME INTRODUCE MYSELF</h2>
          <h2 className="title-name">MY PROJECTS</h2>
        </div>

        <div className="projects-section">
          {/* <div className="project">
            <div className="img">
              <img src={project} alt="project" />
            </div>

            <div className="description">
              <h3>PROJECT NAME</h3>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing
              </p>

              <button className="details">
                <span className="circle">
                  <span className="icon arrow"></span>
                </span>
                <a href="#projects" className="button-text">
                  {" "}
                  View details
                </a>
              </button>
            </div>
          </div>

          <div className="project">
            <div className="img">
              <img src={project} alt="project" />
            </div>

            <div className="description">
              <h3>PROJECT NAME</h3>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing
              </p>

              <button className="details">
                <span className="circle">
                  <span className="icon arrow"></span>
                </span>
                <a href="#projects" className="button-text">
                  {" "}
                  View details
                </a>
              </button>
            </div>
          </div>

          <div className="project">
            <div className="img">
              <img src={project} alt="project" />
            </div>

            <div className="description">
              <h3>PROJECT NAME</h3>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing
              </p>

              <button className="details">
                <span className="circle">
                  <span className="icon arrow"></span>
                </span>
                <a href="#projects" className="button-text">
                  {" "}
                  View details
                </a>
              </button>
            </div>
          </div> */}

          <Project />
          <Project />
          <Project />



          {/* <div className="project">
            <div className="img"></div>
            <div className="text"></div>
          </div>

          <div className="project">
            <div className="img"></div>
            <div className="text"></div>
          </div>

          <div className="project">
            <div className="img"></div>
            <div className="text"></div>
          </div> */}

            {/* <h1>RIALS</h1> */}

        </div>
      </div>
    </div>
  );
}

export default Projects