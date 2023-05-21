import React, { useState } from 'react'
import Isotipo from '../assets/Isotipo.png'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
  
    return (
      <>
          <nav>
  
            <img src={Isotipo} alt="Logo" />
  
            <div className={showNavbar ? "show" : " hidden"}>
  
              <a
                href="#home"
                onClick={() => {
                  setShowNavbar(false);
                }}
              >
                HOME
              </a>
              <a
                href="#about"
                onClick={() => {
                  setShowNavbar(false);
                }}
              >
                ABOUT ME
              </a>
              <a
                href="#projects"
                onClick={() => {
                  setShowNavbar(false);
                }}
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                className={`contact-btn`}
                onClick={() => {
                  setShowNavbar(false);
                }}
              >
                CONTACT ME
              </a>
            </div>
  
            <div className="menu-btn">
              <input
                type="checkbox"
                id="checkbox2"
                className="checkbox2 visuallyHidden"
                onClick={() => {
                  setShowNavbar(!showNavbar);
                }}
              />
              <label htmlFor="checkbox2">
                <div className="hamburger hamburger2">
                  <span
                    className={`bar ${showNavbar ? "transform-bar1" : "bar1"}`}
                  ></span>
                  <span
                    className={`bar ${showNavbar ? "transform-bar2" : "bar2"}`}
                  ></span>
                  <span
                    className={`bar ${showNavbar ? "transform-bar3" : "bar3"}`}
                  ></span>
                  <span
                    className={`bar ${showNavbar ? "transform-bar4" : "bar4"}`}
                  ></span>
                </div>
              </label>
            </div>
          </nav>
          
      </>
    );
}

export default Navbar