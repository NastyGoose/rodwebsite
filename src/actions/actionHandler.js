function page (state = initialState, action) {
  switch (action.type) {
    case GET_MODAL:
      return {...state, modalState: action.payload}; // Object spread syntax
    default:
      return state;
  }
}
