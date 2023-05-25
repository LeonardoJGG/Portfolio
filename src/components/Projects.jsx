import React from 'react'
import Project from './Project'
import portfolio from '../assets/portfolio.png'
import budget from '../assets/budget.png'
import login from '../assets/login.png'

const Projects = () => {
  return (
    <div className="container projects">
      <div className="wrapper">
        <div className="title ">
          <h2 className="let-me">LET ME INTRODUCE MYSELF</h2>
          <h2 className="title-name">MY PROJECTS</h2>
        </div>

        <div className="projects-section">

          
        <Project
            name="PORTFOLIO"
            img={portfolio}
            description="In my portfolio, you will find a selection of my most creative projects."
            image={portfolio}
            modalTitle={"PORTFOLIO"}
            modalContent={"This project was designed and developed with passion and dedication. You can learn about my experience and skills, and I am very confident that you will find something interesting in my portfolio! Thank you for watching."}
            modalContentTools={"React - CSS - Figma"}
            repo='https://github.com/LeonardoJGG/Portfolio'
          />

          <Project
            name="BUDGET WEB APP"
            img={budget}
            description="With this application you can manage your finances efficiently and safely."
            image={budget}
            modalTitle="BUDGET WEB APP"
            modalContent="With this application you have the possibility of managing your finances by creating different accounts with the option of managing two different currencies, managing expenses, income and transactions between personal accounts or currency exchange... This is not responsive, I recommend watching from a computer"
            modalContentTools="React - Redux - Nodejs - Postgres"
            repo='https://github.com/LeonardoJGG/Budget-App'
            demo='https://leonardojgg-budget.netlify.app/'
          />

          <Project
            name="LOGIN"
            img={login}
            description="A secure and easy-to-use login to protect your data and privacy."
            image={login}
            modalTitle="LOGIN"
            modalContent="My login project is a secure and easy-to-use solution to protect your online accounts. With an intuitive interface, you can log in to your accounts quickly and easily. Don't worry about the privacy of your online accounts anymore, my login project has got you covered!"
            modalContentTools="React - CSS - Nodejs - Postgres"
            repo='https://github.com/LeonardoJGG/Login-complete'
            demo='https://leonardojgg-login.netlify.app/'
          />


        </div>
      </div>
    </div>
  );
}

export default Projects