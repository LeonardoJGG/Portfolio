import React, { useState } from 'react';
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
                        <img src={props.image} alt="Project" />
                    </div>

                    <div className="right">

                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{props.modalTitle}</h2>
                        <p>{props.modalContent}</p> 
                        <p>{props.modalContentTools}</p>

                        <div className="buttons">

                          <a href={props.repo} target='_blank'> <button> <UilGithub /> GITHUB  </button> </a>
                          <a href={props.demo} target='_blank'> <button className='demo'> <UilBrowser /> DEMO  </button> </a>

                        </div>

                    </div>
                </div>
            </div>
        )}

    </>
  );
}

export default Modal;