import { constants } from './index';

const addTodo = text => ({
  type: constants.ADD_TODO,
  text
});

const toggleTodo = index => ({
  type: constants.TOGGLE_TODO,
  index
});

const setVisibilityFilter = filter => ({
  type: constants.SET_VISIBILITY_FILTER,
  filter
});

export default {
  addTodo,
  toggleTodo,
  setVisibilityFilter
};
