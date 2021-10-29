import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import editFill from '@iconify/icons-eva/edit-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
// store
import { useAppSelector } from '../../store/store';
// utils
import axios from '../../utils/axios';
import { Contact } from '../../store/chat/types';
//
import { MHidden, MIconButton } from '../@material-extend';
import Scrollbar from '../Scrollbar';
import ChatSearchResults from './ChatSearchResults';
import ChatContactSearch from './ChatContactSearch';
import ChatConversationList from './ChatConversationList';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 320;
const COLLAPSE_WIDTH = 96;

interface ToggleButtonStyleProps {
  onClick: () => void;
}

const ToggleButtonStyle = styled((props: ToggleButtonStyleProps) => (
  <IconButton disableRipple {...props} />
))(({ theme }) => ({
  left: 0,
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  top: theme.spacing(13),
  borderRadius: `0 12px 12px 0`,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.customShadows.primary,
  '&:hover': {
    backgroundColor: theme.palette.primary.darker
  }
}));

// ----------------------------------------------------------------------

interface ContactData {
  results: Contact[];
}

export default function ChatSidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [openSidebar, setOpenSidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Contact[]>([]);
  const [isSearchFocused, setSearchFocused] = useState(false);
  const { conversations, activeConversationId } = useAppSelector((state) => state.chat);

  const displayResults = searchQuery && isSearchFocused;
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isCollapse = !isMobile && !openSidebar;

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  useEffect(() => {
    if (isMobile) {
      return handleCloseSidebar();
    }
    return handleOpenSidebar();
  }, [isMobile, pathname]);

  useEffect(() => {
    if (!openSidebar) {
      setSearchFocused(false);
    }
  }, [openSidebar]);

  const handleClickAwaySearch = () => {
    setSearchFocused(false);
    setSearchQuery('');
  };

  const handleToggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  const handleChangeSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const { value } = event.target;
      setSearchQuery(value);
      if (value) {
        const response = await axios.get<ContactData>('/api/chat/search', {
          params: { query: value }
        });
        setSearchResults(response.data.results);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchSelect = (username: string) => {
    setSearchFocused(false);
    setSearchQuery('');
    navigate(`/dashboard/chat/${username}`);
  };

  const handleSelectContact = (result: Contact) => {
    if (handleSearchSelect) {
      handleSearchSelect(result.username);
    }
  };

  const renderContent = (
    <>
      <Box sx={{ py: 2, px: 3 }}>
        <Stack direction="row" alignItems="center" justifyContent="center">
          {!isCollapse && (
            <>
              <Typography variant="h3">Chat</Typography>
              <Box sx={{ flexGrow: 1 }} />
            </>
          )}
          <MIconButton onClick={handleToggleSidebar}>
            <Icon
              width={20}
              height={20}
              icon={openSidebar ? arrowIosBackFill : arrowIosForwardFill}
            />
          </MIconButton>
          {!isCollapse && (
            <MIconButton to="/dashboard/chat/new" component={RouterLink}>
              <Icon icon={editFill} width={20} height={20} />
            </MIconButton>
          )}
        </Stack>

        {!isCollapse && (
          <ChatContactSearch
            query={searchQuery}
            onFocus={handleSearchFocus}
            onChange={handleChangeSearch}
            onClickAway={handleClickAwaySearch}
          />
        )}
      </Box>

      <Scrollbar>
        {!displayResults ? (
          <ChatConversationList
            conversations={conversations}
            isOpenSidebar={openSidebar}
            activeConversationId={activeConversationId}
            sx={{ ...(isSearchFocused && { display: 'none' }) }}
          />
        ) : (
          <ChatSearchResults
            query={searchQuery}
            results={searchResults}
            onSelectContact={handleSelectContact}
          />
        )}
      </Scrollbar>
    </>
  );

  return (
    <>
      <MHidden width="mdUp">
        <ToggleButtonStyle onClick={handleToggleSidebar}>
          <Icon width={16} height={16} icon={peopleFill} />
        </ToggleButtonStyle>
      </MHidden>

      {/* Mobile */}
      <MHidden width="mdUp">
        <Drawer
          ModalProps={{ keepMounted: true }}
          open={openSidebar}
          onClose={handleCloseSidebar}
          sx={{
            '& .MuiDrawer-paper': { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      {/* Desktop */}
      <MHidden width="mdDown">
        <Drawer
          open={openSidebar}
          variant="persistent"
          sx={{
            width: DRAWER_WIDTH,
            transition: theme.transitions.create('width'),
            '& .MuiDrawer-paper': {
              position: 'static',
              width: DRAWER_WIDTH
            },
            ...(isCollapse && {
              width: COLLAPSE_WIDTH,
              '& .MuiDrawer-paper': {
                width: COLLAPSE_WIDTH,
                position: 'static',
                transform: 'none !important',
                visibility: 'visible !important'
              }
            })
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </>
  );
}
