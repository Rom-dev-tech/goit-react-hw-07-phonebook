import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './phonebook/contactsReducer';

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(logger);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
