import { useNavigate } from 'react-router-dom';
// material
import { List, Theme } from '@mui/material';
// routes
import { SxProps } from '@mui/system';
//
import ChatConversationItem from './ChatConversationItem';
import { ConversationState } from '../../store/chat/conversation.entity';

// ----------------------------------------------------------------------

interface ChatConversationListProps {
  conversations: ConversationState;
  isOpenSidebar?: boolean;
  activeConversationId?: string;
  currentUserId: string;
  sx: SxProps<Theme>;
}

export default function ChatConversationList({
  conversations,
  isOpenSidebar,
  activeConversationId,
  currentUserId,
  ...other
}: ChatConversationListProps) {
  const navigate = useNavigate();

  const handleSelectConversation = (conversationId: string) => {
    let conversationKey: string;
    const conversation = conversations.entities[conversationId]!;
    if (conversation.type === 'GROUP') {
      conversationKey = conversation.id;
    } else {
      const otherParticipant = conversation.participants.find(
        (participant) => participant.id !== currentUserId
      );
      conversationKey = otherParticipant!.username;
    }
    navigate(`/dashboard/chat/${conversationKey}`);
  };

  return (
    <List disablePadding {...other}>
      {conversations.ids.map((conversationId) => (
        <ChatConversationItem
          key={conversationId}
          isOpenSidebar={isOpenSidebar}
          currentUserId={currentUserId}
          conversation={conversations.entities[conversationId]!}
          isSelected={activeConversationId === conversationId}
          onSelectConversation={() => handleSelectConversation(conversationId as string)}
        />
      ))}
    </List>
  );
}
