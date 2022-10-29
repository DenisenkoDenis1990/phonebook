import { createAction } from '@reduxjs/toolkit';
const shortid = require('shortid');

export const addContact = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: shortid(),
    },
  };
});

export const deleteContact = createAction('contacts/delete');

export const filterContacts = createAction('contacts/filter');
