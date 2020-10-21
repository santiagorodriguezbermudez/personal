import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Project from '../components/Project';

const ProjectList = ({ projectList }) => {
  const renderProjects = () => projectList.map((project, index) => (
    <Project key={project.id} project={project} order={index} />
  ));

  return (
    <div id="projects">
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
