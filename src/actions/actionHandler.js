import { SET_PATH } from './setPathAction';
import { IS_OPEN } from './modalStatelAction';
import {SHOW_SIDEBAR, SET_USER, LOGOUT} from './sidebarStateAction';
import {SHOW_PANEL} from './panelStateAction';

const initialState = {
  isOpen: false,
  showSidebar: false,
  showPanel: false,
  email: {
    email: '',
    login: '',
    password: ''
  }
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
        isOpen: !(action.payload.valueName === null),
        valueName: action.payload.valueName,
        options: action.payload.options
      };
    case SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: action.payload
      };
    case SHOW_PANEL:
      return {
        ...state,
        showPanel: action.payload
      };
    case SET_USER:
      return {
        ...state,
        isSignedIn: true,
        email: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isSignedIn: false
      };
    default:
      return state;
  }
};
