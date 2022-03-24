import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { browserSessionPersistence, browserLocalPersistence, setPersistence } from 'firebase/auth';
import firebase from 'firebase/compat';
import { AuthenticationState, User } from './types';
import * as AuthAPI from '../../apis/authAPI';
import firebaseAuth from '../../.firebase/firebaseConfig';

const reauthenticateUser = async (email: string, password: string) => {
  const credential = firebase.auth.EmailAuthProvider.credential(email, password);
  return firebaseAuth.currentUser?.reauthenticateWithCredential(credential);
};

export const getUser = createAsyncThunk<AuthenticationState, firebase.User>(
  'authentication/getUser',
  async () => {
    const response: AxiosResponse<User> = await AuthAPI.getUser();
    return {
      currentUser: response.data
    } as AuthenticationState;
  }
);

export const login = createAsyncThunk<
  AuthenticationState,
  { email: string; password: string; remember: boolean }
>('authentication/login', async (credentials) => {
  const { email, password, remember } = credentials;
  const persistence = remember ? browserLocalPersistence : browserSessionPersistence;
  await setPersistence(firebaseAuth, persistence);
  await firebaseAuth.signInWithEmailAndPassword(email, password);
  return {
    isAuthenticated: true,
    checkingSession: false,
    error: null
  } as AuthenticationState;
});

export const logout = createAsyncThunk('authentication/logout', async () => {
  await firebaseAuth.signOut();
  return {
    isAuthenticated: false,
    checkingSession: false,
    currentUser: null
  } as AuthenticationState;
});

export const register = createAsyncThunk(
  'authentication/register',
  async (signupDetails: { username: string; email: string; password: string }) => {
    await AuthAPI.createUser(signupDetails);
    await firebaseAuth.signInWithEmailAndPassword(signupDetails.email, signupDetails.password);
    return {
      isAuthenticated: true,
      checkingSession: false,
      error: null
    };
  }
);

export const checkSession = createAsyncThunk(
  'authentication/checkSession',
  async (user: firebase.User | null) => {
    let isAuthenticated = false;
    if (user) {
      isAuthenticated = true;
    }
    return {
      isAuthenticated,
      checkingSession: false
    } as AuthenticationState;
  }
);

export const updateUser = createAsyncThunk(
  'authentication/updateUser',
  async (updatedUser: User) => {
    const updatedUserResponse: AxiosResponse<User> = await AuthAPI.updateUser(updatedUser);
    return updatedUserResponse.data;
  }
);

export const updatePassword = createAsyncThunk(
  'authentication/updatePassword',
  async (updatedPasswordDetails: { currentPassword: string; newPassword: string }) => {
    const { currentPassword, newPassword } = updatedPasswordDetails;
    await reauthenticateUser(firebaseAuth.currentUser?.email || '', currentPassword);
    await firebaseAuth.currentUser?.updatePassword(newPassword);
  }
);

export const updateEmail = createAsyncThunk(
  'authentication/updateEmail',
  async (updateEmailDetails: { newEmail: string; currentPassword: string }) => {
    const { newEmail, currentPassword } = updateEmailDetails;
    await reauthenticateUser(firebaseAuth.currentUser?.email || '', currentPassword);

    const updatedUserResponse: AxiosResponse<User> = await AuthAPI.changeEmail(newEmail);
    await reauthenticateUser(newEmail, currentPassword);

    return updatedUserResponse.data;
  }
);

export const updateUsername = createAsyncThunk(
  'authentication/updateUsername',
  async (updateUsernameDetails: { newUsername: string; currentPassword: string }) => {
    const { newUsername, currentPassword } = updateUsernameDetails;
    await reauthenticateUser(firebaseAuth.currentUser?.email || '', currentPassword);
    const updatedUserResponse: AxiosResponse<User> = await AuthAPI.changeUsername(newUsername);
    return updatedUserResponse.data;
  }
);

export const updateProfilePhoto = createAsyncThunk(
  'authentication/updateProfilePhoto',
  async (newProfilePhoto: File) => {
    const updatedUserResponse: AxiosResponse<User> = await AuthAPI.changeProfilePhoto(
      newProfilePhoto
    );

    return updatedUserResponse.data;
  }
);
