import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import * as authorizationOperations from './authorizationOperations';

const authorizationInitialState = {
  name: '',
  email: '',
  token: '',
  isLoading: false,
  isLogged: false,
  isCheckingCurrent: false,
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
      Notify.failure(state.error);
    },

    // LOGIN

    [authorizationOperations.login.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authorizationOperations.login.fulfilled](state, { payload }) {
      const { token } = payload;
      const { name, email } = payload.user;
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
      Notify.failure(state.error);
    },
    // CURRENT

    [authorizationOperations.checkCurrent.pending](state) {
      state.isLoading = true;
      state.isCheckingCurrent = true;
      state.error = null;
    },
    [authorizationOperations.checkCurrent.fulfilled](state, { payload }) {
      const { name, email } = payload;
      state.isLoading = false;
      state.isLogged = true;
      state.error = null;
      state.name = name;
      state.email = email;
      state.isCheckingCurrent = false;
    },

    [authorizationOperations.checkCurrent.rejected](state, action) {
      state.isLoading = false;
      state.isCheckingCurrent = false;
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
      Notify.failure(state.error);
    },
  },
});

export const authorizationReducer = authorizationSlice.reducer;
