import { takeLatest, call, put } from 'redux-saga/effects';
import {
  SETTINGS_WATCH_GET_USERS,
  SETTINGS_WATCH_GET_USER,
} from './constants';
import * as actions from './actions';
import { GetUser, GetUsers } from '../../mockApi';

const getUser = userId => GetUser(userId);
const getUsers = () => GetUsers();

function* settingsGetUserWorkerSaga(args) {
  const { userId } = args;
  try {
    yield put(actions.getUser());
    const user = yield call(getUser, userId);
    yield put(actions.getUserSuccess({ user }));
  } catch (e) {
    yield put(actions.getUsersFailure(e))
  }
}

function* settingsGetUsersWorkerSaga() {
  try {
    yield put(actions.getUsers());
    const users = yield call(getUsers);
    yield put(actions.getUsersSuccess({ users }));
  } catch (e) {
    yield put(actions.getUsersFailure(e))
  }
}

function* settingsGetUserWatcherSaga() {
  yield takeLatest(SETTINGS_WATCH_GET_USERS, settingsGetUserWorkerSaga);
}

function* settingsGetUsersWatcherSaga() {
  yield takeLatest(SETTINGS_WATCH_GET_USER, settingsGetUsersWorkerSaga);
}

export default  {
  settingsGetUserWatcherSaga,
  settingsGetUsersWatcherSaga,
};
