import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import type { LoginContextType } from "../types/ContextType/LoginContextType"

export const useLogin = (): LoginContextType => {
  const context = useContext(LoginContext)
  if (!context) {
    throw new Error("useLogin debe usarse dentro de LoginProvider")
  }
  return context
}