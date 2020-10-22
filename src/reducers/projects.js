import { PROJECTIMAGES } from '../constants/constants';

const projects = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.projects.map(project => ({
        image: PROJECTIMAGES[project.name.replace(/-/g, ' ')],
        title: project.name.replace(/-/g, ' '),
        company: project.stargazers_count.toString(),
        role: project.language,
        year: project.updated_at.slice(0, 10),
        description: project.description,
        longDescription: project.description,
        githubLink: project.html_url,
        demo: project.homepage,
        languages: project.topics,
        id: project.id,
      }));
    default:
      return state;
  }
};

export default projects;
