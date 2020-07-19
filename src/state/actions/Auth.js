import { fetchApi } from '../../utils/ApiUtils';
import { LOG_USER_IN, LOG_USER_OUT } from '.';

export const login = (email, password) => async dispatch => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ email: email.toLowerCase(), password }),
  }

  const response = await fetchApi('/auth/login', options, false);
  if (response.success === false) {
    const err = new Error(response.msg);
    err.name = response.title;

    throw err;
  }

  const { token, user } = response;
  console.log(`user is ${JSON.stringify(user)}`)
  window.localStorage.setItem('token', token);
  
  dispatch(logUserIn(token, user));
}

export const logUserOut = () => ({ type: LOG_USER_OUT });

export const logUserIn = (token, user) => ({ type: LOG_USER_IN, token, user });