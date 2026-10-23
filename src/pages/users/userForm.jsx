import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, getUserById, updateUser } from "../../services/userService";

export default function UserForm() {
  const [user, setUser] = useState({ nome: "", email: "", senha: "", idade: 0, role: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) getUserById(id).then(res => setUser(res.data));
  }, [id]);

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) await updateUser(id, user);
    else await createUser(user);
    navigate("/users");
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Editar Usuário" : "Novo Usuário"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <div>
          <label className="block font-medium mb-1">Nome:</label>
          <input 
            name="nome"
            placeholder="Digite o nome"
            value={user.nome}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email:</label>
          <input
            name="email"
            placeholder="Digite o email"
            value={user.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Senha:</label>
          <input
            name="senha"
            type="password"
            placeholder="Digite a senha"
            value={user.senha}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Idade:</label>
          <input
            name="idade"
            type="number"
            placeholder="Digite a idade"
            value={user.idade}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Função (Role):</label>
          <input
            name="role"
            placeholder="Ex: admin, user"
            value={user.role}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Salvar
        </button>
      </form>
    </div>
  );
}
