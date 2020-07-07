import set from 'lodash/set';

const BASE_PATH = process.env.REACT_APP_RYVNDIVZ_API;

export const fetchApi = async (path, options, includeToken = true) => {
  const fetchOptions = {
    ...options,
  };

  if (includeToken === true) {
    const accessToken = window.localStorage.getItem('token');
    set(fetchOptions, ['headers', 'Authorization'], `Bearer ${accessToken}`);
  }
  
  set(fetchOptions, ['headers', 'Accept'], 'application/json');
  set(fetchOptions, ['headers', 'Content-Type'], 'application/json');

  const response = await fetch(`${BASE_PATH}${path}`, fetchOptions);

  const text = await response.text();
  return JSON.parse(text);
};