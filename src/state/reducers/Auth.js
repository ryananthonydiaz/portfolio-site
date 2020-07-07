import { SET_TOKEN, SIGN_OUT, LOG_USER_IN, LOG_USER_OUT } from '../actions';

const initialState = {
  isAuthenticated: false,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER_IN:
      return {
        ...state,
        token: action.token,
        isAuthenticated: true,
      };
    case LOG_USER_OUT:
      return {
        ...state,
        ...initialState,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case SIGN_OUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      }
    default: 
      return state;
  }
};