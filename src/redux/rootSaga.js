import { all } from 'redux-saga/effects';
import appGetUserWatcherSaga from '../modules/app/sagas';
import userSagas from '../modules/settings/user/sagas'

export default function* rootSaga() {
  yield all([
    appGetUserWatcherSaga(),
    userSagas.settingsGetUserWatcherSaga(),
    userSagas.settingsGetUsersWatcherSaga(),
  ]);
}
