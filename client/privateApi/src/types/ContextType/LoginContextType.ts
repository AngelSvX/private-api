import type React from "react";
import type { SetStateAction } from "react";
import type { LoginUser } from "../FetchType/LoginUser";

export interface LoginContextType {
  username: string;
  setUsername: React.Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<SetStateAction<string>>;
  loginUser: () => void
}
