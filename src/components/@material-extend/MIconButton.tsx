import { Box, IconButton } from '@mui/material';
import { ReactNode, ElementType } from 'react';

interface MIconButtonProps {
  to?: string;
  component?: ElementType;
  children?: ReactNode;
  onClick?: () => void;
}

export default function MIconButton({ children, ...others }: MIconButtonProps) {
  return (
    <Box {...others}>
      <IconButton>{children}</IconButton>
    </Box>
  );
}
