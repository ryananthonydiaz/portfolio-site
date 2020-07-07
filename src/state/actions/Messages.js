import { fetchApi } from '../../utils/ApiUtils';
// import {  } from '.';

export const createMessage = (email, msg) => async dispatch => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ sender_email: email.toLowerCase(), msg }),
  }

  const response = await fetchApi('/message/createmessage', options, false);
  if (response.success === false) {
    const err = new Error(response.msg);
    err.name = response.title;

    throw err;
  }

  return response;
}

// const logUserIn = (token, user) => ({ type: LOG_USER_IN, token, user });