import {testSaga} from 'redux-saga-test-plan';
import { actions, constants, sagaConstants, sagas } from '../';

describe('user saga', () => {
  it.each([{ success: true}, { success: false}])('should get user with %o', ({success}) => {
    const userId = '123';
    const error = new Error('Test error');
    const user = { name: 'Tester', age: 42};
    const saga = testSaga(sagas.settingsGetUserWorkerSaga, {userId});
    saga.next()
    .put(actions.getUser())
    .next()
    .call(sagas.getUser, userId)
    if(success) saga.next(user).put(actions.getUserSuccess({ user }))
    else saga.throw(error).put(actions.getUserFailure(error))
  });
});


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