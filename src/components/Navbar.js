import { Link } from 'react-router-dom';
import {
  FaBars,
  FaSearch,
  FaBell,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';
import { BiCar } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="">
      <div className="max-w-7x1 mx-auto px-2 sm:px-6 lg:px-7">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-strench sm:justify-start">
            <div className="hidden md:contents">
              <BiCar size="2em" color="#3b82f6" className="mr-2" />
              <h3 className="font-bold">Autospares</h3>
            </div>
            <button className="px-4 py-2 text-gray-700 text-2x1 rounde-lg hover:bg-gray-200 md:hidden">
              <FaBars />
            </button>
            <form
              id="search-form"
              method="GET"
              className="w-2/4 invisible sm:visible mx-auto"
            >
              <div className="relative text-gray-500 ml-6 px-3 pt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-700 text-xl">
                  <button
                    type="submit"
                    className="pt-1 focus:outline-none focus:shadow-outline"
                  >
                    <FaSearch />
                  </button>
                </span>
                <input
                  type="text"
                  className="py-2 text-md text-gray-900 w-full rounded-md pl-10 bg-transparent placeholder-gray-800 focus:outline-none"
                  placeholder="Buscar"
                />
              </div>
            </form>
          </div>

          <div className="ml-3 relative">
            <div>
              <Link to="/notificaciones">
                <FaBell size="1.3em" />
              </Link>
            </div>
          </div>

          <div className="ml-3 relative">
            <div>
              <Link to="/usuario">
                <FaUser size="1.3em" />
              </Link>
            </div>
            <div className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-0"
              >
                <FaUser className="mr-2" />
                Perfil
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-1"
              >
                <FaCog className="mr-2" />
                Configuración
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-2"
              >
                <FaSignOutAlt className="mr-2" />
                Salir
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
