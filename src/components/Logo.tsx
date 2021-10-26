// material
import { Box, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

// ----------------------------------------------------------------------

interface LogoProps {
  sx?: SxProps<Theme>;
}

export default function Logo({ sx }: LogoProps) {
  return <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />;
}
