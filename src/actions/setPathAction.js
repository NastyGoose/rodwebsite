export const SET_PATH = 'SET_PATH';
export const IS_SIGNED_IN = 'IS_SIGNED_IN';

export const setPath = (path) => dispatch => {
  console.log('setPath called');
  dispatch({
    type: 'SET_PATH',
    payload: path
  });
};

export const signIn = (path) => dispatch => {
  console.log('setPath called');
  dispatch({
    type: 'SET_PATH',
    payload: path
  });
};
