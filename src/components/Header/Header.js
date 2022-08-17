const Header = () => {
  return (
    <div className="h-screen">
      <nav className="flex justify-between items-center h-16 bg-blue-700 text-black relative shadow-sm">
        <button className="px-10 py-3 text-sm text-white font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Productos
        </button>
        <button className="px-10 py-3 text-sm text-white font-semibold rounded-full border hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Nosotros
        </button>
        <button className="px-10 py-3 text-sm text-white font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Contactos
        </button>
      </nav>
    </div>
  );
};

export default Header;
