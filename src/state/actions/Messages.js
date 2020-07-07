import { fetchApi } from '../../utils/ApiUtils';
import { LOAD_MESSAGES } from '.';

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

export const fetchMessages = () => async dispatch => {
  const response = await fetchApi('/message/getmessages');

  if (response.success === false) {
    const err = new Error(response.msg);
    err.name = response.title;

    throw err;
  }

  dispatch(loadMessages(response.data))
}

const loadMessages = (messages) => ({ type: LOAD_MESSAGES, messages });