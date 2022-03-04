import axios from 'axios';
import store from '../store';
import { updateUser } from '../store/auth';
import validateToken from './service-helpers';

const instance = axios.create({
  baseURL: 'http://localhost:5070',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getJewelries = async () => {
  try {
    const response = await instance.get('/jewelries');
    return response.data.jewelry;
  } catch (error) {
    throw new Error(error);
  }
};

const getJewelry = async (id) => {
  try {
    const response = await instance.get(`/jewelries/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const addJewelry = async (jewelry) => {
  try {
    const data = new FormData();
    Object.entries(jewelry).forEach(([name, value]) => {
      if (value instanceof Array) {
        value.forEach((el) => {
          data.append(name, el);
        });
      } else {
        data.append(name, value);
      }
    });

    const response = await instance.post('/jewelries', data, {
      header: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateJewelry = async (jewelry) => {
  try {
    const data = new FormData();
    Object.entries(jewelry).forEach(([name, value]) => {
      if (value instanceof Array) {
        value.forEach((el) => {
          data.append(name, el);
        });
      } else {
        data.append(name, value);
      }
    });

    const response = await instance.patch(`/jewelries/${jewelry.id}`, data, {
      header: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteJewelry = async (jewelry) => {
  try {
    const response = await instance.delete(`/jewelries/${jewelry.id}`);
    return response.data.jewelry;
  } catch (error) {
    throw new Error(error);
  }
};

const getStones = async () => {
  try {
    const response = await instance.get('/stones');
    return response.data.stones;
  } catch (error) {
    throw new Error(error);
  }
};

const getMaterials = async () => {
  try {
    const response = await instance.get('/materials');
    return response.data.materials;
  } catch (error) {
    throw new Error(error);
  }
};

const getTypes = async () => {
  try {
    const response = await instance.get('/types');
    return response.data.types;
  } catch (error) {
    throw new Error(error);
  }
};

const getColors = async () => {
  try {
    const response = await instance.get('/colors');
    return response.data.colors;
  } catch (error) {
    throw new Error(error);
  }
};

const addColor = async (color) => {
  try {
    const response = await instance.post('/colors', color);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteColor = async (color) => {
  try {
    const response = await instance.delete(`/colors/${color.id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateColor = async (color) => {
  try {
    const response = await instance.patch(`/colors/${color.id}`, color);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const addType = async (type) => {
  try {
    const response = await instance.post('/types', type);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteType = async (type) => {
  try {
    const response = await instance.delete(`/types/${type.id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateType = async (type) => {
  try {
    const response = await instance.patch(`/types/${type.id}`, type);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const addMaterial = async (material) => {
  try {
    const response = await instance.post('/materials', material);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteMaterial = async (material) => {
  try {
    const response = await instance.delete(`/materials/${material.id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateMaterial = async (material) => {
  try {
    const response = await instance.patch(`/materials/${material.id}`, material);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const addStone = async (stone) => {
  try {
    const response = await instance.post('/stones', stone);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteStone = async (stone) => {
  try {
    const response = await instance.delete(`/stones/${stone.id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateStone = async (stone) => {
  try {
    const response = await instance.patch(`/stones/${stone.id}`, stone);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateUserData = async (user) => {
  const token = validateToken();
  await instance.patch(`/api/users/${user.id}`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  store.dispatch(updateUser({ user: user }));
};

// const checkColor = async (title) => {
//   try {
//     const { data } = await instance.get(`/check-color?color=${title}`);
//     return data.available;
//   } catch (error) {
//     return error.message;
//   }
// };

const API = {
  getJewelries,
  addJewelry,
  deleteJewelry,
  getJewelry,
  updateJewelry,
  getStones,
  getMaterials,
  getTypes,
  getColors,
  deleteColor,
  addColor,
  updateUserData,
  updateColor,
  addType,
  deleteType,
  updateType,
  addMaterial,
  deleteMaterial,
  updateMaterial,
  addStone,
  deleteStone,
  updateStone,
  // checkColor,
};

export default API;
