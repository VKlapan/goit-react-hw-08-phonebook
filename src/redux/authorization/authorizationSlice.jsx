import { createSlice } from '@reduxjs/toolkit';

import * as authorizationOperations from './authorizationOperations';

const authorizationInitialState = {
  name: '',
  email: '',
  token: '',
  isLoading: false,
  isLogged: false,
  error: null,
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: authorizationInitialState,
  extraReducers: {
    // Add NewUser
    [authorizationOperations.register.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authorizationOperations.register.fulfilled](state, { payload }) {
      const { token } = payload;
      const { name, email } = payload.user;
      console.log('name', name, 'email', email, 'token', token);
      state.isLoading = false;
      state.isLogged = true;
      state.error = null;
      state.name = name;
      state.email = email;
      state.token = token;
    },
    [authorizationOperations.register.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // LOGIN

    [authorizationOperations.login.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authorizationOperations.login.fulfilled](state, { payload }) {
      const { token } = payload;
      const { name, email } = payload.user;
      console.log('name', name, 'email', email, 'token', token);
      state.isLoading = false;
      state.isLogged = true;
      state.error = null;
      state.name = name;
      state.email = email;
      state.token = token;
    },
    [authorizationOperations.login.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // LOGOUT

    [authorizationOperations.logout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authorizationOperations.logout.fulfilled](state) {
      state.isLoading = false;
      state.isLogged = false;
      state.error = null;
      state.name = '';
      state.email = '';
      state.token = '';
    },
    [authorizationOperations.logout.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const authorizationReducer = authorizationSlice.reducer;
