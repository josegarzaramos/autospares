import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BiDollar } from 'react-icons/bi';
import { BiPackage } from 'react-icons/bi';

const Product = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:5000/productos/' + id, {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        const res = await response.json();
        setProduct(res[0]);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="rounded-2xl shadow p-5 m-5">
      <h3 className="font-medium mb-2">{product.marca}</h3>
      <h1 className="font-medium mb-2">{product.nombre}</h1>
      <div className="flex justify-between">
        <div className="inline-flex items-center">
          <BiDollar fill="#3b82f6" />
          <h2 className="font-medium">{product.precio}</h2>
        </div>

        <div className="inline-flex items-center">
          <BiPackage fill="#3b82f6" className="mr-1" />
          <h2 className="font-medium">{product.cantidad}</h2>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
};

export default Product;
