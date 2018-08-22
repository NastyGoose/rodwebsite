import { SET_PATH } from './setPathAction';
import { IS_OPEN } from './modalStatelAction';
import {SHOW_SIDEBAR} from './sidebarStateAction';

const initialState = {
  isOpen: false,
  showSidebar: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PATH:
      return {
        ...state,
        path: action.payload
      };
    case IS_OPEN:
      return {
        ...state,
        isOpen: !!action.payload.length,
        text: action.payload
      };
    case SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: action.payload
      };
    default:
      return state;
  }
};
