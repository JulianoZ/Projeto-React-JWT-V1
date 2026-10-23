import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modal, setModal] = useState({ show: false, type: "", message: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, senha);

      // Mostra modal de sucesso
      setModal({
        show: true,
        type: "success",
        message: "Login realizado com sucesso!",
      });

      // Fecha o modal e redireciona após 1.5s
      setTimeout(() => {
        setModal({ show: false, type: "", message: "" });
        navigate("/users");
      }, 1500);
    } catch (err) {
      console.error(err);
      // Mostra modal de erro
      setModal({
        show: true,
        type: "error",
        message: "Email ou senha inválidos.",
      });

      // Fecha o modal após 2s
      setTimeout(() => {
        setModal({ show: false, type: "", message: "" });
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Senha
        </label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded mb-6 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
        >
          Entrar
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Não tem conta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Cadastre-se
          </a>
        </p>
      </form>

      {/* Modal */}
      {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div
            className={`p-6 rounded-2xl shadow-lg text-center w-80 animate-fade-in
              ${
                modal.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
          >
            <h3 className="text-lg font-semibold mb-2">
              {modal.type === "success" ? "Sucesso!" : "Erro!"}
            </h3>
            <p>{modal.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
