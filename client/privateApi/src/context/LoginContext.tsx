import React, { createContext, useState, type ReactNode } from "react";
import type { LoginContextType } from '../types/ContextType/LoginContextType';
import axios from "axios";
import { jwtDecode } from 'jwt-decode'


export const LoginContext = createContext<LoginContextType | undefined>(
  undefined
);

export const LoginProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const loginUser = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/login", {
        username,
        password
      })

      const responseDecoded = jwtDecode(response.data.token)
      console.log(responseDecoded)

    } catch (error) {
      throw error;
    }
  }

  return <LoginContext.Provider value={{ username, setUsername, password, setPassword, loginUser }}>
    {children}
  </LoginContext.Provider>;
};
