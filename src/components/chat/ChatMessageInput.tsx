import { v4 as uuidv4 } from 'uuid';
import { Icon } from '@iconify/react';
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import micFill from '@iconify/icons-eva/mic-fill';
import roundSend from '@iconify/icons-ic/round-send';
import attach2Fill from '@iconify/icons-eva/attach-2-fill';
import roundAddPhotoAlternate from '@iconify/icons-ic/round-add-photo-alternate';
// material
import { styled } from '@mui/material/styles';
import { Input, Divider, IconButton, Stack } from '@mui/material';
//
import { NewMessage } from '../../store/chat/types';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: 56,
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  paddingLeft: theme.spacing(2)
}));

// ----------------------------------------------------------------------

interface ChatMessageInputProps {
  disabled: boolean;
  conversationId: string;
  uid: string;
  onSend: (message: NewMessage) => void;
}

export default function ChatMessageInput({
  disabled,
  conversationId,
  uid,
  onSend,
  ...other
}: ChatMessageInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');

  // TODO: Figure out how I want to add files
  const handleAttach = () => {
    fileInputRef.current?.click();
  };

  const handleChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (!message) {
      return '';
    }
    if (onSend) {
      onSend({
        requestType: 1,
        conversationId,
        message: {
          id: uuidv4(),
          body: message,
          contentType: 'text',
          attachments: [],
          createdAt: new Date(),
          senderId: uid
        }
      });
    }
    return setMessage('');
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <RootStyle {...other}>
      <Input
        disabled={disabled}
        fullWidth
        value={message}
        disableUnderline
        onKeyUp={handleKeyUp}
        onChange={handleChangeMessage}
        placeholder="Type a message"
        endAdornment={
          <Stack direction="row" spacing={0.5} mr={1.5}>
            <IconButton disabled={disabled} size="small" onClick={handleAttach}>
              <Icon icon={roundAddPhotoAlternate} width={24} height={24} />
            </IconButton>
            <IconButton disabled={disabled} size="small" onClick={handleAttach}>
              <Icon icon={attach2Fill} width={24} height={24} />
            </IconButton>
            <IconButton disabled={disabled} size="small">
              <Icon icon={micFill} width={24} height={24} />
            </IconButton>
          </Stack>
        }
        sx={{ height: '100%' }}
      />

      <Divider orientation="vertical" flexItem />

      <IconButton color="primary" disabled={!message} onClick={handleSend} sx={{ mx: 1 }}>
        <Icon icon={roundSend} width={24} height={24} />
      </IconButton>

      <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
    </RootStyle>
  );
}
