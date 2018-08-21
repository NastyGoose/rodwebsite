import { combineReducers } from 'redux';
import projectsReducer from '../components/pages/projects';

const allReducers = combineReducers({
  projects: projectsReducer

});

export default allReducers;
