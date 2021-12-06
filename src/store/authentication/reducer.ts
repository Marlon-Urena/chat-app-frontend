import { createSlice } from '@reduxjs/toolkit';
import { checkSession, getUser, login, logout, register } from './thunks';
import { AuthenticationState } from './types';

const initialAuthenticationState: AuthenticationState = {
  isAuthenticated: false,
  checkingSession: true,
  currentUser: null,
  error: null
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthenticationState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      return { ...state, error: action.error };
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
    builder.addCase(checkSession.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
    builder.addCase(register.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
    builder.addCase(register.rejected, (state, action) => {
      return { ...state, error: action.error };
    });
  }
});

export default authenticationSlice;
