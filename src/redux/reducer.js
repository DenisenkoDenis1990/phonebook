import { createReducer } from '@reduxjs/toolkit';
import { deleteContact, addContact, filterContacts } from './actions';

const initialState = {
  items: [],
  filter: '',
};

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    state.items.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.items.findIndex(item => item.id === action.payload);
    state.items.splice(index, 1);
  },
  [filterContacts]: (state, action) => {
    state.filter = action.payload;
    state.items.filter(item =>
      item.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  },
});
