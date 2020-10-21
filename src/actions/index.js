import axios from 'axios';
import { API_URL } from '../constants/constants';

export const setProjects = projects => ({
  type: 'SET_PROJECTS',
  projects,
});

export const fetchProjectsAsync = () => (
  dispatch => {
    axios({
      method: 'GET',
      url: `${API_URL}`,
      headers: {
        Accept: 'application/json',
      },
    }).then(response => {
      const starredProjects = response.data.filter(project => project.owner.login === 'santiagorodriguezbermudez');
      console.log(starredProjects);
      dispatch(setProjects(starredProjects));
    }).catch(e => {
      console.log(e);
    });
  }
);
