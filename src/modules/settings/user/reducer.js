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
    //Oppgave 3.3
   /* case c.SETTINGS_GET_USERS:
      return {
        ...state,
      };
    case c.SETTINGS_GET_USERS_SUCCESS:
      return {
        ...state,
      };
    case c.SETTINGS_GET_USERS_FAILED:
      return {
        ...state,
      };
  */
    default: return state;
  }
};

export default reducer;
