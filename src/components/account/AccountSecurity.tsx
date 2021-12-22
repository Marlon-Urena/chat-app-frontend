import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Stack, Card, TextField, Grid, Typography, CardHeader, CardContent } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getUser } from '../../store/authentication/thunks';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

export default function AccountSecurity() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.authentication);
  const user = useAuth();

  useEffect(() => {
    if (user) {
      dispatch(getUser(user));
    }
  }, [dispatch, user]);

  const AccountInfoSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required.'),
    username: Yup.string(),
    phoneNumber: Yup.string()
  });

  const accountInfoFormik = useFormik({
    initialValues: {
      email: currentUser?.email || '',
      username: currentUser?.username || '',
      phoneNumber: currentUser?.phoneNumber || ''
    },
    validationSchema: AccountInfoSchema,
    onSubmit: async (values, { setSubmitting }) => {
      // handle request
      setSubmitting(false);
      enqueueSnackbar('Save success', { variant: 'success' });
    }
  });

  const ChangePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string()
      .min(
        6,
        'Password must be at least 8 characters long, contain at least 1 uppercase, 1 lowercase, and 1 number.'
      )
      .required('New Password is required'),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
  });

  const passwordFormik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    validationSchema: ChangePasswordSchema,
    onSubmit: async (values, { setSubmitting }) => {
      // handle request
      setSubmitting(false);
      enqueueSnackbar('Save success', { variant: 'success' });
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = passwordFormik;

  return (
    <Grid container spacing={3}>
      <Grid item xs={4} md={6}>
        <FormikProvider value={accountInfoFormik}>
          <Form autoComplete="off" noValidate onSubmit={accountInfoFormik.handleSubmit}>
            <Card>
              <CardHeader
                title={
                  <Typography gutterBottom align="left" variant="h4">
                    Account Information
                  </Typography>
                }
              />
              <CardContent>
                <Stack spacing={3} alignItems="flex-end">
                  <TextField
                    {...accountInfoFormik.getFieldProps('email')}
                    fullWidth
                    label="Email"
                    type="email"
                    error={Boolean(
                      accountInfoFormik.touched.email && accountInfoFormik.errors.email
                    )}
                    helperText={accountInfoFormik.touched.email && accountInfoFormik.errors.email}
                  />
                  <TextField
                    {...accountInfoFormik.getFieldProps('username')}
                    fullWidth
                    autoComplete="on"
                    label="Username"
                    error={Boolean(
                      accountInfoFormik.touched.username && accountInfoFormik.errors.username
                    )}
                    helperText={
                      accountInfoFormik.touched.username && accountInfoFormik.errors.username
                    }
                  />
                  <TextField
                    {...accountInfoFormik.getFieldProps('phoneNumber')}
                    fullWidth
                    autoComplete="on"
                    label="Phone Number"
                    error={Boolean(
                      accountInfoFormik.touched.phoneNumber && accountInfoFormik.errors.phoneNumber
                    )}
                    helperText={
                      accountInfoFormik.touched.phoneNumber && accountInfoFormik.errors.phoneNumber
                    }
                  />
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    loading={accountInfoFormik.isSubmitting}
                  >
                    Save Changes
                  </LoadingButton>
                </Stack>
              </CardContent>
            </Card>
          </Form>
        </FormikProvider>
      </Grid>
      <Grid item xs={4} md={6}>
        <FormikProvider value={passwordFormik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Card>
              <CardHeader
                title={
                  <Typography gutterBottom align="left" variant="h4">
                    Change Password
                  </Typography>
                }
              />
              <CardContent>
                <Stack spacing={3} alignItems="flex-end">
                  <TextField
                    {...getFieldProps('oldPassword')}
                    fullWidth
                    type="password"
                    label="Old Password"
                    error={Boolean(touched.oldPassword && errors.oldPassword)}
                    helperText={touched.oldPassword && errors.oldPassword}
                  />
                  <TextField
                    {...getFieldProps('newPassword')}
                    fullWidth
                    autoComplete="on"
                    type="password"
                    label="New Password"
                    error={Boolean(touched.newPassword && errors.newPassword)}
                    helperText={
                      (touched.newPassword && errors.newPassword) || 'Password must be minimum 6+'
                    }
                  />
                  <TextField
                    {...getFieldProps('confirmNewPassword')}
                    fullWidth
                    autoComplete="on"
                    type="password"
                    label="Confirm New Password"
                    error={Boolean(touched.confirmNewPassword && errors.confirmNewPassword)}
                    helperText={touched.confirmNewPassword && errors.confirmNewPassword}
                  />
                  <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                    Save Changes
                  </LoadingButton>
                </Stack>
              </CardContent>
            </Card>
          </Form>
        </FormikProvider>
      </Grid>
    </Grid>
  );
}
