// material
import { Breakpoint, Theme, useMediaQuery } from '@mui/material';

// ----------------------------------------------------------------------

interface NHiddenProps {
  children: JSX.Element;
  width:
    | 'xsDown'
    | 'smDown'
    | 'mdDown'
    | 'lgDown'
    | 'xlDown'
    | 'xsUp'
    | 'smUp'
    | 'mdUp'
    | 'lgUp'
    | 'xlUp';
}

export default function MHidden({ width, children }: NHiddenProps) {
  const breakpoint = width.substring(0, 2) as Breakpoint;

  const hiddenUp = useMediaQuery((theme: Theme) => theme.breakpoints.up(breakpoint));
  const hiddenDown = useMediaQuery((theme: Theme) => theme.breakpoints.down(breakpoint));

  if (width.includes('Down')) {
    return hiddenDown ? null : children;
  }
  if (width.includes('Up')) {
    return hiddenUp ? null : children;
  }
  return null;
}
