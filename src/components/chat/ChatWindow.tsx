import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// material
import { Box, Divider, Stack } from '@mui/material';
// store
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import {
  addRecipients,
  getConversation,
  getParticipants,
  markConversationAsRead,
  onSendMessage,
  resetActiveConversation
} from '../../store/chat/reducer';
//
import ChatRoom from './ChatRoom';
import ChatMessageList from './ChatMessageList';
import ChatHeaderDetail from './ChatHeaderDetail';
import ChatMessageInput from './ChatMessageInput';
import ChatHeaderCompose from './ChatHeaderCompose';
import { Contact, NewMessage } from '../../store/chat/types';

// ----------------------------------------------------------------------

const conversationSelector = (state: RootState) => {
  const { conversations, activeConversationId } = state.chat;
  const conversation = activeConversationId ? conversations.entities[activeConversationId] : null;
  if (conversation) {
    return conversation;
  }
  return {
    id: '',
    messages: [],
    participants: [],
    unreadCount: 0,
    type: ''
  };
};

export default function ChatWindow() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { conversationKey } = useParams();
  const { contacts, recipients, participants, activeConversationId } = useAppSelector(
    (state) => state.chat
  );
  const conversation = useAppSelector((state) => conversationSelector(state));

  const mode = conversationKey ? 'DETAIL' : 'COMPOSE';
  const displayParticipants = participants.filter(
    (item) => item.id !== '8864c717-587d-472a-929a-8e5f298024da-0'
  );

  useEffect(() => {
    const getDetails = () => {
      dispatch(getParticipants(conversationKey ?? ''));
      try {
        dispatch(getConversation(conversationKey ?? ''));
      } catch (error) {
        console.error(error);
        navigate('/dashboard/chat/new');
      }
    };
    if (conversationKey) {
      getDetails();
    } else if (activeConversationId) {
      dispatch(resetActiveConversation());
    }
  }, [conversationKey, activeConversationId, dispatch, navigate]);

  useEffect(() => {
    if (activeConversationId) {
      dispatch(markConversationAsRead(activeConversationId));
    }
  }, [dispatch, activeConversationId]);

  const handleAddRecipients = (newRecipients: Contact[]) => {
    dispatch(addRecipients(newRecipients));
  };

  const handleSendMessage = async (message: NewMessage) => {
    try {
      dispatch(onSendMessage(message));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Stack sx={{ flexGrow: 1, minWidth: '1px' }}>
      {mode === 'DETAIL' ? (
        <ChatHeaderDetail participants={displayParticipants} />
      ) : (
        <ChatHeaderCompose
          recipients={recipients}
          contacts={
            Object.values(contacts.entities).filter((contact) => contact !== undefined) as Contact[]
          }
          onAddRecipients={handleAddRecipients}
        />
      )}

      <Divider />

      <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        <Stack sx={{ flexGrow: 1 }}>
          <ChatMessageList conversation={conversation} />

          <Divider />

          <ChatMessageInput
            conversationId={activeConversationId}
            onSend={handleSendMessage}
            disabled={pathname === '/dashboard/chat/new'}
          />
        </Stack>

        {mode === 'DETAIL' && (
          <ChatRoom conversation={conversation} participants={displayParticipants} />
        )}
      </Box>
    </Stack>
  );
}
