import { Icon } from '@iconify/react';
import { capitalCase } from 'change-case';
import videoFill from '@iconify/icons-eva/video-fill';
import phoneFill from '@iconify/icons-eva/phone-fill';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Avatar, Typography, AvatarGroup } from '@mui/material';
// utils
import { fToNow } from '../../utils/formatTime';
//
import BadgeStatus from '../BadgeStatus';
import { Contact } from '../../store/chat/types';
import { MIconButton } from '../@material-extend';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  flexShrink: 0,
  minHeight: 92,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 3)
}));

// ----------------------------------------------------------------------

interface OneAvatarProps {
  participants: Contact[];
}

function OneAvatar({ participants }: OneAvatarProps) {
  const participant = [...participants][0];

  if (participant === undefined) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <Avatar src={participant.avatar} alt={participant.name} />
        <BadgeStatus
          status={participant.status}
          sx={{ position: 'absolute', right: 2, bottom: 2 }}
        />
      </Box>
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{participant.name}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {participant.status !== 'offline'
            ? capitalCase(participant.status)
            : fToNow(participant.lastActivity)}
        </Typography>
      </Box>
    </Box>
  );
}

interface GroupAvatarProps {
  participants: Contact[];
}

function GroupAvatar({ participants }: GroupAvatarProps) {
  return (
    <div>
      <AvatarGroup
        max={3}
        sx={{
          mb: 0.5,
          '& .MuiAvatar-root': { width: 32, height: 32 }
        }}
      >
        {participants.map((participant) => (
          <Avatar key={participant.id} alt={participant.name} src={participant.avatar} />
        ))}
      </AvatarGroup>
      <Link
        variant="body2"
        underline="none"
        component="button"
        color="text.secondary"
        onClick={() => {}}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {participants.length} persons
          <Icon icon={arrowIosForwardFill} />
        </Box>
      </Link>
    </div>
  );
}

interface ChatHeaderDetailProps {
  participants: Contact[];
}

export default function ChatHeaderDetail({ participants, ...other }: ChatHeaderDetailProps) {
  const isGroup = participants.length > 1;

  return (
    <RootStyle {...other}>
      {isGroup ? (
        <GroupAvatar participants={participants} />
      ) : (
        <OneAvatar participants={participants} />
      )}
      <Box sx={{ flexGrow: 1 }} />
      <MIconButton>
        <Icon icon={phoneFill} width={20} height={20} />
      </MIconButton>
      <MIconButton>
        <Icon icon={videoFill} width={20} height={20} />
      </MIconButton>
      <MIconButton>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </MIconButton>
    </RootStyle>
  );
}
