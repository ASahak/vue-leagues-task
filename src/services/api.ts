import axios from 'axios';

const API_BASE = 'https://www.thesportsdb.com/api/v1/json/3';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Global Interceptors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors here (e.g., Toast notifications)
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
