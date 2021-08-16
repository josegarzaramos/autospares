import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCategory = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const renderProducts = async () => {
      let { data } = await axios.get(`http://localhost:5000/productos`);
      setFetchedData(data);
    };

    renderProducts();
  }, []);
  return fetchedData;
};

export default useFetchCategory;
