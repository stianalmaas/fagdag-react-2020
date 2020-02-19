import {
  constants as c,
  sagaConstants as sc,
} from './';
// Oppgave 3.2
const getUsers = () => ({
});

const getUsersSuccess = () => ({
});

const getUsersFailure = error => ({
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
  userId,
});

const getUsersSagaWatchAction = () => ({
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

