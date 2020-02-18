import { takeLatest, call } from 'redux-saga/effects';
import { APP_WATCH_GET_DATA } from './constants';


const getDataOrSomething = departmentId => (`result: ${departmentId}`);

function* appGetUsersWorkerSaga(arg) {
  const { departmentId } = arg;
  const result = yield call(getDataOrSomething, departmentId);
  console.log('appGetUsersWorkerSaga', result);
}

export function* appGetUserWatcherSaga() {
  yield takeLatest(APP_WATCH_GET_DATA, appGetUsersWorkerSaga);
}

export default appGetUserWatcherSaga;
