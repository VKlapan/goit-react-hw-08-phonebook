import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
};

export const addNewUser = async newUser => {
  const { name, email, password } = newUser;
  const data = await instance.post('/users/signup', {
    name,
    email,
    password,
  });
  return data;
};

export const loginUser = async user => {
  const { email, password } = user;
  const data = await instance.post('/users/login', {
    email,
    password,
  });
  return data;
};

export const logoutUser = async () => {
  const data = await instance.post('/users/logout');
  return data;
};

export const getAllContacts = async () => {
  const data = await instance.get('/contacts');
  return data;
};

export const addNewContact = async newContact => {
  const { name, number } = newContact;
  const data = await instance.post('/contacts', {
    name,
    number,
  });
  return data;
};

export const deleteContact = async idContact => {
  const data = await instance.delete(`/contacts/${idContact}`);
  return data;
};
