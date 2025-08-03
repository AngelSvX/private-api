import React, { createContext, useEffect, useState, type ReactNode } from "react";
import type { LoginContextType } from '../types/ContextType/LoginContextType';
import axios from "axios";
import { jwtDecode } from 'jwt-decode'
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router";


export const LoginContext = createContext<LoginContextType | undefined>(
  undefined
);

export const LoginProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  // 🧠 Carga el token desde localStorage si existe
  const initialToken = localStorage.getItem("token") || "";
  const [token, setToken] = useState<string>(initialToken)

  const navigate = useNavigate()

  const loginUser = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/login", {
        username,
        password
      });

      const { setLocalStorage } = useLocalStorage()
      const jwt = response.data.token;

      setLocalStorage({ key: "token", value: jwt });
      setToken(jwt);

      const decoded: any = jwtDecode(jwt)

      switch (decoded.role) {
        case "Programador":
          navigate("/programmer")
          break
        case "Diseñador":
          navigate("/designer")
          break
        case "Analista":
          navigate("/analist")
          break
        default:
          navigate("/unauthorized")
          break
      }

    } catch (error) {
      throw error;
    }
  };

  return <LoginContext.Provider value={{ username, setUsername, password, setPassword, loginUser, token }}>
    {children}
  </LoginContext.Provider>;
};
