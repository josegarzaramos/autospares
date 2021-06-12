// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import useFetchCategory from '../hooks/useFetch-hook';

const Dashboard = () => {
  const results = useFetchCategory('categorias');

  return (
    <div>
      <Link
        to={{
          pathname: '/',
        }}
      >
        <h1 className="font-bold">Go to index</h1>
      </Link>

      {/* <p className="p-4">Productos encontrados: {results.length}</p> */}
      {results.map((result) => {
        return (
          <div key={result.nombre} className="p-4">
            <p>{result.nombre}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
