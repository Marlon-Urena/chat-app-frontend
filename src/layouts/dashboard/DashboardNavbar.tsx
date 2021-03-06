import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import messageCircleFill from '@iconify/icons-eva/message-circle-fill';
// material
import { alpha, AppBar, Box, IconButton, Stack, styled, Toolbar } from '@mui/material';
// components
import { Link as RouterLink } from 'react-router-dom';
import { MHidden } from '../../components/@material-extend';
//
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';

// ----------------------------------------------------------------------

// const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  borderBottom: '1px solid black',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72)
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

interface DashboardNavbarProps {
  onOpenSidebar?: () => void;
}

export default function DashboardNavbar({ onOpenSidebar }: DashboardNavbarProps) {
  return (
    <div>
      <RootStyle>
        <ToolbarStyle>
          <MHidden width="lgUp">
            <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
              <Icon icon={menu2Fill} />
            </IconButton>
          </MHidden>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
            <LanguagePopover />
            <IconButton to="/dashboard/chat/new" component={RouterLink} size="large">
              <Icon color="green" icon={messageCircleFill} width={20} height={20} />
            </IconButton>
            <AccountPopover />
          </Stack>
        </ToolbarStyle>
      </RootStyle>
    </div>
  );
}
