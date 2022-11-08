import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './actions';

const initialState = {
  filter: '',
};

export const filterReducer = createReducer(initialState, {
  [filterContacts]: (state, action) => {
    state.filter = action.payload;
  },
});
