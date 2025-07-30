import React, { createContext, useState, type ReactNode } from "react";
import type { LoginContextType } from '../types/ContextType/LoginContextType';

export const LoginContext = createContext<LoginContextType | undefined>(
  undefined
);

export const LoginProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  const [ username, setUsername ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")

  return <LoginContext.Provider value={{username, setUsername, password, setPassword}}>
    {children}
  </LoginContext.Provider>;
};
