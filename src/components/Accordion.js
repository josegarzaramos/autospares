import { useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

const Accordion = ({ items }) => {
  const [open, setOpen] = useState();
  const [products, setProducts] = useState();

  const rendererItems = items.map((item, index) => {
    const active = index === open ? 'block' : 'hidden';

    const getProducts = async function () {
      try {
        const { data } = await axios.get('http://localhost:5000/productos');
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div key={item.value} onClick={() => setOpen(index)}>
        <h3 className="font-medium">{item.name}</h3>
        <li className={`px-2 ${active}`} onClick={() => getProducts()}>
          {item.name}
        </li>
        {products
          ? products.map((product) => (
              <p className="p-4" key={product.SKU}>
                {product.nombre}
              </p>
            ))
          : null}
      </div>
    );
  });

  return <ul className="p-4 w-4/5">{rendererItems}</ul>;
};

Accordion.propTypes = {
  items: PropTypes.array,
};

export default Accordion;
