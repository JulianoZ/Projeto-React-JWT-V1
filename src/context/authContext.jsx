import { createContext, useState, useEffect } from "react";
import { authService } from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = authService.getToken();
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = async (email, senha) => {
    const data = await authService.login({ email, senha }); // ✅ monta o objeto corretamente
    setUser({ token: data.token });
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
