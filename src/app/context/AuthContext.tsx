import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type AuthContextType = {
  // Define your context state and methods here
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Define your state and methods here
  const [user, setUser] = useState("test");

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
