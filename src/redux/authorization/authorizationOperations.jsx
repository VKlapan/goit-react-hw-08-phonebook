import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'servises/contactsApi';

export const register = createAsyncThunk(
  'authorization/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await api.addNewUser(newUser);
      api.setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'authorization/login',
  async (user, thunkAPI) => {
    try {
      const response = await api.loginUser(user);
      api.setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'authorization/logout',
  async (user, thunkAPI) => {
    try {
      const response = await api.logoutUser();
      console.log('Response', response.data);
      api.setToken('');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
