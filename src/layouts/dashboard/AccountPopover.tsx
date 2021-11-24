import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  alpha,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
// components
import { capitalCase } from 'change-case';
import MenuPopover from '../../components/MenuPopover';
import BadgeStatus from '../../components/BadgeStatus';
// mocks
import account from '../../_mocks_/account';
import { useAppDispatch } from '../../store/store';
import { logout } from '../../store/authentication/thunks';

// ----------------------------------------------------------------------

const STATUS = ['online', 'invisible', 'away'];

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('online');
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[800], 0.1)
            }
          })
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
        <BadgeStatus status="online" sx={{ position: 'absolute', bottom: 2, right: 2 }} />
      </IconButton>
      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <MenuItem key="UserStatus" sx={{ typography: 'body2', py: 1, px: 2.5 }}>
          <Box
            component={BadgeStatus}
            size="large"
            status={status}
            sx={{
              m: 0.75,
              mr: 2.75
            }}
          />
          <Select
            native
            value={status}
            onChange={handleChangeStatus}
            sx={{
              '& svg': { display: `none` },
              '& select': { p: 0, typography: 'body2' },
              '& fieldset': { display: 'none' }
            }}
          >
            {STATUS.map((option) => (
              <option key={option} value={option}>
                {capitalCase(option)}
              </option>
            ))}
          </Select>
        </MenuItem>
        <MenuItem
          key="Settings"
          to="/dashboard/account"
          component={RouterLink}
          onClick={handleClose}
          sx={{ typography: 'body2', py: 1, px: 2.5 }}
        >
          <Box
            component={Icon}
            icon={settings2Fill}
            sx={{
              mr: 2,
              width: 24,
              height: 24
            }}
          />
          Settings
        </MenuItem>
        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
