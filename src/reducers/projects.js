const projects = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.projects.map(project => ({
        image: project.image,
      }));
    default:
      return state;
  }
};

export default projects;
