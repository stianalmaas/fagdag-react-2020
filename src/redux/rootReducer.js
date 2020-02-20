import { combineReducers } from 'redux';
import appReducer from '../modules/app/reducer';
import { reducer as userReducers } from '../modules/settings/user/';
import { reducer as todos } from '../modules/todo/';

const settings = combineReducers({
  users: userReducers,
});

const reducer = combineReducers({
  appReducer,
  settings,
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
