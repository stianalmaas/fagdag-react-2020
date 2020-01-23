const menuInitialState = {
  selectedPath: null,
  selectedLevelId: '0',
  fetching: false,
  error: null,
  currentMenu: [],
  levels: undefined,
};

function reducer(state = { ...menuInitialState }, action) {
  return state;
}

export default reducer;
