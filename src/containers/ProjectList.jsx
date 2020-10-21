import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Project from '../components/Project';

const ProjectList = ({ projectList }) => {
  const renderProjects = () => projectList.map(project => (
    <Project key={project.id} project={project} />
  ));

  return (
    <div className="Project-Container">
      {renderProjects()}
    </div>
  );
};

ProjectList.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => (
  {
    projectList: state.projects,
  }
);

const connectedProjectList = connect(mapStateToProps)(ProjectList);

export default connectedProjectList;
