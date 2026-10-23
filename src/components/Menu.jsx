import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
    { name: "Serviços", href: "/servicos" },
    { name: "Usuários", href: "/users" },
    { name: "Login", href: "/login" },
    { name: "LoginSimples", href: "/loginsimples" },
    { name: "Dashboard", href: "/dashboard" },


    
    
    
  ];

  return (
    <div className="relative">
      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden focus:outline-none text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"} {/* Ícone Hamburger / X */}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-1/2 -translate-x-1/2 w-[90%] bg-blue-600 text-white flex flex-col space-y-2 p-4 transition-all duration-300 z-50 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="hover:text-yellow-300 transition-colors duration-200"
            onClick={() => setOpen(false)} // fecha menu ao clicar
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}