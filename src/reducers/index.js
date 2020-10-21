import { combineReducers } from 'redux';
import projects from './projects';

const combinedReducers = combineReducers({
  projects,
});

export default combinedReducers;
