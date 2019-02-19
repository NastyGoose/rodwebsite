export const IS_OPEN = 'IS_OPEN';

export const changeState = (options, valueName) => dispatch => {
  dispatch({
    type: 'IS_OPEN',
    payload: {
      options,
      valueName
    }
  });
};
