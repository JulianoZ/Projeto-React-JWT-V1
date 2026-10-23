import axios from "axios";

const API_URL = "https://localhost:7084/api/user"; // ajuste conforme seu backend


export const getUsers = async () => {
  return axios.get(API_URL);
};

// 🔹 Retorna usuário por ID
export const getUserById = async (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// 🔹 Cadastra um novo usuário
// (seu endpoint é /api/user/cadastro)
export const createUser = async (user) => {
  return axios.post(`${API_URL}/cadastro`, user);
};

// 🔹 Atualiza um usuário existente
// (seu endpoint é /api/user/Atualizar/{id})
export const updateUser = async (id, user) => {
  return axios.put(`${API_URL}/Atualizar/${id}`, user);
};

// 🔹 Deleta um usuário
export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};