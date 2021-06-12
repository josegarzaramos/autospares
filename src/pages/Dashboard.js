import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const renderProducts = async () => {
      let { data } = await axios.get('http://localhost:5000/productos');
      setResults(data);
    };

    renderProducts();
  }, []);

  return (
    <div>
      <Link
        to={{
          pathname: '/',
        }}
      >
        <h1 className="font-bold">Go to index</h1>
      </Link>

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
