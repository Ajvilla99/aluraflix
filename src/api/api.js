import axios from 'axios';

const apiUrl = 'https://json-alura-flix.vercel.app/categories';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error al cargar categorías:', error);
    throw error;
  }
};