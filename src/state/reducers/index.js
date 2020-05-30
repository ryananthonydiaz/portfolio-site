import { combineReducers } from 'redux';


const appReducer = combineReducers({
  // name: SomeImport
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;