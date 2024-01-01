import axios from 'axios';

export const getUserById = async (url, userId) => {
  try {
    const response = await axios.get(`${url}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; 
  }
};