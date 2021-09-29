import { FaCog, FaTachometerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    // <aside className="bg-blue-500 relative h-screen w-72 md:w-64 hidden sm:block shadow-xl flex-none">
    <aside className="relative h-screen w-72 md:w-64 hidden sm:block shadow-xl flex-none">
      {/* <div className="py-4 pl-6"></div> */}
      <div className="text-white text-base font-semibold pt-3">
        <Link
          to="/"
          className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
        >
          <FaCog className="mr-3" />
          Admin
        </Link>
        <Link
          to="/productos"
          className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
        >
          <FaTachometerAlt className="mr-3" />
          Productos
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
        >
          <FaTachometerAlt className="mr-3" />
          Dashboard
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
