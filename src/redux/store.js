import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { authorizationReducer } from './authorization/authorizationSlice';
import { contactsReducer } from '../redux/contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  authorization: authorizationReducer,
});

const store = configureStore({
  reducer: reducer,
});

export { store };
