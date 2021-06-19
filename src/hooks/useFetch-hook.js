import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCategory = (query) => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const renderProducts = async () => {
      let { data } = await axios.get(`http://localhost:5000/${query}`);
      setFetchedData(data);
    };

    renderProducts();
  }, []);
  return fetchedData;
};

export default useFetchCategory;
