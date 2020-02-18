import { takeLatest, call, put } from 'redux-saga/effects';
import { sagaConstants as sc } from './';
import { actions } from './';
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
    yield put(actions.getUserFailure(e))
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
