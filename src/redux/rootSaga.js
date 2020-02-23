import { all } from 'redux-saga/effects';
import appGetUserWatcherSaga from '../modules/app/sagas';
import { sagas as userSagas } from '../modules/settings/user/'

export default function* rootSaga() {
  yield all([
    appGetUserWatcherSaga(),
   // oppgave 1
    userSagas.settingsGetUsersWatcherSaga(),
   /*
    userSagas.settingsGetUserWatcherSaga(), */
  ]);
}
