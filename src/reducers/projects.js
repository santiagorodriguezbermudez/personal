import mindClickImage from '../assets/images/MC-Project.png';

const projects = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.projects.map(project => ({
        image: mindClickImage,
        title: project.name,
        company: 'Mind Click',
        role: 'Tech Co-Founder',
        year: '2020',
        description: project.description,
        longDescription: project.description,
        githubLink: project.html_url,
        demo: project.homepage,
        languages: ['HTML', 'CSS', 'Ruby on Rails'],
        id: project.id,
      }));
    default:
      return state;
  }
};

export default projects;
