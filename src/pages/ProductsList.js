/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable react/no-unescaped-entities */
// import Product from './Product';
import { useState, useEffect } from 'react';
import useFetchCategory from '../hooks/useFetch-hook';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
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
    id: '61554eb4f8448331243eb01f',
  },
  {
    brand: 'Bardahl',
    name: 'Anticongelante',
    price: 60.5,
    stock: 23,
    id: '418748744',
  },
  {
    brand: 'LTH',
    name: 'Batería para carro',
    price: 390.54,
    stock: 30,
    id: '414',
  },
  {
    brand: 'Meguiar',
    name: 'Protector Supreme Shine de 16oz',
    price: 78.24,
    stock: 15,
    id: '01',
  },
  {
    brand: 'HELIX',
    name: 'HX8 Aceite para motor Sintetico 5W-30 4 Litros',
    price: 1215.53,
    stock: 43,
    id: '44',
  },
  {
    brand: 'Castrol',
    name: 'Castrol Synthetic Aceite de Motor 1598B1',
    price: 1450.04,
    stock: 12,
    id: '22',
  },
  {
    brand: 'Mobil',
    name: 'Sintetico 5W-30 Aceite de Motor 1 Cuarto',
    price: 269.02,
    stock: 25,
    id: '95',
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
      <tr
        className="table__row"
        key={product.name}
        data-href="http://www.google.com"
      >
        <Link
          to={'productos/' + product._id}
          className="table__account-content table__link table__link contents"
        >
          <td className="table__account table__cell">
            <span className="table__account-number">{product.marca}</span>{' '}
          </td>
          <td className="table__balance table__cell u-font-mono">
            <span className="num_negative">{product.nombre}</span>
          </td>
          <td className="table__limit table__cell u-font-mono">
            ${product.precio}
          </td>
          <td className="table__available table__cell u-font-mono text-center">
            {product.cantidad}
          </td>
          {/* <td className="table__transfer table__cell u-text-center">
          <a className="btn" href="">
            Transfer
          </a>
        </td> */}
        </Link>
      </tr>
    );
  });
};

const ProductsList = () => {
  const fetchedData = useFetchCategory('productos');

  return (
    <div className="table-wrap w-screen">
      <table className="table table w-11/12 md:w-5/6">
        <thead className="table__header">
          <tr className="table__row">
            <th className="table__cell u-text-left w-2/12">
              <div className="inline-flex">
                <p className="self-center">Marca</p>
                <BiChevronDown className="self-center" size="2em" />
              </div>
            </th>
            <th className="table__cell w-2/auto">
              <div className="inline-flex">
                <p className="self-center">Nombre</p>
                <BiChevronDown className="self-center" size="2em" />
              </div>
            </th>
            <th className="table__cell w-2/12">
              <div className="inline-flex">
                <p className="self-center">Precio</p>
                <BiChevronDown className="self-center" size="2em" />
              </div>
            </th>
            <th className="table__cell text-center w-2/12 ">
              <div className="inline-flex">
                <p className="self-center">Cantidad</p>
                <BiChevronDown className="self-center" size="2em" />
              </div>
            </th>
            {/* <th className="w-2/12"></th> */}
          </tr>
        </thead>
        <tbody>
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
          {showProducts(fetchedData)}
        </tbody>

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
