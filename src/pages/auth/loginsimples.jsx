import React, { useState } from "react";
import axios from "../../services/axiosConfig";

function AutenticacaoLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Email " + email);
    console.log("Senha " + password);

const loginData = {
  id: 0,
  nome: "", 
  email: email,
  idade: 0,
  senha: password,
  dataCadastro: new Date().toISOString(),
  role: "string",
  token: "string"
};    

    try {
      const response = await axios.post(
        "https://localhost:7084/api/user/login",
        loginData
      );
      setToken(response.data.token);
      console.log("Nome " + response.data.nome);
      localStorage.setItem("token", response.data.token);
      if (response.data.nome) {
        alert("Login bem-sucedido!");
      } else {
        alert("Email ou senha inválidos");
      }
    } catch (error) {
      alert("Email ou senha inválidos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Entrar
          </button>
        </form>

        {token && (
          <div className="mt-6 bg-green-50 border border-green-300 text-green-700 p-3 rounded-lg text-sm break-words">
            <strong>Token JWT:</strong> {token}
          </div>
        )}

        <p className="text-center text-sm text-gray-600 mt-6">
          Não tem conta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}

export default AutenticacaoLogin;
