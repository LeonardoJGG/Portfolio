import React, { useState } from 'react';
// import './Modal.css';
import project from '../assets/project.png'
import { UilGithub } from '@iconscout/react-unicons'
import { UilBrowser } from '@iconscout/react-unicons'

function Modal(props) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  }

  const openModal = () => {
    setShowModal(true);
  }

  return (
    <>

        <button className="details" onClick={openModal}>
            <span className="circle">
                <span className="icon arrow"></span>
            </span>
            <a className="button-text"> View details</a>
        </button>

        {showModal && (
            <div className="modal">
                <div className="modal-content">

                    <div className="left">
                        <img src={project} alt="Project" />
                    </div>

                    <div className="right">

                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{props.modalTitle}</h2>
                        <p>{props.modalContent}</p>
                        <p>{props.modalContentTools}</p>

                        <div className="buttons">

                          <a href='https://www.google.com' target='_blank'> <button> <UilGithub /> GITHUB  </button> </a>
                          <a href='https://www.google.com' target='_blank'> <button className='demo'> <UilBrowser /> DEMO  </button> </a>

                        </div>

                    </div>
                </div>
            </div>
        )}


      {/* <button onClick={openModal}>{props.buttonText}</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{props.modalTitle}</h2>
            <p>{props.modalContent}</p>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Modal;