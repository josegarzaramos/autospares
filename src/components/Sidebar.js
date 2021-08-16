import { FaCog, FaTachometerAlt } from "react-icons/fa";

const Sidebar = () => {
    return (
        <main className="flex bg-gray-100">
            <aside className="bg-blue-500 relative h-screen w-72 md:w-64 hidden sm:block shadow-xl ">
                <div className="p-6">
                    <a href="" className="text-white text-3x1 font-semibold hover:text-gray-300">
                        <FaCog className="mr-3"/>Admin
                    </a>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <a href="" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                        <FaTachometerAlt className="mr-3" />Productos
                    </a>
                    <a href="" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                        <FaTachometerAlt className="mr-3" />Dashboard
                    </a>
                </nav>
            </aside>
        </main>
    );
};

export default Sidebar;