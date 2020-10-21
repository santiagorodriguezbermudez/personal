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
        {project.languages.map(language => <span key={`${language}-key`}>{language}</span>)}
      </div>
      <button type="button" className="project-link" onClick={openModal}>
        See Project
      </button>
    </div>
  );

  const modalStyles = {
    content: {
      top: '50%',
      left: '10%',
      right: '10%',
      bottom: 'auto',
      transform: 'translate(0%, -50%)',
      borderRadius: '15px',
      boxShadow: '0 16px 32px',
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
        <div><img src={project.image} alt="modal_view" className="modal-img" /></div>
        <div className="modal-header">
          <h5>
            <span>{project.title}</span>
            {' '}
            |
            {' '}
            <span>{project.role}</span>
            {' '}
            |
            {' '}
            <span>{project.year}</span>
          </h5>
        </div>
        <div className="modal-description">
          <p>
            {project.longDescription}
          </p>
          <div className="modal-cta">
            {project.languages.map(language => <span key={`${language}-key`}>{language}</span>)}
          </div>
          <div className="modal-cta">
            <a className="modal-link" href={project.githubLink}> See Repo</a>
            <a className="modal-link" href={project.demo}> Live Demo</a>
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
