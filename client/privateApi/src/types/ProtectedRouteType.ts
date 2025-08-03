import type React from "react";
import type { JSX } from "react";

export type ProtectedRouteType = {
  allowedRoles: string[];
  children: any
}