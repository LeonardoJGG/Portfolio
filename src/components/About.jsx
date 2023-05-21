import React from 'react'
import about from '../assets/about-me.png'

const About = () => {
  return (
    <div className='container about'>
      <div className="wrapper">

        <div className="title">
          <h2 className='let-me'>LET ME INTRODUCE MYSELF</h2>
          <h2 className='title-name'>ABOUT ME</h2>
        </div>

        <div className="about-body">

          <div className="left">
            <img src={about} alt="Image" />
            <button className='download'>
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <a href='https://drive.google.com/file/d/1lZGRBlX07WcI15jBo0TpaRZBAdoWy7oX/view?usp=sharing' download target='_blank' className="button-text"> DOWNLOAD CV </a>
            </button>
          </div>

          <div className="right">
            <p>A pleasure, I'm <span>Leonardo Guevara</span>. <br /> <br />

                I dedicate myself to fullstack development mainly with Javascript and its different frameworks and tools. <br /> <br />

                I am passionate about technology and constant learning, very constant and very disciplined <br /> <br />

                I started in the world of technology during my childhood, going through video game stages, doing personal graphic design projects and of course, small hobby projects with programming. <br /> <br />

                Outside the world of technology I am a sports lover, I am a basketball player and I have a great passion for fitness and bodybuilding, I am a big fan of comedy and quite curious about psychology. <br /> <br />

                Constant personal development is my main goal.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About