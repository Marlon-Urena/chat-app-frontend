import { useEffect, useState, createContext, ReactNode } from 'react';
import firebase from 'firebase/compat';
import firebaseAuth from '../.firebase/firebaseConfig';
import { useAppDispatch } from '../store/store';
import { checkSession } from '../store/authentication/thunks';

export const AuthContext = createContext<firebase.User | null>(firebaseAuth.currentUser);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<firebase.User | null>(firebaseAuth.currentUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    return firebaseAuth.onAuthStateChanged((updatedUser) => {
      console.log(updatedUser);
      setUser(updatedUser);
      dispatch(checkSession(updatedUser));
    });
  }, [dispatch]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
