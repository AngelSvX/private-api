import { Navigate, Outlet, replace } from "react-router";
import { useLogin } from "../hooks/useLogin";
import type { ProtectedRouteType } from "../types/ProtectedRouteType";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function ProtectedRoute({ children, allowedRoles }: ProtectedRouteType) {

  const { token } = useLogin()

  try {
    const decodedToken: any = jwtDecode(token!)

    if(allowedRoles.includes(decodedToken.role)){
      return children;
    }else{
      return <Navigate to={"/unauthorized"} replace/>
    }

  } catch (error) {
    console.log(error)
    return <Navigate to={"/"} replace />
  }
}

export default ProtectedRoute
