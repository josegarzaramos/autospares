// const menuItems = {
//   refacciones: [
//     {
//       subcategory: 'Baterías, arranque y carga',
//       children: [
//         {
//           subcategory: 'Alternadores y sistema de carga',
//           children: [
//             {
//               subcategory: 'Alternador',
//             },
//             {
//               subcategory: 'Alternador - Escobillas',
//             },
//             {
//               subcategory: 'Balero del Alternador',
//             },
//             {
//               subcategory: 'Diodo de Alternador',
//             },
//             {
//               subcategory: 'Regulador - Voltaje',
//             },
//           ],
//         },
//         {
//           subcategory: 'Baterías',
//           children: [
//             {
//               subcategory: 'Accesorios para caja de camionetas',
//             },
//             {
//               subcategory: 'Amarres y correas para remolque',
//             },
//             {
//               subcategory: 'Balero del Alternador',
//             },
//             {
//               subcategory: 'Diodo de Alternador',
//             },
//             {
//               subcategory: 'Regulador - Voltaje',
//             },
//           ]
//         },
//         {
//           subcategory: 'Cables de batería y accesorios',
//         },
//         {
//           subcategory: 'Cubierta para Bateria',
//         },
//         {
//           subcategory: 'Interruptores, relevadores y sensores',
//         },
//         {
//           subcategory: 'Marcha y sistema de arranque',
//         },
//       ],
//     },
//   ],
// };

const Menu = () => {
  return (
    <div onClick={(ev) => (ev.target.id ? console.log(ev.target.id) : null)}>
      <ul>
        <li>
          <div>
            <h1 id="Refacciones">Refacciones</h1>
          </div>
        </li>
        <li>
          <div>
            <h1 id="Interiores">Interiores</h1>
          </div>
        </li>
        <li>
          <div>
            <h1>Exteriores</h1>
          </div>
        </li>
        <li>
          <div>
            <h1>Remolque</h1>
          </div>
        </li>
        <li>
          <div>
            <h1>Herramientas</h1>
          </div>
        </li>
        <li>
          <div>
            <h1>Químicos, Aceites y Prods. de Lavado</h1>
          </div>
        </li>
        <li>
          <div>
            <h1>Alto Desempeño</h1>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
