export interface Conversation {
  id: string;
  type: string;
  participants: Contact[];
  messages: Message[];
  unreadCount: number;
}
export interface Message {
  id: string;
  attachments?: string[];
  senderId: string;
  contentType: string;
  body: string;
  createdAt: Date | string;
}
export interface Contact {
  id: string;
  email: string;
  username: string;
  name: string;
  avatar?: string;
  status: string;
  position?: string;
  phoneNumber?: string;
  address?: string;
  lastActivity: string;
}

export type NewMessage = { requestType: number; conversationId: string; message: Message };
