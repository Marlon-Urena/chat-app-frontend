import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import { Conversation } from './types';

// ----------------------------------------------------------------------

export const conversationAdapter = createEntityAdapter<Conversation>({
  selectId: (conversation) => conversation.id
});

export const {
  selectIds: selectAllConversationIds,
  selectAll: selectAllConversations,
  selectById: selectConversationById
} = conversationAdapter.getSelectors();

export type ConversationState = EntityState<Conversation>;
