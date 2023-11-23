import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";

type GoogleSignInResponse = {
  // Define the properties you expect to receive after a successful Google sign-in
  idToken: string; // This is just an example, you might have other properties
  // Add other properties as needed based on the data you receive
};

// -- Define the type for the authentication context
type AuthContextType = {
  user: string;
  //setUser: React.Dispatch<React.SetStateAction<string>>;
  googleSignIn: () => void; // Define the method signatures
  logOut: () => void;
};

// -- Create the authentication context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// -- Create the authentication context provider component
export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Define your state and methods here
  const [user, setUser] = useState("test");

  // -- sign-in function
  const googleSignIn = () => {
    console.log("entrei aqui");
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // -- logout function
  const logOut = () => {
    console.log("entrei");
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Check if currentUser exists before setting the user
      if (currentUser) {
        setUser(currentUser.uid); // Assuming `uid` is the user ID or any other user property you want to set
      } else {
        setUser(""); // Set user to an empty string or handle the absence of a user
      }
    });
    return () => unsubscribe();
  }, [user]);

  // -- Create the context value to be provided
  const contextValue: AuthContextType = { user, googleSignIn, logOut };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// -- Create a custom hook to consume the authentication context
export const UserAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UserAuth must be used within an AuthContextProvider");
  }
  return context;
};
