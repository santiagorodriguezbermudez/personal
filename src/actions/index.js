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
      url: `${API_URL}/books`,
      headers: {
        Accept: 'application/json',
      },
    }).then(response => {
      console.log(response.data);
      dispatch(setProjects(response.data));
    }).catch(e => {
      console.log(e);
    });
  }
);
