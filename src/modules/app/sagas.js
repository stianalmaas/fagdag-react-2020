import { takeLatest, call, put } from 'redux-saga/effects';

export const APP_WATCH_GET_USERS = 'app/WATCH_GET_COMPANIES';
export const getCompaniesAclWatchAction = (departmentId) => ({
  type: APP_WATCH_GET_USERS,
  departmentId,
});

export function* appGetUsersWorkerSaga(arg) {
  const { departmentId } = arg;
  console.log('appGetUsersWorkerSaga', departmentId);
}

export function* appGetUserWatcherSaga() {
  yield takeLatest(APP_WATCH_GET_USERS, appGetUsersWorkerSaga);
}

export default appGetUserWatcherSaga;
