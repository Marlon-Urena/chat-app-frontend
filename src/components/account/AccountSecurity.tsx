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
  Button,
  List,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from 'react';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getUser, updatePassword, updateUserAccountEmail } from '../../store/authentication/thunks';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

export default function AccountSecurity() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.authentication);
  const [editEmail, setEditEmail] = useState(true);
  const user = useAuth();

  useEffect(() => {
    if (user) {
      dispatch(getUser(user));
    }
  }, [dispatch, user]);

  const AccountInfoSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required.'),
    username: Yup.string().required('Username is required.')
  });

  const accountInfoFormik = useFormik({
    initialValues: {
      email: currentUser?.email || '',
      username: currentUser?.username || ''
    },
    validationSchema: AccountInfoSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (currentUser) {
        dispatch(updateUserAccountEmail(values.email))
          .unwrap()
          .then(() => enqueueSnackbar('Email updated', { variant: 'success' }))
          .catch(() => enqueueSnackbar('Update not successful', { variant: 'error' }));
      }
      enqueueSnackbar('Save success', { variant: 'success' });
      setSubmitting(false);
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
      dispatch(
        updatePassword({ currentPassword: values.oldPassword, newPassword: values.newPassword })
      )
        .unwrap()
        .then(() => enqueueSnackbar('Password changed successfully', { variant: 'success' }))
        .catch(() => enqueueSnackbar('Invalid Password', { variant: 'error' }));
      setSubmitting(false);
    }
  });

  async function handleChangeEmail(newEmail: string) {
    if (currentUser) {
      dispatch(updateUserAccountEmail(newEmail))
        .unwrap()
        .then(() => {
          enqueueSnackbar('Email updated', { variant: 'success' });
          setEditEmail(true);
        })
        .catch((e) => {
          enqueueSnackbar('Email not updated', { variant: 'error' });
          console.log(e);
        });
    }
  }

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  // async function validateEmailOnBlur() {
  //   const { email } = accountInfoFormik.values;
  //   const response: AxiosResponse<boolean> = await AuthAPI.checkEmailAvailable(email);
  //   const isEmailAvailable: boolean = response.data;
  //   if (!isEmailAvailable) {
  //     accountInfoFormik.errors.email = 'Email is not available';
  //   }
  // }

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = passwordFormik;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
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
                  <List sx={{ width: '100%', borderBottom: '1px solid' }} component="nav">
                    <ListItemButton onClick={handleClick}>
                      <ListItemText primary="Email Address" />
                      <ListItemText primary={accountInfoFormik.values.email} />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Starred" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </List>
                  <TextField
                    {...accountInfoFormik.getFieldProps('email')}
                    fullWidth
                    label="Email"
                    type="email"
                    disabled={editEmail}
                    error={Boolean(
                      accountInfoFormik.touched.email && accountInfoFormik.errors.email
                    )}
                    helperText={accountInfoFormik.touched.email && accountInfoFormik.errors.email}
                    InputProps={{
                      endAdornment: editEmail ? (
                        <Button variant="text" onClick={() => setEditEmail(false)}>
                          Edit
                        </Button>
                      ) : (
                        <>
                          <Button variant="text" onClick={() => setEditEmail(true)}>
                            Cancel
                          </Button>
                          <Button
                            variant="text"
                            onClick={() => handleChangeEmail(accountInfoFormik.values.email)}
                          >
                            Save
                          </Button>
                        </>
                      )
                    }}
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
