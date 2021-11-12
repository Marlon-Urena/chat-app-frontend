import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material';
import DashboardNavbar from './dashboard/DashboardNavbar';
//

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  position: 'relative',
  top: APP_BAR_MOBILE + 1,
  minHeight: `calc(100vh - ${APP_BAR_MOBILE + 1}px)`,
  [theme.breakpoints.up('lg')]: {
    top: APP_BAR_DESKTOP + 1,
    minHeight: `calc(100vh - ${APP_BAR_DESKTOP + 1}px)`
  }
}));

// ----------------------------------------------------------------------

export default function AppLayout() {
  return (
    <RootStyle>
      <DashboardNavbar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
