// import { FaTachometerAlt } from 'react-icons/fa';
import { BiHome, BiCar, BiDetail, BiCog } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    // <aside className="bg-blue-500 relative h-screen w-72 md:w-64 hidden sm:block shadow-xl flex-none">
    <aside className="w-72 md:w-14 hidden sm:block shadow-xl flex-none ml-4">
      {/* <div className="py-4 pl-6"></div> */}
      <div className="menu-links text-white text-base font-semibold fixed">
        <div className="menu-pages">
          <Link
            to="/"
            className="flex items-center active-nav-link text-white py-4 nav-item justify-center"
          >
            <BiHome className="mr-3 md:mr-0" size="1.1em" />
            <p className="md:hidden">Admin</p>
          </Link>
          <Link
            to="/productos"
            className="flex items-center active-nav-link text-white py-4 nav-item justify-center"
          >
            <BiCar className="mr-3 md:mr-0" size="1.1em" />
            <p className="md:hidden">Productos</p>
          </Link>
          <Link
            to="/productos/nuevo"
            className="flex items-center active-nav-link text-white py-4 nav-item justify-center"
          >
            <BiDetail className="mr-3 md:mr-0" size="1.1em" />
            <p className="md:hidden">Nuevo</p>
          </Link>
        </div>
        <div className="menu-settings">
          <Link
            to="/dashboard"
            className="flex items-center active-nav-link text-white py-4 nav-item justify-center"
          >
            <BiCog className="mr-3 md:mr-0" size="1.1em" />
            <p className="md:hidden">Ajustes</p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
