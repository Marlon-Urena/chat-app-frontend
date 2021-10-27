// material
import { Card, Container } from '@mui/material';
//  components
import { useEffect } from 'react';
import Page from '../components/Page';
import ChatWindow from '../components/_dashboard/chat/ChatWindow';
import ChatSidebar from '../components/_dashboard/chat/ChatSidebar';
import { useAppDispatch } from '../store/store';
import { getContacts, getConversations } from '../store/chat/reducer';

// ----------------------------------------------------------------------

export default function Chat() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Page title="Chat | Minimal-UI">
      <Container>
        <Card sx={{ height: '72vh', display: 'flex' }}>
          <ChatSidebar />
          <ChatWindow />
        </Card>
      </Container>
    </Page>
  );
}
