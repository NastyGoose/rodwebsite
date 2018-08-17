export const select = (project) => {
  return {
    type: 'PROJECT_SELECTED',
    payload: project
  };
};
