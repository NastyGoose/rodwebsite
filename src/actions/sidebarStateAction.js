export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export const changeState = (show) => dispatch => {
  dispatch({
    type: 'SHOW_SIDEBAR',
    payload: show
  });
};

export const setUser = (user) => dispatch => {
  dispatch({
    type: 'SET_USER',
    payload: user
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: 'LOGOUT'
  });
};
