import { combineReducers } from 'redux';
import appReducer from '../modules/app/reducer';
import userReducers from '../modules/settings/user/reducer';
import todoReducer from '../modules/todo/reducer';

const todo = combineReducers({
  todos: todoReducer,
});

const settings = combineReducers({
  users: userReducers,
});

const reducer = combineReducers({
  appReducer,
  todo,
  settings,
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
