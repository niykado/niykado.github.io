// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
baseURL: 'http://localhost:3001',
  withCredentials: true, 
});
// baseURL: 'https://testprojectforfar.onrender.com',
export default axiosInstance;
