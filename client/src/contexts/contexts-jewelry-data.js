import { useState, useEffect, useMemo } from 'react';
import { createContext } from 'react';
import API from '../services/api-service';

export const JewelryContext = createContext();

export const useProducts = () => {
  const [data, setData] = useState([]);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [types, setTypes] = useState([]);
  const [stones, setStones] = useState([]);

  const getData = async () => {
    const fetchedProducts = await API.getJewelries();
    const fetchedColors = await API.getColors();
    const fetcheMaterials = await API.getMaterials();
    const fetchedStones = await API.getStones();
    const fetchedTypes = await API.getTypes();
    setData(fetchedProducts);
    setColors(fetchedColors.colors);
    setMaterials(fetcheMaterials);
    setTypes(fetchedTypes);
    setStones(fetchedStones);
  };

  useEffect(() => {
    getData();
  }, [data.length]);

  const jewelryState = useMemo(
    () => ({ data, setData, getData, colors, materials, types, stones }),
    [data, setData, colors, materials, types, stones]
  );
  return jewelryState;
};
