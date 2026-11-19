import axios from 'axios';
// Create a reusable Axios instance for TheMealDB API
const API = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  timeout: 15000,
  headers: {
    Accept: 'application/json',
  },
});
// Export API instance to use in components and custom hooks
export default API;
