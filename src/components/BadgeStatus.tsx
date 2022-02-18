import { SxProps } from '@mui/system';
import { styled, Theme } from '@mui/material';
// ----------------------------------------------------------------------

const BadgeStatusStyle = styled('span')({
  justifyContent: 'center',
  borderRadius: '50%',
  alignItems: 'center',
  display: 'flex',
  '&::before, &::after': {
    content: '""',
    borderRadius: 1,
    backgroundColor: 'white'
  }
});

// ----------------------------------------------------------------------

interface BadgeStatusProps {
  status: string;
  size?: string;
  sx?: SxProps<Theme>;
}

// TODO: Look into replacing Badge with MUI implementation
export default function BadgeStatus({ status, size, sx, ...others }: BadgeStatusProps) {
  const handleStatusColor = (selectedStatus: string) => {
    let color: string;
    if (selectedStatus === 'online') {
      color = 'rgb(84, 214, 44)';
    } else if (selectedStatus === 'away') {
      color = 'rgb(255, 193, 7)';
    } else if (selectedStatus === 'busy') {
      color = 'rgb(255, 72, 66)';
    } else if (selectedStatus === 'unread') {
      color = 'rgb(24, 144, 255)';
    } else {
      color = 'transparent';
    }
    return color;
  };

  const handleSize = (selectedSize: string | undefined) => {
    let badgeWidth;
    if (selectedSize === 'small') {
      badgeWidth = 8;
    } else if (selectedSize === 'large') {
      badgeWidth = 12;
    } else {
      badgeWidth = 10;
    }
    return badgeWidth;
  };

  const color = handleStatusColor(status);
  const badgeLength: number = handleSize(size);

  return (
    <BadgeStatusStyle
      sx={{ height: badgeLength, width: badgeLength, backgroundColor: color, ...sx }}
      {...others}
    />
  );
}
