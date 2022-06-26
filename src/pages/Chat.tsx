// material
import { Card, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import { useEffect } from 'react';
import { getContacts, getConversations } from 'src/store/chat/thunks';
import Page from '../components/Page';
import ChatWindow from '../components/chat/ChatWindow';
import ChatSidebar from '../components/chat/ChatSidebar';
// store
import { useAppDispatch } from '../store/store';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const CardStyle = styled(Card)(({ theme }) => ({
  display: 'flex',
  height: `calc(100vh - ${APP_BAR_MOBILE + 1}px)`,
  [theme.breakpoints.up('lg')]: {
    height: `calc(100vh - ${APP_BAR_DESKTOP + 1}px)`
  }
}));

// ----------------------------------------------------------------------

export default function Chat() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Page title="Chat | Minimal-UI">
      <Container maxWidth={false} disableGutters>
        <CardStyle>
          <ChatSidebar />
          <ChatWindow />
        </CardStyle>
      </Container>
    </Page>
  );
}
