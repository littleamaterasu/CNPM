import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; 
  }
};