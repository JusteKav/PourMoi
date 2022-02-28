import { useState, useEffect, useMemo } from 'react';
import { createContext } from 'react';
import API from '../services/api-service';

export const JewelryContext = createContext();

export const useProducts = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const fetchedProducts = await API.getJewelries();
    setData(fetchedProducts);
  };

  useEffect(() => {
    getData();
  }, [data.length]);

  const jewelryState = useMemo(() => ({ data, setData, getData }), [data, setData]);
  return jewelryState;
};
