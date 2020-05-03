import React, { createContext, useContext, useState } from "react";
import { AsyncStorage } from "react-native";

//@ts-ignore
const AuthContext = createContext();

interface AuthProviderProps {
  children: React.ReactNode;
  isLoggedin: Boolean;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  isLoggedin: isLoggedinProps,
  children,
}) => {
  const [isLoggedin, setisLoggedin] = useState(isLoggedinProps);
  const LogUserIn = async () => {
    try {
      AsyncStorage.setItem("isLoggedIn", "true");
      setisLoggedin(true);
    } catch (error) {
      console.log(error);
    }
  };
  const LogUserOut = async () => {
    try {
      AsyncStorage.setItem("isLoggedIn", "false");
      setisLoggedin(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedin, LogUserIn, LogUserOut }}>
      {children}
    </AuthContext.Provider>
  );
};
const useIsLoggedin = () => {
  const { isLoggedin } = useContext(AuthContext);
  return isLoggedin;
};

export const useLogIn = () => {
  const { logUserIn } = useContext(AuthContext);
  return logUserIn;
};

export const useLogOut = () => {
  const { logUserOut } = useContext(AuthContext);
  return logUserOut;
};
