import { APP_WATCH_GET_DATA } from './constants';

export const getDataSagaWatchAction = (departmentId) => ({
  type: APP_WATCH_GET_DATA,
  departmentId,
});
