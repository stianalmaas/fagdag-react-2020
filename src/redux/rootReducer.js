import { combineReducers } from 'redux';
import appReducer from '../modules/app/reducer';

const reducer = combineReducers({
  appReducer,
});

const initialState = {
  app: {
    user: {
      userName: 'userName',
      roles: ['USER'],
    },
  },
};

const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
