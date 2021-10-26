import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Box, Drawer, Divider, IconButton, useMediaQuery } from '@mui/material';
// components
import { MHidden } from '../../@material-extend';
//
import ChatRoomAttachment from './ChatRoomAttachment';
import ChatRoomOneParticipant from './ChatRoomOneParticipant';
import ChatRoomGroupParticipant from './ChatRoomGroupParticipant';
import { Conversation, Contact } from '../../../store/chat/types';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 240;

interface ToggleButtonStyleProps {
  onClick: () => void;
}

const ToggleButtonStyle = styled((props: ToggleButtonStyleProps) => (
  <IconButton disableRipple {...props} />
))(({ theme }) => ({
  right: 0,
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  top: theme.spacing(1),
  boxShadow: theme.customShadows.z8,
  backgroundColor: theme.palette.background.paper,
  border: `solid 1px ${theme.palette.divider}`,
  borderRight: 0,
  borderRadius: `12px 0 0 12px`,
  transition: theme.transitions.create('all'),
  '&:hover': {
    backgroundColor: theme.palette.background.neutral
  }
}));

// ----------------------------------------------------------------------

interface ChatRoomProps {
  conversation: Conversation;
  participants: Contact[];
}

export default function ChatRoom({ conversation, participants }: ChatRoomProps) {
  const theme = useTheme();

  const [openSidebar, setOpenSidebar] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [selectUser, setSelectUser] = useState('');
  const [showAttachment, setShowAttachment] = useState(true);
  const [showParticipants, setShowParticipants] = useState(true);

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isGroup = participants.length > 1;

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  useEffect(() => {
    if (isMobile) {
      handleCloseSidebar();
    } else {
      handleOpenSidebar();
    }
  }, [isMobile]);

  const handleToggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  const renderContent = (
    <>
      {isGroup ? (
        <ChatRoomGroupParticipant
          selectUserId={selectUser}
          participants={participants}
          isCollapse={showParticipants}
          onShowPopupUserInfo={(participantId: string) => setSelectUser(participantId)}
          onCollapse={() => setShowParticipants((prev) => !prev)}
        />
      ) : (
        <div>
          <ChatRoomOneParticipant
            participants={participants}
            isCollapse={showInfo}
            onCollapse={() => setShowInfo((prev) => !prev)}
          />
        </div>
      )}
      <Divider />

      <ChatRoomAttachment
        conversation={conversation}
        isCollapse={showAttachment}
        onCollapse={() => setShowAttachment((prev) => !prev)}
      />
    </>
  );

  return (
    <Box sx={{ position: 'relative' }}>
      <ToggleButtonStyle
        onClick={handleToggleSidebar}
        sx={{
          ...(openSidebar && !isMobile && { right: DRAWER_WIDTH })
        }}
      >
        <Icon width={16} height={16} icon={openSidebar ? arrowIosForwardFill : arrowIosBackFill} />
      </ToggleButtonStyle>

      <MHidden width="lgUp">
        <Drawer
          anchor="right"
          ModalProps={{ keepMounted: true }}
          open={openSidebar}
          onClose={handleCloseSidebar}
          sx={{
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open={openSidebar}
          anchor="right"
          variant="persistent"
          sx={{
            height: 1,
            width: DRAWER_WIDTH,
            transition: theme.transitions.create('width'),
            ...(!openSidebar && { width: '0px' }),
            '& .MuiDrawer-paper': {
              position: 'static',
              width: DRAWER_WIDTH
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </Box>
  );
}
