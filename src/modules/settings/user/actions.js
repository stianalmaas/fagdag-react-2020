import {
  SETTINGS_GET_USER, SETTINGS_GET_USER_FAILED, SETTINGS_GET_USER_SUCCESS,
  SETTINGS_WATCH_GET_USER,
  SETTINGS_WATCH_GET_USERS,
} from './constants';
import {
  SETTINGS_GET_USERS,
  SETTINGS_GET_USERS_SUCCESS,
  SETTINGS_GET_USERS_FAILED,
} from './constants';

export const getUsers = () => ({
  type: SETTINGS_GET_USERS,
});

export const getUsersSuccess = payload => ({
  type: SETTINGS_GET_USERS_SUCCESS,
  payload,
});

export const getUsersFailure = error => ({
  type: SETTINGS_GET_USERS_FAILED,
  error,
});

export const getUser = () => ({
  type: SETTINGS_GET_USER,
});

export const getUserSuccess = payload => ({
  type: SETTINGS_GET_USER_SUCCESS,
  payload,
});

export const getUserFailure = error => ({
  type: SETTINGS_GET_USER_FAILED,
  error,
});

export const getUserSagaWatchAction = (userId) => ({
  type: SETTINGS_WATCH_GET_USER,
  userId,
});

export const getUsersSagaWatchAction = () => ({
  type: SETTINGS_WATCH_GET_USERS,
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
