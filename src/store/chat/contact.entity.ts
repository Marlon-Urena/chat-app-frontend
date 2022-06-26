import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import { schema } from 'normalizr';
import { Contact } from './types';

// ----------------------------------------------------------------------

export const contactAdapter = createEntityAdapter<Contact>({
  selectId: (contact) => contact.id
});

const contact = new schema.Entity('contacts', {}, { idAttribute: 'id' });
export const ContactSchema = { contacts: [contact] };

export const {
  selectIds: selectAllContactIds,
  selectAll: selectAllContacts,
  selectById: selectContactById
} = contactAdapter.getSelectors();

export type ContactState = EntityState<Contact>;
