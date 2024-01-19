import axios from 'axios';

export const getUserById = async (url, userId) => {
  try {
    const response = await axios.get(`${url}/${userId}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error('User not found:', error);
      return null;
    } else {
      console.error('Error fetching user data:', error);
      throw error;
    }
  }
};

export const updateUserById = async (url, userId, updatedUserData) => {
  try {

    const response = await axios.put(`${url}/${userId}`, updatedUserData);

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.error('Validation errors:', error.response.data);
    } else {
      console.error('Error updating user data:', error);
    }
    throw error;
  }
};

