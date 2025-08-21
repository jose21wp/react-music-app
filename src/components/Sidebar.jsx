import { FaHome, FaSearch, FaBook, FaHeart } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white h-screen p-6 flex flex-col gap-6">
      {/* Logo */}
      <div className="text-purple-500 text-2xl font-bold">🎵 MusicApp</div>

      {/* Navegación principal */}
      <nav className="flex flex-col gap-4">
        <NavItem icon={<FaHome />} label="Inicio" />
        <NavItem icon={<FaSearch />} label="Buscar" />
        <NavItem icon={<FaBook />} label="Tu biblioteca" />
      </nav>

      {/* Separador */}
      <hr className="border-gray-700 my-4" />

      {/* Favoritos o listas */}
      <nav className="flex flex-col gap-4">
        <NavItem icon={<FaHeart />} label="Tus favoritos" />
        {/* Puedes agregar más secciones aquí */}
      </nav>

      {/* Espacio inferior */}
      <div className="mt-auto text-sm text-gray-400">
        © 2025 Jose21wp
      </div>
    </aside>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 hover:text-purple-400 cursor-pointer">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
