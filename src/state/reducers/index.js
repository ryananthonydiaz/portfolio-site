import { combineReducers } from 'redux';
import { authReducer as Auth } from './Auth';
import { messageReducer as Message } from './Messages';


const appReducer = combineReducers({
  auth: Auth,
  msg: Message,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;