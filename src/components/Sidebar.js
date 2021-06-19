import { useState } from 'react';
import useFetchCategory from '../hooks/useFetch-hook';
// import Accordion from './Accordion';
// import Menu from './Menu';
import { BiMenu } from 'react-icons/bi';
import './Sidebar.css';

// const items = [
//   {
//     name: 'Refacciones',
//     value: 'Refacciones',
//     childItems: [
//       {
//         nombre: 'Químicos, Aceites y Prods. de Lavado',
//         childItems: [
//           {
//             nombre: 'Alternadores y sistema de carga',
//           },
//           {
//             nombre: 'Baterías',
//           },
//           {
//             nombre: 'Cables de bateria y accesorios',
//           },
//           {
//             nombre: 'Cables de bateria y accesorios',
//           },
//           {
//             nombre: 'Cubiertas de batería',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Interiores',
//     value: 'Interiores',
//   },
//   {
//     name: 'Exteriores',
//     value: 'Exteriores',
//   },
// ];
const Sidebar = () => {
  // const [openLink, setOpenLink] = useState()
  const [toggleMenu, setToggleMenu] = useState(false);

  const { children } = useFetchCategory('menu');
  console.log(children);

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };

  // const displayMenu = results.map((result) => console.log(result));

  return (
    <>
      <BiMenu size="2em" className="m-2" onClick={() => handleMenuClick()} />
      <div
        id="sidebar-links"
        className={`sidebar absolute bg-blue-600 text-white menu${
          toggleMenu ? ' open' : ''
        }`}
      >
        {/* <ul className="p-4 w-4/5">
        <li className="px-1 py-2">Refacciones</li>
        <li className="px-1 py-2">Interiores</li>
        <li className="px-1 py-2">Exteriores</li>
        <li className="px-1 py-2">Remolque</li>
        <li className="px-1 py-2">Herramientas</li>
        <li className="px-1 py-2">Químicos, Aceites y Productos de Lavado</li>
        <li className="px-1 py-2">Alto Desempeño</li>
      </ul> */}
        {/* <Accordion items={items} /> */}

        {children &&
          children.map((item) => (
            <div key={item.category} className="p-4 w-4/5">
              {item.category}
            </div>
          ))}

        {/* <Menu /> */}
      </div>
    </>
  );
};

export default Sidebar;
