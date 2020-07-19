import { TOGGLE_THEME } from "../actions"

const initialState = {
  themeIsDark: false,
}

export const darkModeReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        themeIsDark: !state.themeIsDark
      };
    default:
      return state;
  }
}