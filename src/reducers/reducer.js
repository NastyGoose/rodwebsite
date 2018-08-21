import { combineReducers } from 'redux';
import projectsReducer from './projects';
import productsReducer from '../components/pages/Products';

const allReducers = combineReducers({
  projects: projectsReducer,
  products: productsReducer
});

export default allReducers;
