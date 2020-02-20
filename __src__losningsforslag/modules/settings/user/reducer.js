import { constants as c } from './'

const settingsInitialState = {
  data: [],
  selectedUser: {},
  isLoading: false,
  error: {},
};

const reducer = (state = { ...settingsInitialState }, action) => {
  const { error } = action;
  switch (action.type) {
    case c.SETTINGS_GET_USERS:
      return {
        ...state,
        isLoading: true,
        data: [],
        selectedUser: undefined,
        error: undefined,
      };
    case c.SETTINGS_GET_USERS_SUCCESS:
      const { payload: { users } } = action;
      return {
        ...state,
        data: users,
        isLoading: false,
      };
    case c.SETTINGS_GET_USERS_FAILED:
      return {
        ...state,
        data: [],
        isLoading: false,
        error,
      };
    case c.SETTINGS_GET_USER:
      return {
        ...state,
        isLoading: true,
        selectedUser: undefined,
        error: undefined,
      };
    case c.SETTINGS_GET_USER_SUCCESS:
      const { payload: { user } } = action;
      return {
        ...state,
        selectedUser: user,
        isLoading: false,
      };
    case c.SETTINGS_GET_USER_FAILED:
      return {
        ...state,
        users: [],
        isLoading: false,
        error,
      };
    default: return state;
  }
};

export default reducer;
