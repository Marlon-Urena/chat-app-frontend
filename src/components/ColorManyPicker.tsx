import { Icon } from '@iconify/react';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
// material
import { SxProps } from '@mui/system';
import { alpha, Box, Checkbox, Theme } from '@mui/material';
import { ChangeEvent } from 'react';

// ----------------------------------------------------------------------

interface IconColorProps {
  sx: SxProps<Theme>;
}

function IconColor({ sx, ...other }: IconColorProps) {
  return (
    <Box
      sx={{
        width: 20,
        height: 20,
        display: 'flex',
        borderRadius: '50%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'currentColor',
        transition: (theme) =>
          theme.transitions.create('all', {
            duration: theme.transitions.duration.shortest
          }),
        ...sx
      }}
      {...other}
    >
      <Icon icon={checkmarkFill} />
    </Box>
  );
}

interface ColorManyPickerProps {
  colors: string[];
  onChecked: (e: string) => boolean;
  sx: SxProps<Theme>;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ColorManyPicker({ colors, onChecked, sx, ...other }: ColorManyPickerProps) {
  return (
    <Box sx={sx}>
      {colors.map((color) => {
        const isWhite = color === '#FFFFFF' || color === 'white';

        return (
          <Checkbox
            key={color}
            size="small"
            value={color}
            color="default"
            checked={onChecked(color)}
            icon={
              <IconColor
                sx={{
                  ...(isWhite && {
                    border: (theme) => `solid 1px ${theme.palette.divider}`
                  })
                }}
              />
            }
            checkedIcon={
              <IconColor
                sx={{
                  transform: 'scale(1.4)',
                  '&:before': {
                    opacity: 0.48,
                    width: '100%',
                    content: "''",
                    height: '100%',
                    borderRadius: '50%',
                    position: 'absolute',
                    boxShadow: '4px 4px 8px 0 currentColor'
                  },
                  '& svg': { width: 12, height: 12, color: 'common.white' },
                  ...(isWhite && {
                    border: (theme) => `solid 1px ${theme.palette.divider}`,
                    boxShadow: (theme) => `4px 4px 8px 0 ${alpha(theme.palette.grey[500], 0.24)}`,
                    '& svg': { width: 12, height: 12, color: 'common.black' }
                  })
                }}
              />
            }
            sx={{
              color,
              '&:hover': { opacity: 0.72 }
            }}
            {...other}
          />
        );
      })}
    </Box>
  );
}