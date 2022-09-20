import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const signup = async data => {
  const url = `${BASE_URL}/users/signup`;
  const { data: result } = await axios.post(url, data);
  return result;
};

export const login = async data => {
  const url = `${BASE_URL}/users/login`;
  const { data: result } = await axios.post(url, data);
  return result;
};
