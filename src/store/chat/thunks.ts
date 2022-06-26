import { createAsyncThunk } from '@reduxjs/toolkit';
import * as ChatAPI from '../../apis/chatAPI';
import { Contact, Conversation } from './types';

export const getContacts = createAsyncThunk<Contact[], string | undefined>(
  'chat/getContacts',
  async (searchTerm?: string) => {
    const response = await ChatAPI.getContacts(searchTerm);
    return response.data;
  }
);

export const getConversation = createAsyncThunk<Conversation, string>(
  'chat/getConversation',
  async (conversationId: string) => {
    const response = await ChatAPI.getConversation(conversationId);
    return response.data;
  }
);

export const getConversations = createAsyncThunk<Conversation[]>(
  'chat/getConversations',
  async () => {
    const response = await ChatAPI.getConversations();
    return response.data;
  }
);
