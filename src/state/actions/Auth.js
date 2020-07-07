import { fetchApi } from '../../utils/ApitUtils';
import { SIGN_OUT, LOG_USER_IN, LOADING_COMPLETED, LOG_USER_OUT } from '.';

export const personnelLogin = (email, password) => async dispatch => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ email: email.toLowerCase(), password }),
  }

  const response = await fetchApi('/api/v1/auth/login', options, false);
  if (response.success === false) {
    const err = new Error(response.msg);
    err.name = response.title;

    throw err;
  }

  const { token, user } = response;
  
  window.localStorage.setItem('token', token);
  
  dispatch(logUserIn(token, user));
}

export const signOut = () => async dispatch =>  {
  window.localStorage.removeItem('token');

  dispatch({ type: SIGN_OUT });
};

export const logUserOut = () => ({ type: LOG_USER_OUT });

const logUserIn = (token, user) => ({ type: LOG_USER_IN, token, user });