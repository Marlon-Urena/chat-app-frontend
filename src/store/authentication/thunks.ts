import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import firebase from 'firebase/compat';
import { AuthenticationState, User } from './types';
import * as AuthAPI from '../../apis/authAPI';
import firebaseAuth from '../../.firebase/firebaseConfig';

export const getUser = createAsyncThunk<AuthenticationState, firebase.User>(
  'authentication/getUser',
  async () => {
    const currentUser: AxiosResponse<User> = await AuthAPI.getUser();
    return {
      currentUser: currentUser.data
    } as AuthenticationState;
  }
);

export const login = createAsyncThunk<AuthenticationState, { email: string; password: string }>(
  'authentication/login',
  async (credentials) => {
    const { email, password } = credentials;
    await firebaseAuth.signInWithEmailAndPassword(email, password);
    return {
      isAuthenticated: true,
      checkingSession: false,
      error: null
    } as AuthenticationState;
  }
);

export const logout = createAsyncThunk('authentication/logout', async () => {
  await firebase.auth().signOut();
  return {
    isAuthenticated: false,
    checkingSession: true,
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
