import allConstants from './constants';

import allActions from './actions';

export const constants = {
  SETTINGS_GET_USERS: allConstants.SETTINGS_GET_USERS,
  SETTINGS_GET_USERS_SUCCESS: allConstants.SETTINGS_GET_USERS_SUCCESS,
  SETTINGS_GET_USERS_FAILED: allConstants.SETTINGS_GET_USERS_FAILED,
  SETTINGS_GET_USER: allConstants.SETTINGS_GET_USER,
  SETTINGS_GET_USER_SUCCESS: allConstants.SETTINGS_GET_USER_SUCCESS,
  SETTINGS_GET_USER_FAILED: allConstants.SETTINGS_GET_USER_FAILED,
};

export const sagaConstants = {
  SETTINGS_WATCH_GET_USERS: allConstants.SETTINGS_WATCH_GET_USERS,
  SETTINGS_WATCH_GET_USER: allConstants.SETTINGS_WATCH_GET_USER,
};

export const actions = {
  getUsers: allActions.getUsers,
  getUsersSuccess: allActions.getUsersSuccess,
  getUsersFailure: allActions.getUsersFailure,
  getUser: allActions.getUser,
  getUserSuccess: allActions.getUserSuccess,
  getUserFailure: allActions.getUserFailure,
};

export const sagaActions = {
  getUserSagaWatchAction: allActions.getUserSagaWatchAction,
  getUsersSagaWatchAction: allActions.getUsersSagaWatchAction,
};

export { default as reducer } from './reducer';

export {default as sagas } from './sagas';
