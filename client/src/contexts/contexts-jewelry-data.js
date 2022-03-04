import { useState, useEffect, useMemo } from 'react';
import { createContext } from 'react';
import API from '../services/api-service';

export const JewelryContext = createContext();

export const useProducts = () => {
  const [state, setState] = useState({
    data: [],
    colors: [],
    materials: [],
    types: [],
    stones: [],
  });

  const { data, colors, materials, stones, types } = state;

  const getData = async () => {
    const [fetchedProducts, fetchedColors, fetcheMaterials, fetchedTypes, fetchedStones] = await Promise.all([
      API.getJewelries(),
      API.getColors(),
      API.getMaterials(),
      API.getTypes(),
      API.getStones(),
    ]);
    setState({
      data: fetchedProducts.reverse(),
      colors: fetchedColors,
      materials: fetcheMaterials,
      types: fetchedTypes,
      stones: fetchedStones,
    });
  };

  useEffect(() => {
    getData();
  }, [data.length, colors.length, materials.length, stones.length, types.length, setState]);
  const jewelryState = useMemo(
    () => ({ data, colors, materials, types, stones, getData }),
    [data, colors, materials, types, stones]
  );
  return jewelryState;
};
