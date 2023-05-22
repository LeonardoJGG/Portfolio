import React from 'react'
import Modal from './Modal';

const Project = (props) => {
  return (
    <div className="project">
      <div className="img">
        <img src={props.img} alt="project" />
      </div>

      <div className="description">
        <h3>{props.name}</h3>
        <p>{props.description}</p>

        <Modal
          image={props.image}
          modalTitle={props.modalTitle}
          modalContent={props.modalContent}
          modalContentTools={props.modalContentTools}
          repo={props.repo}
          demo={props.demo}
        />
      </div>
    </div>
  );
}

export default Project