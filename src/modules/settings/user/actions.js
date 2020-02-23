import {
  constants as c,
  sagaConstants as sc,
} from './';
// Oppgave 3.2
const getUsers = () => ({
  type: c.GET_USERS
});

const getUsersSuccess = (data) => ({
  type: c.GET_USERS_SUCCESS,
  data
});

const getUsersFailure = error => ({
  type: c.GET_USERS_FAILED,
  error,
});

const getUser = () => ({
});

const getUserSuccess = () => ({
});

const getUserFailure = error => ({
  error,
});

const getUserSagaWatchAction = (userId) => ({
  type: sc.SETTINGS_WATCH_GET_USER,
  userId,
});

const getUsersSagaWatchAction = () => ({
  type: sc.SETTINGS_WATCH_GET_USERS
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

