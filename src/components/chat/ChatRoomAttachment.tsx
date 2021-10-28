import { Icon } from '@iconify/react';
import { uniq, flatten } from 'lodash';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Button, Divider, Collapse, Typography } from '@mui/material';
// utils
import { fDateTime } from '../../utils/formatTime';
import { getFileFullName, getFileThumb } from '../../utils/getFileFormat';
//
import Scrollbar from '../Scrollbar';
import { Conversation, Message } from '../../store/chat/types';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  paddingBottom: theme.spacing(2)
}));

const FileItemStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(2),
  padding: theme.spacing(0, 2.5)
}));

const FileThumbStyle = styled('div')(({ theme }) => ({
  width: 40,
  height: 40,
  flexShrink: 0,
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[500], 0.16)
}));

const CollapseButtonStyle = styled(Button)(({ theme }) => ({
  ...theme.typography.overline,
  height: 40,
  flexShrink: 0,
  borderRadius: 0,
  padding: theme.spacing(1, 2),
  justifyContent: 'space-between',
  color: theme.palette.text.disabled
}));

// ----------------------------------------------------------------------

interface AttachmentItemProps {
  file: Message;
  fileUrl: string;
}

function AttachmentItem({ file, fileUrl }: AttachmentItemProps) {
  return (
    <FileItemStyle key={fileUrl}>
      <FileThumbStyle>{getFileThumb(fileUrl)}</FileThumbStyle>
      <Box sx={{ ml: 1.5, maxWidth: 150 }}>
        <Typography variant="body2" noWrap>
          {getFileFullName(fileUrl)}
        </Typography>
        <Typography noWrap variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
          {fDateTime(file.createdAt)}
        </Typography>
      </Box>
    </FileItemStyle>
  );
}

interface ChatRoomAttachmentProps {
  conversation: Conversation;
  isCollapse: boolean;
  onCollapse: () => void;
}

export default function ChatRoomAttachment({
  conversation,
  isCollapse,
  onCollapse,
  ...other
}: ChatRoomAttachmentProps) {
  const totalAttachment = uniq(
    flatten(conversation.messages.map((message) => message.attachments))
  ).length;

  return (
    <RootStyle {...other}>
      <CollapseButtonStyle
        fullWidth
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
        attachment ({totalAttachment})
      </CollapseButtonStyle>

      {!isCollapse && <Divider />}

      <Scrollbar>
        <Collapse in={isCollapse}>
          {conversation.messages.map((file) => (
            <div key={file.id}>
              {file.attachments.map((fileUrl: string) => (
                <AttachmentItem key={fileUrl} file={file} fileUrl={fileUrl} />
              ))}
            </div>
          ))}
        </Collapse>
      </Scrollbar>
    </RootStyle>
  );
}