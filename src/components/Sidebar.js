// import {useState} from 'react';
// import Accordion from './Accordion';
import Menu from './Menu';

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

  return (
    <div id="sidebar-links">
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

      <Menu />
    </div>
  );
};

export default Sidebar;
