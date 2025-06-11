import * as React from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { createContext } from "react";
import { auth } from "@/firebaseConfig";

interface IUserAuthProviderProps {
  children: React.ReactNode;
}

type CustomUser = User & { isAdmin?: boolean };

type AuthContextData = {
  user: CustomUser | null;
  loading: boolean;
  logIn: typeof logIn;
  signUp: typeof signUp;
  logOut: typeof logOut;
  googleSignIn: typeof googleSignIn;
};

const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const logOut = async () => {
  await signOut(auth);
  window.location.href = "/";
};

// const googleSignIn = () => {
//   const googleAuthProvider = new GoogleAuthProvider();
//   return signInWithPopup(auth, googleAuthProvider);
// };
const googleSignIn = () => signInWithPopup(auth, new GoogleAuthProvider())

export const userAuthContext = createContext<AuthContextData>({
  user: null,
  loading: true,
  logIn,
  signUp,
  logOut,
  googleSignIn,
});

export const UserAuthProvider: React.FunctionComponent<
  IUserAuthProviderProps
> = ({ children }) => {
  const [user, setUser] = React.useState<CustomUser | null>(null);
    const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    const unsubrcribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const tokenResult = await user.getIdTokenResult();
        const isAdmin = !!tokenResult.claims.admin;
        setUser({ ...user, isAdmin });
      } else {
        setUser(null);
      }
      setLoading(false);

      return () => {
        unsubrcribe();
      };
    });
  }, []);

  const value: AuthContextData = {
    user,
    loading,
    logIn,
    signUp,
    logOut,
    googleSignIn,
  };

  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return React.useContext(userAuthContext);
};
