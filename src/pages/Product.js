import PropTypes from 'prop-types';
import { BiDollar } from 'react-icons/bi';
import { BiPackage } from 'react-icons/bi';

const Product = ({ name, price, stock }) => {
  return (
    <div className="rounded-2xl shadow p-5 m-5">
      <h1 className="font-medium mb-2">{name}</h1>
      <div className="flex justify-between">
        <div className="inline-flex items-center">
          <BiDollar fill="#3b82f6" />
          <h2 className="font-medium">{price}</h2>
        </div>

        <div className="inline-flex items-center">
          <BiPackage fill="#3b82f6" className="mr-1" />
          <h2 className="font-medium">{stock}</h2>
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
