import { useEffect, useState, createContext, ReactNode } from 'react';
import firebase from 'firebase/compat';
import firebaseAuth from '../.firebase/firebaseConfig';
import { useAppDispatch } from '../store/store';
import { checkSession } from '../store/user/thunks';
import { setCurrentUserId, startConnecting } from '../store/chat/reducer';

export const AuthContext = createContext<firebase.User | null>(firebaseAuth.currentUser);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<firebase.User | null>(firebaseAuth.currentUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    return firebaseAuth.onIdTokenChanged(async (updatedUser) => {
      await setUser(updatedUser);
      await dispatch(checkSession(updatedUser));
      await dispatch(setCurrentUserId(updatedUser?.uid));
      if (updatedUser) {
        dispatch(startConnecting());
      }
    });
  }, [dispatch]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
