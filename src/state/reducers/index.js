import { combineReducers } from 'redux';
import { authReducer as Auth } from './Auth';


const appReducer = combineReducers({
  auth: Auth,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;