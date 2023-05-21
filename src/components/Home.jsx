import React, { useState, useEffect } from 'react'
import Isotipo from '../assets/Isotipo.png'
import render from '../assets/render.png'
import Navbar from './Navbar';

const Home = () => {

  return (
    <div className="container home">
      <div className="wrapper">

        <Navbar />

        <div className="main">

          <div className="welcome">

          <div className="hello">
            <h3 className='h'>HELLO</h3>
            <div className="bar"></div>
          </div>

          <h1 className='h'>I'M LEONARDO</h1>
          <h4 className='h'>Software Developer</h4>

          <button className='hire-me'>
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <a href='#contact' className="button-text"> HIRE ME </a>
          </button>

        </div>


        <div className="render-container">
          <img src={render} alt="3D Logo" />
        </div>

        </div>
        
        
      </div>
    </div>
  );
}

export default Home