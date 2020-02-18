import { constants } from  './';
import { combineReducers } from 'redux'
import { VisibilityFilters } from './constants'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case constants.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
};

const data = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        }
      ];
    case constants.TOGGLE_TODO:
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const reducers = combineReducers({
  data,
  visibilityFilter
});

export default reducers;
