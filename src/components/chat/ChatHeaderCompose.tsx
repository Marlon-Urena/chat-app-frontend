import { Icon } from '@iconify/react';
import { SyntheticEvent, useState } from 'react';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Avatar, TextField, Typography, Autocomplete, Chip } from '@mui/material';
//
import SearchNotFound from '../SearchNotFound';
import { Contact } from '../../store/chat/types';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 3)
}));

const AutocompleteStyle = styled('div')(({ theme }) => ({
  '& .MuiAutocomplete-root': {
    minWidth: 280,
    marginLeft: theme.spacing(2),
    '&.Mui-focused .MuiAutocomplete-inputRoot': {
      boxShadow: theme.customShadows.z8
    }
  },
  '& .MuiAutocomplete-inputRoot': {
    transition: theme.transitions.create('box-shadow', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
    }),
    '& fieldset': {
      borderWidth: `1px !important`,
      borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`
    }
  },
  '& .MuiAutocomplete-groupUl': {
    padding: `0px ${theme.spacing(1)}px`
  }
}));

// ----------------------------------------------------------------------

// TODO: Use selectAllContacts selector
interface ChatHeaderComposeProps {
  contacts: Contact[];
  recipients: Contact[];
  onAddRecipients: (newRecipients: Contact[]) => void;
  onChangeQuery: (value: string) => void;
}

export default function ChatHeaderCompose({
  contacts,
  recipients,
  onAddRecipients,
  onChangeQuery,
  ...other
}: ChatHeaderComposeProps) {
  const [query, setQuery] = useState('');

  const handleChangeQuery = (event: SyntheticEvent, value: string) => {
    setQuery(value);
    onChangeQuery(value);
  };

  const handleAddRecipients = (event: SyntheticEvent, newRecipients: Contact[]) => {
    setQuery('');
    onAddRecipients(newRecipients);
  };

  return (
    <RootStyle {...other}>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        To:
      </Typography>

      <AutocompleteStyle>
        <Autocomplete
          multiple
          size="small"
          disablePortal
          popupIcon={null}
          noOptionsText={<SearchNotFound searchQuery={query} />}
          onChange={handleAddRecipients}
          onInputChange={handleChangeQuery}
          options={contacts}
          getOptionLabel={(recipient) => recipient.name}
          renderOption={(props, recipient, { inputValue, selected }) => {
            const { username, avatar } = recipient;
            const matches = match(username, inputValue);
            const parts = parse(username, matches);
            return (
              <Box {...props} component="li" borderRadius={1} my={1} sx={{ p: '12px !important' }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    overflow: 'hidden',
                    borderRadius: '50%',
                    position: 'relative'
                  }}
                >
                  <Avatar alt={username} src={avatar} sx={{ height: 32, width: 32 }} />
                  <Box
                    sx={{
                      top: 0,
                      opacity: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      position: 'absolute',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                      transition: (theme) =>
                        theme.transitions.create('opacity', {
                          easing: theme.transitions.easing.easeInOut,
                          duration: theme.transitions.duration.shorter
                        }),
                      ...(selected && {
                        opacity: 1,
                        color: 'primary.main'
                      })
                    }}
                  >
                    <Icon icon={checkmarkFill} width={20} height={20} />
                  </Box>
                </Box>
                <Box sx={{ ml: 2 }} />
                {parts.map((part, index) => (
                  <Typography
                    key={index}
                    variant="subtitle2"
                    color={part.highlight ? 'primary' : 'textPrimary'}
                  >
                    {part.text}
                  </Typography>
                ))}
              </Box>
            );
          }}
          renderTags={(recipientList, getTagProps) =>
            recipientList.map((recipient, index) => {
              const { id, name, avatar } = recipient;
              return (
                <Chip
                  {...getTagProps({ index })}
                  key={id}
                  size="small"
                  label={name}
                  color="info"
                  avatar={<Avatar alt={name} src={avatar} />}
                />
              );
            })
          }
          renderInput={(params) => (
            <TextField {...params} placeholder={recipients.length === 0 ? 'Recipients' : ''} />
          )}
        />
      </AutocompleteStyle>
    </RootStyle>
  );
}
