// src/api/login.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export const login = (formData) => {
  return axios.post(`${API_URL}/login`, formData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
