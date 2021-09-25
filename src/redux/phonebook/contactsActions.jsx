import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
  },
}));

export const deleteContacts = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');
