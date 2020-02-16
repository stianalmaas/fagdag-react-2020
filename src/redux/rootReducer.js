import { combineReducers } from 'redux';
import appReducer from '../modules/app/reducer';
import userReducers from '../modules/settings/user/reducer';
import todos from '../modules/todo/reducer';

const settings = combineReducers({
  users: userReducers,
});

const reducer = combineReducers({
  appReducer,
  todos,
  settings,
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
