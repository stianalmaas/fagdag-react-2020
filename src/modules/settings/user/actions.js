import {
  constants as c,
  sagaConstants as sc,
} from './';

const getUsers = () => ({
  type: c.SETTINGS_GET_USERS,
});

const getUsersSuccess = payload => ({
  type: c.SETTINGS_GET_USERS_SUCCESS,
  payload,
});

const getUsersFailure = error => ({
  type: c.SETTINGS_GET_USERS_FAILED,
  error,
});

const getUser = () => ({
  type: c.SETTINGS_GET_USER,
});

const getUserSuccess = payload => ({
  type: c.SETTINGS_GET_USER_SUCCESS,
  payload,
});

const getUserFailure = error => ({
  type: c.SETTINGS_GET_USER_FAILED,
  error,
});

const getUserSagaWatchAction = (userId) => ({
  type: sc.SETTINGS_WATCH_GET_USER,
  userId,
});

const getUsersSagaWatchAction = () => ({
  type: sc.SETTINGS_WATCH_GET_USERS,
});

export default {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  getUser,
  getUserSuccess,
  getUserFailure,
  getUserSagaWatchAction,
  getUsersSagaWatchAction,
};

