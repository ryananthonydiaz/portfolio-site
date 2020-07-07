import { SET_USER, SET_TOKEN, SIGN_OUT, LOG_USER_IN, LOADING_COMPLETED, LOG_USER_OUT } from '../actions';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {},
  loading: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER_IN:
      return {
        ...state,
        token: action.token,
        user: { ...action.user },
        isAuthenticated: true,
        loading: false,
      };
    case LOG_USER_OUT:
      return {
        ...state,
        ...initialState,
        loading: false,
      };
    case LOADING_COMPLETED:
      return {
        ...state,
        loading: false,
      };
    case SET_USER:
      return {
        ...state,
        user: {...action.user }
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
        user: {},
      }
    default: 
      return state;
  }
};