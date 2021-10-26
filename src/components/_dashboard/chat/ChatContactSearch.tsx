import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, FormControl, OutlinedInput, InputAdornment, ClickAwayListener } from '@mui/material';
import { ChangeEvent } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  transition: theme.transitions.create('box-shadow', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`
  }
}));

// ----------------------------------------------------------------------

interface ChatContactSearchProps {
  query: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus(): void;
  onClickAway(): void;
}

export default function ChatContactSearch({
  query,
  onChange,
  onFocus,
  onClickAway,
  ...other
}: ChatContactSearchProps) {
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <RootStyle {...other}>
        <FormControl fullWidth size="small">
          <SearchStyle
            value={query}
            onFocus={onFocus}
            onChange={onChange}
            placeholder="Search contacts..."
            startAdornment={
              <InputAdornment position="start">
                <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
          />
        </FormControl>
      </RootStyle>
    </ClickAwayListener>
  );
}
