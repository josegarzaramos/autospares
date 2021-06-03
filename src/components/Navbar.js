import { BiCar } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="p-4 border-b border-gray-200">
      <BiCar
        size="1.5em"
        className="inline-block mr-2 fill-current text-blue-600"
      />
      <h1 className="inline-block font-bold align-middle">Logo</h1>
    </div>
  );
};

export default Navbar;
