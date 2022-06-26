import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  conversationAdapter,
  ConversationState,
  selectConversationById
} from './conversation.entity';
import { contactAdapter, ContactState, selectAllContacts } from './contact.entity';
import { Contact, Conversation, NewMessage } from './types';
import { getContacts, getConversation, getConversations } from './thunks';

export interface ChatState {
  isEstablishingConnection: boolean;
  isConnected: boolean;
  conversations: ConversationState;
  contacts: ContactState;
  participants: Contact[];
  recipients: Contact[];
  activeConversationId: string;
  currentUserId: string;
  error: boolean;
  isLoading: boolean;
}

const initialState: ChatState = {
  isEstablishingConnection: false,
  isConnected: false,
  conversations: conversationAdapter.getInitialState(),
  contacts: contactAdapter.getInitialState(),
  participants: [],
  recipients: [],
  activeConversationId: '',
  currentUserId: '',
  error: false,
  isLoading: false
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    startConnecting: (state) => {
      state.isEstablishingConnection = true;
    },
    connectionEstablished: (state) => {
      state.isConnected = true;
      state.isEstablishingConnection = true;
    },
    addRecipients: (state, action: PayloadAction<Contact[]>) => {
      state.recipients = action.payload;
    },
    getParticipants: (state, action: PayloadAction<string>) => {
      const selectedConversation = selectConversationById(state.conversations, action.payload);
      if (selectedConversation) {
        state.participants = selectedConversation.participants.filter(
          (participant) => participant.id !== state.currentUserId
        );
      } else {
        const filteredParticipants = selectAllContacts(state.contacts).filter(
          (contact) => contact.username === action.payload
        );
        state.participants = filteredParticipants ?? [];
      }
    },
    markConversationAsRead: (state, action: PayloadAction<string>) => {
      state.conversations = conversationAdapter.updateOne(state.conversations, {
        id: action.payload,
        changes: { unreadCount: 0 }
      });
    },
    resetActiveConversation: (state) => {
      state.activeConversationId = '';
    },
    setCurrentUserId: (state, action: PayloadAction<string | undefined>) => {
      const uid = action.payload;
      state.currentUserId = uid || '';
    },
    receiveMessage: (state, action: PayloadAction<NewMessage>) => {
      const { message, conversationId } = action.payload;
      const conversation = selectConversationById(state.conversations, conversationId);
      if (conversation) {
        state.conversations = conversationAdapter.updateOne(state.conversations, {
          id: conversationId,
          changes: { messages: [...conversation.messages, message] }
        });
      }
    },
    sendMessage: (state, action: PayloadAction<NewMessage>) => {
      const { message, conversationId } = action.payload;
      const conversation = selectConversationById(state.conversations, conversationId);
      if (conversation) {
        state.conversations = conversationAdapter.updateOne(state.conversations, {
          id: conversationId,
          changes: { messages: [...conversation.messages, message] }
        });
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getContacts.fulfilled, (state, action: PayloadAction<Contact[]>) => {
      contactAdapter.setAll(state.contacts, action.payload);
    });
    builder.addCase(getConversation.fulfilled, (state, action: PayloadAction<Conversation>) => {
      const conversation = action.payload;
      state.activeConversationId = conversation.id;
      conversationAdapter.setOne(state.conversations, conversation);
    });
    builder.addCase(getConversations.fulfilled, (state, action: PayloadAction<Conversation[]>) => {
      conversationAdapter.addMany(state.conversations, action.payload);
    });
  }
});

export const {
  sendMessage,
  receiveMessage,
  startConnecting,
  connectionEstablished,
  setCurrentUserId,
  addRecipients,
  getParticipants,
  markConversationAsRead,
  resetActiveConversation
} = chatSlice.actions;

export default chatSlice;
