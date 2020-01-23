import { all } from 'redux-saga/effects';
import appGetUserWatcherSaga from '../modules/app/sagas';

export default function* rootSaga() {
  yield all([
    appGetUserWatcherSaga(),
  ]);
}
