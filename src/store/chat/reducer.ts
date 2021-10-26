import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  conversationAdapter,
  ConversationState,
  selectAllConversations,
  selectConversationById
} from './conversation.entity';
import { contactAdapter, ContactState, selectAllContacts } from './contact.entity';
import { Contact, Conversation, Message, NewMessage } from './types';
import { contacts, conversations } from '../../_mocks_/chat';

export interface ChatState {
  conversations: ConversationState;
  contacts: ContactState;
  participants: Contact[];
  recipients: Contact[];
  activeConversationId: string;
  error: boolean;
  isLoading: boolean;
}

const initialState: ChatState = {
  conversations: conversationAdapter.getInitialState(),
  contacts: contactAdapter.getInitialState(),
  participants: [],
  recipients: [],
  activeConversationId: '',
  error: false,
  isLoading: false
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addRecipients: (state, action: PayloadAction<Contact[]>) => {
      state.recipients = action.payload;
    },
    onSendMessage: (state, action: PayloadAction<NewMessage>) => {
      const { id, contentType, body, conversationId, senderId, createdAt, attachments } =
        action.payload;
      const newMessage: Message = { id, contentType, body, senderId, createdAt, attachments };
      // TODO: Allow to send message to new recipients
      const updatedConversation: Conversation = selectConversationById(
        state.conversations,
        conversationId
      )!;

      state.conversations = conversationAdapter.updateOne(state.conversations, {
        id: conversationId,
        changes: { messages: [...updatedConversation.messages, newMessage] }
      });
    },
    getConversation: (state, action: PayloadAction<string>) => {
      const selectedConversation = selectConversationById(state.conversations, action.payload);
      if (selectedConversation) {
        state.activeConversationId = selectedConversation.id;
      } else {
        const filterConversation = selectAllConversations(state.conversations).filter(
          (conversation) =>
            conversation.type === 'ONE_TO_ONE' &&
            conversation.participants.some((participant) => participant.username === action.payload)
        );
        state.activeConversationId = filterConversation[0].id;
      }
    },
    getConversations: (state) => {
      state.conversations = conversationAdapter.addMany(state.conversations, conversations);
    },
    getContacts: (state) => {
      state.contacts = contactAdapter.addMany(state.contacts, contacts);
    },
    getParticipants: (state, action: PayloadAction<string>) => {
      const selectedConversation = selectConversationById(state.conversations, action.payload);
      if (selectedConversation) {
        state.participants = selectedConversation.participants.filter(
          (participant) => participant.id !== '8864c717-587d-472a-929a-8e5f298024da-0'
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
    }
  },
  extraReducers: {}
});

export const {
  addRecipients,
  getConversation,
  getConversations,
  getParticipants,
  getContacts,
  onSendMessage,
  markConversationAsRead,
  resetActiveConversation
} = chatSlice.actions;

export default chatSlice;
