import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/add',
  ({ name, number, id }) => {
    return {
      payload: {
        name,
        number,
        id,
      },
    };
  }
);

export const deleteContact = createAction('contacts/delete');

export const filterContacts = createAction('contacts/filter');
