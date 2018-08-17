import { combineReducers } from 'redux';
import projectsReducer from '../components/pages/projects';
import activeProject from './project-active';

const allReducers = combineReducers({
  projects: projectsReducer,
  active: activeProject
});

export default allReducers;
