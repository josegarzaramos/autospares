import { FaBars, FaSearch, FaBell, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7x1 mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-strench sm:justify-start">
            <button className="px-4 py-2 text-gray-700 text-2x1 rounde-lg hover:bg-gray-200">
              <FaBars />
            </button>
            <form method="GET" className="w-full invisible sm:visible">
              <div className="relative text-gray-500 ml-6 px-3 pt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-700 text-xl">
                  <button type="submit" className="pt-1 focus:outline-none focus:shadow-outline">
                    <FaSearch />
                  </button>
                </span>
                <input type="serch" className="py-2 text-md text-gray-900 w-full rounded-md pl-10 bg-transparent placeholder-gray-800 focus:outline-none focus:bg-white focus:text-gray-800" placeholder="Buscar" />
              </div>
            </form>
          </div>

          <div className="ml-3 relative">
            <div>
              <button className="text-xl text-gray-800 px-4 py-2 focus:outline-none">
                <FaBell />
              </button>
            </div>
            <div className="hidden origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <p className="p-2 text-sm text-gray-700">Sin resultados</p>
            </div>
          </div>

          <div className="ml-3 relative">
            <div>
              <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" >
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </button>
            </div>
            <div className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0"><FaUser className="mr-2" />Perfil</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1"><FaCog className="mr-2" />Configuración</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2"><FaSignOutAlt className="mr-2" />Salir</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;