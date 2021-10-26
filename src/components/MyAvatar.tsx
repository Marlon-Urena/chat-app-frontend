import { Avatar, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

// ----------------------------------------------------------------------

interface MyAvatarProps {
  src?: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

export default function MyAvatar({
  src = 'https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg',
  onClick,
  ...others
}: MyAvatarProps) {
  return <Avatar variant="circular" src={src} onClick={onClick} {...others} />;
}
