import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const Project = ({ project, order }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  Modal.setAppElement('#root');
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const projectImage = project => (
    <img src={project.image} alt="project" className="project-img" />
  );

  const projectDescription = project => (
    <div className="project-description">
      <h2>{project.title}</h2>
      <h5>
        <span>{project.company}</span>
        |
        {' '}
        <span>{project.role}</span>
        |
        {' '}
        <span>{project.year}</span>
      </h5>
      <p>{project.description}</p>
      <div className="stacks">
        {project.languages.reduce((totalString, language) => totalString + language)}
      </div>
      <button type="button" className="project-link" onClick={openModal}>
        See Project
      </button>
    </div>
  );

  const modalStyles = {
    content: {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    },
  };

  return (
    <div className="project-container shadow-lg">
      {order % 2 === 0 ? projectImage(project) : projectDescription(project)}
      {order % 2 === 0 ? projectDescription(project) : projectImage(project)}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="This is a test modal"
      >
        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <h5>
            <span>{project.company}</span>
            |
            {' '}
            <span>{project.role}</span>
            |
            {' '}
            <span>{project.year}</span>
          </h5>
        </div>
        <div>{project.image}</div>
        <div className="modal-description">
          <p>
            {project.longDescription}
          </p>
          <div>
            {project.languages.reduce((totalString, language) => totalString + language)}
            <hr />
          </div>
          <div>
            {project.githubLink}
            {project.demo}
          </div>
        </div>
      </Modal>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.objectOf(PropTypes.string).isRequired,
  order: PropTypes.number.isRequired,
};

export default Project;
