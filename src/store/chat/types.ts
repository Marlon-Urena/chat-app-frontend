export interface Conversation {
  id: string;
  type: string;
  participants: Contact[];
  messages: Message[];
  unreadCount: number;
}
export interface Message {
  id: string;
  attachments: string[];
  senderId: string;
  contentType: string;
  body: string;
  createdAt: string;
}
export interface Contact {
  id: string;
  username: string;
  name: string;
  avatar: string;
  status: string;
  position: string;
  email: string;
  phone: string;
  address: string;
  lastActivity: string;
}

export type NewMessage = Message & { conversationId: string };
