import { combineReducers } from 'redux';
import { authReducer as Auth } from './Auth';
import { messageReducer as Message } from './Messages';
import { darkModeReducer as DarkMode } from './DarkMode';


const appReducer = combineReducers({
  auth: Auth,
  msg: Message,
  darkMode: DarkMode,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;