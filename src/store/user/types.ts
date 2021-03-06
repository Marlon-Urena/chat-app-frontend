import { SerializedError } from '@reduxjs/toolkit';

export interface User {
  uid: string;
  username: string;
  email: string;
  photoUrl?: string;
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
