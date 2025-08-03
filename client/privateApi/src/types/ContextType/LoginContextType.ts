import type React from "react";
import type { SetStateAction } from "react";
import type { LoginUser } from "../FetchType/LoginUser";
import type { JwtPayload } from "jwt-decode";

export interface LoginContextType {
  username: string;
  setUsername: React.Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<SetStateAction<string>>;
  loginUser: () => void,
  token: any
}
