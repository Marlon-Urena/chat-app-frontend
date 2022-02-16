import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import {
  Box,
  Grid,
  Card,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  CardHeader,
  CardContent
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../hooks/useAuth';
// utils
import { fData } from '../../utils/formatNumber';
//
import UploadAvatar from '../upload/UploadAvatar';
import countries from './countries';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getUser, updateProfilePhoto, updateUser } from '../../store/authentication/thunks';

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.authentication);
  const user = useAuth();

  useEffect(() => {
    if (user) {
      dispatch(getUser(user));
    }
  }, [dispatch, user]);

  const ChangePhotoSchema = Yup.object().shape({
    photoUrl: Yup.string()
  });

  const photoFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      photoUrl: currentUser?.photoUrl || ''
    },
    validationSchema: ChangePhotoSchema,
    onSubmit: () => {}
  });

  const UpdateUserSchema = Yup.object().shape({
    firstName: Yup.string(),
    lastName: Yup.string(),
    country: Yup.string(),
    address: Yup.string(),
    state: Yup.string(),
    city: Yup.string(),
    zipCode: Yup.string()
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: currentUser?.firstName || '',
      lastName: currentUser?.lastName || '',
      country: currentUser?.country || '',
      address: currentUser?.address || '',
      state: currentUser?.state || '',
      city: currentUser?.city || '',
      zipCode: currentUser?.zipCode || ''
    },

    validationSchema: UpdateUserSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (currentUser) {
        dispatch(
          updateUser({
            username: currentUser.username,
            email: currentUser.email,
            ...values
          })
        )
          .unwrap()
          .then(() => enqueueSnackbar('Update success', { variant: 'success' }))
          .catch(() => enqueueSnackbar('Update not successful', { variant: 'error' }));
      }
      setSubmitting(false);
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        dispatch(updateProfilePhoto(file))
          .unwrap()
          .then(() => enqueueSnackbar('Updated profile photo', { variant: 'success' }))
          .catch(() => enqueueSnackbar('Update not successful', { variant: 'error' }));
        photoFormik.setFieldValue('photoUrl', URL.createObjectURL(file));
      }
    },
    [dispatch, enqueueSnackbar, photoFormik]
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <FormikProvider value={photoFormik}>
          <Form autoComplete="off" noValidate>
            <Card sx={{ textAlign: 'center' }}>
              <CardHeader
                title={
                  <Typography gutterBottom align="left" variant="h4">
                    Profile Picture
                  </Typography>
                }
              />
              <CardContent>
                <UploadAvatar
                  accept="image/*"
                  imageFile={photoFormik.values.photoUrl}
                  maxSize={3145728}
                  onDrop={handleDrop}
                  error={Boolean(photoFormik.touched.photoUrl && photoFormik.errors.photoUrl)}
                  caption={
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 2,
                        mx: 'auto',
                        display: 'block',
                        textAlign: 'center',
                        color: 'text.secondary'
                      }}
                    >
                      Allowed *.jpeg, *.jpg, *.png, *.gif
                      <br /> max size of {fData(3145728)}
                    </Typography>
                  }
                />
                <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                  {photoFormik.touched.photoUrl && photoFormik.errors.photoUrl}
                </FormHelperText>
              </CardContent>
            </Card>
          </Form>
        </FormikProvider>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Card>
              <CardHeader
                title={
                  <Typography gutterBottom align="left" variant="h4">
                    Personal Information
                  </Typography>
                }
              />
              <CardContent>
                <Stack spacing={{ xs: 2, md: 3 }}>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <TextField fullWidth label="First Name" {...getFieldProps('firstName')} />
                    <TextField fullWidth label="Last Name" {...getFieldProps('lastName')} />
                  </Stack>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <TextField fullWidth label="Address" {...getFieldProps('address')} />
                  </Stack>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <TextField
                      select
                      fullWidth
                      label="Country"
                      placeholder="Country"
                      {...getFieldProps('country')}
                      SelectProps={{ native: true }}
                      error={Boolean(touched.country && errors.country)}
                      helperText={touched.country && errors.country}
                    >
                      <option value="" />
                      {countries.map((option) => (
                        <option key={option.code} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                    <TextField fullWidth label="State/Region" {...getFieldProps('state')} />
                  </Stack>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <TextField fullWidth label="City" {...getFieldProps('city')} />
                    <TextField fullWidth label="Zip/Code" {...getFieldProps('zipCode')} />
                  </Stack>
                </Stack>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                    Save Changes
                  </LoadingButton>
                </Box>
              </CardContent>
            </Card>
          </Form>
        </FormikProvider>
      </Grid>
    </Grid>
  );
}

// ----------------------------------------------------------------------
