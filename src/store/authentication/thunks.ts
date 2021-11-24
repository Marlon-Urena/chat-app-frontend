import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { browserSessionPersistence, browserLocalPersistence, setPersistence } from 'firebase/auth';
import firebase from 'firebase/compat';
import { AuthenticationState, User } from './types';
import * as AuthAPI from '../../apis/authAPI';
import firebaseAuth from '../../.firebase/firebaseConfig';

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
  async (signupDetails: { name: string; password: string; email: string }) => {
    await AuthAPI.createUser(signupDetails);
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
