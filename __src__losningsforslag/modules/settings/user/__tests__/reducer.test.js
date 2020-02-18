import { actions, constants, sagaConstants, reducer } from '../';

describe('user reducer', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        data: [],
        selectedUser: {},
        isLoading: false,
        error: {},
      })
    });
  });