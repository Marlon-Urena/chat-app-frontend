import axios, { AxiosResponse } from 'axios';
import firebaseAuth from '../.firebase/firebaseConfig';
import { Contact, Conversation } from '../store/chat/types';

const userServiceURL = process.env.REACT_APP_USER_ACCOUNT_SERVICE_URL;
const chatServiceUrl = process.env.REACT_APP_CHAT_SERVICE ?? 'http://localhost:3003/chat';

async function getContacts(searchQuery?: string): Promise<AxiosResponse<Contact[]>> {
  const user = firebaseAuth.currentUser;
  const params = searchQuery ? { query: searchQuery } : {};
  return axios.get(`${userServiceURL}/chat/search`, {
    params,
    headers: {
      Authorization: `Bearer ${await user?.getIdToken()}`
    }
  });
}

async function getConversation(conversationId: string): Promise<AxiosResponse<Conversation>> {
  const user = firebaseAuth.currentUser;
  return axios.get(`${chatServiceUrl}/conversation/${conversationId}`, {
    headers: {
      Authorization: `Bearer ${await user?.getIdToken()}`
    }
  });
}

async function getConversations(): Promise<AxiosResponse<Conversation[]>> {
  const user = firebaseAuth.currentUser;
  return axios.get(`${chatServiceUrl}/conversation`, {
    headers: {
      Authorization: `Bearer ${await user?.getIdToken()}`
    }
  });
}

// Consider better URI, maybe consider using query parameters
async function markConversationAsRead(
  conversationId: string
): Promise<AxiosResponse<Conversation>> {
  const user = firebaseAuth.currentUser;
  return axios.patch(
    `${chatServiceUrl}/conversation/${conversationId}`,
    [{ op: 'replace', path: '/unreadCount', value: 0 }],
    {
      headers: {
        Authorization: `Bearer ${await user?.getIdToken()}`
      }
    }
  );
}

async function createConversation(participants: string[]): Promise<AxiosResponse<Conversation>> {
  const user = firebaseAuth.currentUser;
  return axios.post(`${chatServiceUrl}/conversation`, participants, {
    headers: {
      Authorization: `Bearer ${user?.getIdToken()}`
    }
  });
}

async function addParticipants(
  conversationId: string,
  participants: string[]
): Promise<AxiosResponse<Conversation>> {
  const user = firebaseAuth.currentUser;
  return axios.patch(
    `${chatServiceUrl}/conversation/${conversationId}`,
    { participants },
    {
      headers: {
        Authorization: `Bearer ${user?.getIdToken()}`
      }
    }
  );
}

export {
  getContacts,
  getConversation,
  getConversations,
  markConversationAsRead,
  createConversation,
  addParticipants
};
