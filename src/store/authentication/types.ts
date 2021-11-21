import { SerializedError } from '@reduxjs/toolkit';

export interface User {
  displayName: string;
  email: string;
  photoURL?: string;
  phoneNumber?: string;
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
