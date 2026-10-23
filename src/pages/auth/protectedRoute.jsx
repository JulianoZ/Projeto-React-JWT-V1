import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

//protectedRoute.jsx → controle de acesso a rotas privadas

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

