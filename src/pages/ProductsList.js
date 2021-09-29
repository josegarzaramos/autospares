/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable react/no-unescaped-entities */
// import Product from './Product';
import { useEffect } from 'react';
import './ProductList.css';

// const ProductsList = () => {
//   return (
//     <div classNameName="flex items-start place-content-start flex-wrap">
//       {products.map((producto) => (
//         <Product key={producto.name} name={producto.name} price={producto.price} stock={producto.stock} />
//       ))}
//     </div>
//   );
// };

let products = [
  {
    brand: 'Quaker',
    name: 'Paquete de bujias 4 piezas',
    price: 98.44,
    stock: 10,
  },
  { brand: 'Bardahl', name: 'Anticongelante', price: 60.5, stock: 23 },
  {
    brand: 'LTH',
    name: 'Batería para carro',
    price: 390.54,
    stock: 30,
  },
  {
    brand: 'Meguiar',
    name: 'Protector Supreme Shine de 16oz',
    price: 78.24,
    stock: 15,
  },
  {
    brand: 'HELIX',
    name: 'HX8 Aceite para motor Sintetico 5W-30 4 Litros',
    price: 1215.53,
    stock: 43,
  },
  {
    brand: 'Castrol',
    name: 'Castrol Synthetic Aceite de Motor 1598B1',
    price: 1450.04,
    stock: 12,
  },
  {
    brand: 'Mobil',
    name: 'Sintetico 5W-30 Aceite de Motor 1 Cuarto',
    price: 269.02,
    stock: 25,
  },
];

// const testReturn = () => {

//   return products.map((product, i) => {
//     return (
//       <tr className="table__row" key={i}>
//         <div>test</div>
//       </tr>
//     );
//   });
// };

const showProducts = (products) => {
  // eslint-disable-next-line no-debugger
  // debugger;
  return products.map((product) => {
    return (
      <tr className="table__row" key={product.name}>
        <td className="table__account table__cell">
          <a
            href="#"
            className="table__account-content table__link table__link"
          >
            <span className="table__account-number">{product.brand}</span>{' '}
          </a>
        </td>
        <td className="table__balance table__cell u-text-right u-font-mono">
          <span className="num_negative">{product.name}</span>
        </td>
        <td className="table__limit table__cell u-text-right u-font-mono">
          ${product.price}
        </td>
        <td className="table__available table__cell u-text-right u-font-mono">
          {product.stock}
        </td>
        <td className="table__transfer table__cell u-text-center">
          <a className="btn" href="">
            Transfer
          </a>
        </td>
      </tr>
    );
  });
};

const ProductsList = () => {
  // useEffect(() => {
  //   <div className="table-wrap w-screen">
  //     <table className="table table w-11/12 md:w-5/6">
  //       <thead className="table__header">
  //         <tr className="table__row">
  //           <th className="table__cell u-text-left w-2/12">Marca</th>
  //           <th className="table__cell u-text-right w-2/auto">Nombre</th>
  //           <th className="table__cell u-text-right w-2/12">Precio</th>
  //           <th className="table__cell u-text-right w-2/12">Cantidad</th>
  //           <th className="w-2/12"></th>
  //         </tr>
  //       </thead>
  //       {showProducts(products)}
  //       <tfoot>
  //         <tr className="table__row table__row--last">
  //           <td className="table__cell" align="right">
  //             Total (<acronym title="US Dollars">USD</acronym>):
  //           </td>
  //           <td className="table__balance table__cell u-text-right u-font-mono">
  //             900.000
  //           </td>
  //           <td className="table__limit table__cell u-text-right u-font-mono">
  //             500.000
  //           </td>
  //           <td className="table__available table__available--total table__cell u-text-right u-font-mono">
  //             1.400.000
  //           </td>
  //           <td></td>
  //         </tr>
  //       </tfoot>
  //     </table>
  //   </div>;
  // }, []);

  return (
    // <div className="flex items-start place-content-start flex-wrap w-full p-10">
    //   <table className="table-auto w-full font-medium">
    //     <thead>
    //       <tr>
    //         <th className="w-1/4">Marca</th>
    //         <th className="w-2/4">Nombre</th>
    //         <th className="w-1/4">Precio</th>
    //         <th className="w-auto">Cantidad</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>Quaker</td>
    //         <td>Aceite para motor</td>
    //         <td>$125.12</td>
    //         <td>23</td>
    //       </tr>
    //       <tr>
    //         <td>Quaker</td>
    //         <td>Aceite para motor</td>
    //         <td>$125.12</td>
    //         <td>23</td>
    //       </tr>
    //       <tr>
    //         <td>Quaker</td>
    //         <td>Aceite para motor</td>
    //         <td>$125.12</td>
    //         <td>23</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    // <table className="table-auto block">
    //   <thead>
    //     <tr>
    //       <th>Title</th>
    //       <th>Author</th>
    //       <th>Views</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>Intro to CSS</td>
    //       <td>Adam</td>
    //       <td>858</td>
    //     </tr>
    //     <tr className="bg-emerald-200">
    //       <td>
    //         A Long and Winding Tour of the History of UI Frameworks and Tools
    //         and the Impact on Design
    //       </td>
    //       <td>Adam</td>
    //       <td>112</td>
    //     </tr>
    //     <tr>
    //       <td>Intro to JavaScript</td>
    //       <td>Chris</td>
    //       <td>1,280</td>
    //     </tr>
    //   </tbody>
    // </table>
    <div className="table-wrap w-screen">
      <table className="table table w-11/12 md:w-5/6">
        <thead className="table__header">
          <tr className="table__row">
            <th className="table__cell u-text-left w-2/12">Marca</th>
            <th className="table__cell u-text-right w-2/auto">Nombre</th>
            <th className="table__cell u-text-right w-2/12">Precio</th>
            <th className="table__cell u-text-right w-2/12">Cantidad</th>
            <th className="w-2/12"></th>
          </tr>
        </thead>
        {/* <tbody> */}
        {/* <tr className="table__row">
            <td className="table__account table__cell">
              <a href="#" className="table__account-content table__link">
                <span className="table__account-number">1110-26-000487</span>{' '}
                <span className="table__account-name">Savings</span>
              </a>
            </td>
            <td className="table__balance table__cell u-text-right u-font-mono">
              <span className="num_negative"> 1.000.000 </span>
            </td>
            <td className="table__limit table__cell u-text-right u-font-mono">
              0
            </td>
            <td className="table__available table__cell u-text-right u-font-mono">
              1.000.000
            </td>
            <td className="table__transfer table__cell u-text-center">
              <a className="btn" href="">
                Transfer
              </a>
            </td>
          </tr> */}
        {/* {testReturn()} */}
        {showProducts(products)}
        {/* </tbody> */}

        <tfoot>
          <tr className="table__row table__row--last">
            <td className="table__cell" align="right">
              Total (<acronym title="US Dollars">USD</acronym>):
            </td>
            <td className="table__balance table__cell u-text-right u-font-mono">
              900.000
            </td>
            <td className="table__limit table__cell u-text-right u-font-mono">
              500.000
            </td>
            <td className="table__available table__available--total table__cell u-text-right u-font-mono">
              1.400.000
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductsList;
