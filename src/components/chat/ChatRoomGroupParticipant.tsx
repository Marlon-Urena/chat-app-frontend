import { Icon } from '@iconify/react';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  List,
  Avatar,
  Button,
  Collapse,
  ListItemText,
  ListItemAvatar,
  ListItemButton
} from '@mui/material';
//
import Scrollbar from '../Scrollbar';
import BadgeStatus from '../BadgeStatus';
import ChatRoomPopup from './ChatRoomPopup';
import { Contact } from '../../store/chat/types';

// ----------------------------------------------------------------------

const HEIGHT = 64;

const CollapseButtonStyle = styled(Button)(({ theme }) => ({
  typography: 'overline',
  height: 40,
  borderRadius: 0,
  padding: theme.spacing(1, 2),
  justifyContent: 'space-between',
  color: theme.palette.text.disabled
}));

// ----------------------------------------------------------------------

interface ParticipantProps {
  participant: Contact;
  isOpen: boolean;
  onClosePopup: () => void;
  onShowPopup: () => void;
}

function Participant({ participant, isOpen, onClosePopup, onShowPopup }: ParticipantProps) {
  const { name, avatar, status, position } = participant;

  return (
    <>
      <ListItemButton onClick={onShowPopup} sx={{ height: HEIGHT, px: 2.5 }}>
        <ListItemAvatar>
          <Box sx={{ position: 'relative', width: 40, height: 40 }}>
            <Avatar alt={name} src={avatar} />
            <BadgeStatus status={status} sx={{ right: 0, bottom: 0, position: 'absolute' }} />
          </Box>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={position}
          primaryTypographyProps={{ variant: 'subtitle2', noWrap: true }}
          secondaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      <ChatRoomPopup participant={participant} isOpen={isOpen} onClose={onClosePopup} />
    </>
  );
}

interface ChatRoomGroupParticipantProps {
  participants: Contact[];
  selectUserId: string;
  onShowPopupUserInfo: (user: string) => void;
  isCollapse: boolean;
  onCollapse(): void;
}

export default function ChatRoomGroupParticipant({
  participants,
  selectUserId,
  onShowPopupUserInfo,
  isCollapse,
  onCollapse
}: ChatRoomGroupParticipantProps) {
  return (
    <>
      <CollapseButtonStyle
        fullWidth
        disableRipple
        color="inherit"
        onClick={onCollapse}
        endIcon={
          <Icon
            icon={isCollapse ? arrowIosDownwardFill : arrowIosForwardFill}
            width={16}
            height={16}
          />
        }
      >
        In room ({participants.length})
      </CollapseButtonStyle>

      <Box sx={{ height: isCollapse ? HEIGHT * 4 : 0 }}>
        <Scrollbar>
          <Collapse in={isCollapse} sx={{ height: isCollapse ? HEIGHT * 4 : 0 }}>
            <List disablePadding>
              {participants.map((participant) => (
                <Participant
                  key={participant.id}
                  participant={participant}
                  isOpen={selectUserId === participant.id}
                  onShowPopup={() => onShowPopupUserInfo(participant.id)}
                  onClosePopup={() => onShowPopupUserInfo('')}
                />
              ))}
            </List>
          </Collapse>
        </Scrollbar>
      </Box>
    </>
  );
}
