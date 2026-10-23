import { useContext } from "react";
import { AuthContext } from "../context/authContext"

//useAuth.js → hook de acesso ao contexto

export function useAuth() {
  return useContext(AuthContext);
}
