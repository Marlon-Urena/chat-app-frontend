import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {
  Stack,
  Card,
  TextField,
  Grid,
  Typography,
  CardHeader,
  CardContent,
  List,
  Collapse,
  ListItemButton,
  ListItemText,
  Divider,
  Button
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  getUser,
  updatePassword,
  updateEmail,
  updateUsername
} from '../../store/authentication/thunks';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

export default function AccountSecurity() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.authentication);
  const [editEmail, setEditEmail] = useState(false);
  const user = useAuth();

  const [editUsername, setEditUsername] = useState(false);
  const handleEmailClick = () => {
    setEditEmail(!editEmail);
    setEditUsername(false);
  };
  const handleUsernameClick = () => {
    setEditUsername(!editUsername);
    setEditEmail(false);
  };

  useEffect(() => {
    if (user) {
      dispatch(getUser(user));
    }
  }, [dispatch, user]);

  const ChangeEmailSchema = Yup.object().shape({
    currentEmail: Yup.string().email(),
    newEmail: Yup.string().email(),
    currentPassword: Yup.string()
  });

  const emailFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      currentEmail: currentUser?.email || '',
      newEmail: currentUser?.email || '',
      currentPassword: ''
    },
    validationSchema: ChangeEmailSchema,
    onSubmit: async (values, formikHelpers) => {
      const { newEmail, currentPassword } = values;
      const { setSubmitting, setFieldValue } = formikHelpers;
      if (currentUser) {
        dispatch(updateEmail({ newEmail, currentPassword }))
          .unwrap()
          .then(() => {
            enqueueSnackbar('Email updated', { variant: 'success' });
            setEditEmail(true);
            setFieldValue('currentEmail', newEmail);
          })
          .catch(() => {
            enqueueSnackbar('Email not updated', { variant: 'error' });
          });
      }
      setSubmitting(false);
    }
  });

  const ChangeUsernameSchema = Yup.object().shape({
    currentUsername: Yup.string(),
    newUsername: Yup.string()
      .min(1, 'Username is too short!')
      .max(30, 'Username is too long!')
      .matches(/^[a-zA-Z0-9._]+$/, 'Username is not valid.'),
    currentPassword: Yup.string()
  });

  const usernameFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      currentUsername: currentUser?.username || '',
      newUsername: currentUser?.username || '',
      currentPassword: ''
    },
    validationSchema: ChangeUsernameSchema,
    onSubmit: async (values, formikHelpers) => {
      const { newUsername, currentPassword } = values;
      const { setSubmitting, setFieldValue } = formikHelpers;
      if (currentUser) {
        dispatch(updateUsername({ newUsername, currentPassword }))
          .unwrap()
          .then(() => {
            enqueueSnackbar('Username updated', { variant: 'success' });
            setEditUsername(true);
            setFieldValue('currentUsername', newUsername);
          })
          .catch(() => {
            enqueueSnackbar('Username not updated', { variant: 'error' });
          });
      }
      setSubmitting(false);
    }
  });

  const ChangePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string(),
    newPassword: Yup.string()
      .min(8, 'Password is too short!')
      .max(100, 'Password is too long')
      .matches(
        /^(?=.*\d)(?![.])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/,
        'Password must be at least 8 characters long, contain at least 1 uppercase, 1 lowercase, and 1 number.'
      ),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
  });

  const passwordFormik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    validationSchema: ChangePasswordSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      dispatch(
        updatePassword({ currentPassword: values.oldPassword, newPassword: values.newPassword })
      )
        .unwrap()
        .then(() => {
          resetForm();
          enqueueSnackbar('Password changed successfully', { variant: 'success' });
        })
        .catch(() => enqueueSnackbar('Invalid Password', { variant: 'error' }));
      setSubmitting(false);
    }
  });

  const handleCancelEmail = () => {
    emailFormik.resetForm();
    handleEmailClick();
  };

  const handleCancelUsername = () => {
    usernameFormik.resetForm();
    handleUsernameClick();
  };

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = passwordFormik;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <List sx={{ width: '100%', p: 3 }}>
            <ListItemText
              primary={
                <Typography align="left" variant="h4">
                  Account Information
                </Typography>
              }
            />
          </List>
          <Divider />
          <List disablePadding>
            <ListItemButton
              onClick={handleEmailClick}
              sx={[
                {
                  p: 3
                },
                editEmail && {
                  '&:hover': {
                    backgroundColor: 'inherit'
                  }
                }
              ]}
            >
              <ListItemText primary="Email Address" />
              <ListItemText
                primary={emailFormik.values.currentEmail}
                sx={{ textAlign: 'end', pr: 3 }}
              />
              {editEmail ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={editEmail} timeout="auto" unmountOnExit>
              <FormikProvider value={emailFormik}>
                <Form autoComplete="off" noValidate onSubmit={emailFormik.handleSubmit}>
                  <Stack spacing={3} alignItems="flex-end" sx={{ p: 3 }}>
                    <TextField
                      {...emailFormik.getFieldProps('newEmail')}
                      fullWidth
                      label="Email"
                      type="email"
                      error={Boolean(emailFormik.touched.newEmail && emailFormik.errors.newEmail)}
                      helperText={emailFormik.touched.newEmail && emailFormik.errors.newEmail}
                    />
                    <TextField
                      {...emailFormik.getFieldProps('currentPassword')}
                      fullWidth
                      autoComplete="on"
                      label="Current password"
                      type="password"
                      error={Boolean(
                        emailFormik.touched.currentPassword && emailFormik.errors.currentPassword
                      )}
                      helperText={
                        emailFormik.touched.currentPassword && emailFormik.errors.currentPassword
                      }
                    />
                    <Stack spacing={3} direction="row">
                      <Button variant="outlined" color="info" onClick={handleCancelEmail}>
                        Cancel
                      </Button>
                      <LoadingButton
                        type="submit"
                        variant="contained"
                        loading={emailFormik.isSubmitting}
                      >
                        Change email
                      </LoadingButton>
                    </Stack>
                  </Stack>
                </Form>
              </FormikProvider>
            </Collapse>
          </List>
          <Divider />
          <List disablePadding>
            <ListItemButton
              onClick={handleUsernameClick}
              sx={[
                {
                  p: 3
                },
                editUsername && {
                  '&:hover': {
                    backgroundColor: 'inherit'
                  }
                }
              ]}
            >
              <ListItemText primary="Username" />
              <ListItemText
                primary={usernameFormik.values.currentUsername}
                sx={{ textAlign: 'end', pr: 3 }}
              />
              {editUsername ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={editUsername} timeout="auto" unmountOnExit>
              <FormikProvider value={usernameFormik}>
                <Form autoComplete="off" noValidate onSubmit={usernameFormik.handleSubmit}>
                  <Stack spacing={3} alignItems="flex-end" sx={{ p: 3 }}>
                    <TextField
                      {...usernameFormik.getFieldProps('newUsername')}
                      fullWidth
                      label="Username"
                      type="text"
                      disabled={editEmail}
                      error={Boolean(
                        usernameFormik.touched.newUsername && usernameFormik.errors.newUsername
                      )}
                      helperText={
                        usernameFormik.touched.newUsername && usernameFormik.errors.newUsername
                      }
                    />
                    <TextField
                      {...usernameFormik.getFieldProps('currentPassword')}
                      fullWidth
                      autoComplete="on"
                      label="Current password"
                      type="password"
                      error={Boolean(
                        usernameFormik.touched.currentPassword &&
                          usernameFormik.errors.currentPassword
                      )}
                      helperText={
                        usernameFormik.touched.currentPassword &&
                        usernameFormik.errors.currentPassword
                      }
                    />
                    <Stack spacing={3} direction="row">
                      <Button variant="outlined" color="info" onClick={handleCancelUsername}>
                        Cancel
                      </Button>
                      <LoadingButton
                        type="submit"
                        variant="contained"
                        loading={usernameFormik.isSubmitting}
                      >
                        Change username
                      </LoadingButton>
                    </Stack>
                  </Stack>
                </Form>
              </FormikProvider>
            </Collapse>
          </List>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
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
                      (touched.newPassword && errors.newPassword) ||
                      'Password must be at least 8 characters long, contain at least 1 uppercase, 1 lowercase, and 1 number.'
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
