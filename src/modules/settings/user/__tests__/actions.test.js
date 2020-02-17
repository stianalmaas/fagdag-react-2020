import { actions, constants, sagaConstants } from '../';

describe('user actions', () => {
  it('should create action get user', () => {
    expect(actions.getUser()).toEqual({type: constants.SETTINGS_GET_USER})
  });
});

  
  