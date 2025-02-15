"use client";
import React, { createContext, useContext } from "react";
import jwt from "jsonwebtoken";
import { IUser } from "@/responseType/response.type";

// return value :
interface AuthContextType {
  isAuth: boolean;
  user: IUser | null;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  user: null,
});

// AuthProvider component

type AuthProviderProps = {
  children: React.ReactNode;
  initialToken: string | null;
};
export const AuthProvider = ({ children, initialToken }: AuthProviderProps) => {
  // Decode the token and set auth state
  const decodedUser = initialToken ? (jwt.decode(initialToken) as IUser) : null;
  const isAuth = !!decodedUser;

  // Context value
  const contextValue: AuthContextType = {
    isAuth,
    user: decodedUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
