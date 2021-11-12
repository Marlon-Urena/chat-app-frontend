import { isString } from 'lodash';
import { Icon } from '@iconify/react';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import roundAddAPhoto from '@iconify/icons-ic/round-add-a-photo';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Typography, Paper, Theme } from '@mui/material';
// utils
import { SxProps } from '@mui/system';
import { fData } from '../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  width: 144,
  height: 144,
  margin: 'auto',
  borderRadius: '50%',
  padding: theme.spacing(1),
  border: `1px dashed ${alpha(theme.palette.grey[500], 0.32)}`
}));

const DropZoneStyle = styled('div')({
  zIndex: 0,
  width: '100%',
  height: '100%',
  outline: 'none',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '50%',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': { width: '100%', height: '100%' },
  '&:hover': {
    cursor: 'pointer',
    '& .placeholder': {
      zIndex: 9
    }
  }
});

const PlaceholderStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.neutral,
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&:hover': { opacity: 0.72 }
}));

// ----------------------------------------------------------------------

interface UploadAvatarProps {
  error: boolean;
  imageFile: string | { preview: string };
  caption: JSX.Element;
  sx?: SxProps<Theme>;
  accept: string;
  maxSize: number;
  onDrop: (acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => void;
}

export default function UploadAvatar({
  error,
  imageFile,
  caption,
  sx,
  ...other
}: UploadAvatarProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple: false,
    ...other
  });

  const ShowRejectionItems = () => (
    <Paper
      variant="outlined"
      sx={{
        py: 1,
        px: 2,
        my: 2,
        borderColor: 'error.light',
        bgcolor: (theme) => alpha(theme.palette.error.main, 0.08)
      }}
    >
      {fileRejections.map(({ file, errors }) => {
        const { name, size } = file;
        return (
          <Box key={name} sx={{ my: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {name} - {fData(size)}
            </Typography>
            {errors.map((e) => (
              <Typography key={e.code} variant="caption" component="p">
                - {e.message}
              </Typography>
            ))}
          </Box>
        );
      })}
    </Paper>
  );

  return (
    <>
      <RootStyle sx={sx}>
        <DropZoneStyle
          {...getRootProps()}
          sx={{
            ...(isDragActive && { opacity: 0.72 }),
            ...((isDragReject || error) && {
              color: 'error.main',
              borderColor: 'error.light',
              bgcolor: 'error.lighter'
            })
          }}
        >
          <input {...getInputProps()} />

          {imageFile && (
            <Box
              component="img"
              alt="avatar"
              src={isString(imageFile) ? imageFile : imageFile.preview}
              sx={{ zIndex: 8, objectFit: 'cover' }}
            />
          )}

          <PlaceholderStyle
            className="placeholder"
            sx={{
              ...(imageFile && {
                opacity: 0,
                color: 'common.white',
                bgcolor: 'grey.900',
                '&:hover': { opacity: 0.72 }
              })
            }}
          >
            <Box component={Icon} icon={roundAddAPhoto} sx={{ width: 24, height: 24, mb: 1 }} />
            <Typography variant="caption">{imageFile ? 'Update photo' : 'Upload photo'}</Typography>
          </PlaceholderStyle>
        </DropZoneStyle>
      </RootStyle>

      {caption}

      {fileRejections.length > 0 && <ShowRejectionItems />}
    </>
  );
}
