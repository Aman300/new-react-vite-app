// src/api/signup.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export const signup = (formData) => {
  return axios.post(`${API_URL}/signup`, formData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
