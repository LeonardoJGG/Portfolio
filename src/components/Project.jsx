import React from 'react'
import project from '../assets/project.png'
import Modal from './Modal';

const Project = (props) => {
  return (
    <div className='project'>
        <div className="img">
            <img src={project} alt="project" />
        </div>

        <div className="description">
            <h3>PROJECT NAME</h3>
            <p>
                It was popularised in the 1960s with the release of Letraset sheets containing
            </p>

            {/* <button className="details">
                <span className="circle">
                    <span className="icon arrow"></span>
                </span>
                <a href="#projects" className="button-text"> View details</a>
            </button> */}
            <Modal modalTitle='PROJECT NAME' modalContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." modalContentTools="React - Bootstrap - Nodejs - Postgress" />
        </div>
    </div>
  );
}

export default Project