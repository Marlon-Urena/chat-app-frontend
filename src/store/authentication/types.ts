import { SerializedError } from '@reduxjs/toolkit';

export interface User {
  username: string;
  email: string;
  photoURL?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  address?: string;
  state?: string;
  city?: string;
  zipCode?: string;
}

export interface AuthenticationState {
  isAuthenticated: boolean;
  checkingSession: boolean;
  currentUser: User | null;
  error: SerializedError | null;
}
