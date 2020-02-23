import { takeLatest, call, put } from 'redux-saga/effects';
import { sagaConstants as sc } from './';
import { actions } from './';
import { GetUser, GetUsers } from '../../mockApi';

const getUser = userId => GetUser(userId);
const getUsers = () => GetUsers();

function* settingsGetUserWorkerSaga(args) {
 // Bonus
}

function* settingsGetUsersWorkerSaga() {
  console.log('***RUN***');
  // Oppgave 3.2
  yield put(actions.getUsers);
  let userData;
  try {
    userData = call(GetUsers);
  } catch (e) {
    yield put(actions.getUsersFailure);
  }
  yield put(actions.getUsersSuccess(userData));
}

function* settingsGetUserWatcherSaga() {
  yield takeLatest(sc.SETTINGS_WATCH_GET_USER, settingsGetUserWorkerSaga);
}

function* settingsGetUsersWatcherSaga() {
  yield takeLatest(sc.SETTINGS_WATCH_GET_USERS, settingsGetUsersWorkerSaga);
}

export default  {
  getUser,
  settingsGetUserWatcherSaga,
  settingsGetUsersWatcherSaga,
  settingsGetUserWorkerSaga
};
