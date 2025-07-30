import type React from "react";
import type { SetStateAction } from "react";

export interface LoginContextType {
  username: string;
  setUsername: React.Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<SetStateAction<string>>;
}
