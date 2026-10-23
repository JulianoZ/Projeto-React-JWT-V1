import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../services/userService";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      await deleteUser(id);
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Usuários</h2>
        <Link to="/users/new" className="bg-blue-500 text-white px-3 py-1 rounded">Novo</Link>
      </div>
      <table className="w-full border">
        <thead>
          <tr className="bg-blue-200">
            <th>ID</th><th>Nome</th><th>Email</th><th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-t">
              <td>{u.id}</td>
              <td>{u.nome}</td>
              <td>{u.email}</td>
              <td>
                <Link to={`/users/edit/${u.id}`} className="text-blue-600 mr-2">Editar</Link>
                <button onClick={() => handleDelete(u.id)} className="text-red-600">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
