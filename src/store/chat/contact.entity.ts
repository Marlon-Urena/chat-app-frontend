import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import { Contact } from './types';

// ----------------------------------------------------------------------

export const contactAdapter = createEntityAdapter<Contact>({
  selectId: (contact) => contact.id
});

export const {
  selectIds: selectAllContactIds,
  selectAll: selectAllContacts,
  selectById: selectContactById
} = contactAdapter.getSelectors();

export type ContactState = EntityState<Contact>;
