import { actions, constants, sagaConstants } from '../';

describe('user actions', () => {
  describe('should create action get user', () => {
    expect(actions.getUser()).toEqual({type: constants.SETTINGS_GET_USER})
  });
});
