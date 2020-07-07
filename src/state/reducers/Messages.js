import { LOAD_MESSAGES } from '../actions';

const initialState = {
  messages: [],
  message: {},
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default: 
      return state;
  }
};