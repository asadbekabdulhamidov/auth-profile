import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import firebase from 'firebase/compat/app';

// 1 context ichida saqlanadigan qiymat turi.
type AuthContextType = {
  user: User | null;
  loading: boolean;
};

//contetni default qiymati
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// 4) Qulay custom hook – har joyda useAuth() deb ishlatish uchun
export function useAuth() {
  return useContext(AuthContext);
}
