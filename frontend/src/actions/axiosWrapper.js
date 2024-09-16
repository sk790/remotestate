import axios from 'axios';

const BASH_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000'; // Or your actual base URL

const api = axios.create({
  baseURL:  BASH_URL,
  withCredentials: true,
});

const handleSuccess = (response) => response;

const handleError = (error) => {
  // Centralized error handling logic
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw error.response.data; 
  } else if (error.request) {
    // The request was made but no response was received
    console.error('API Request Error:', error.request); 
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('API Error:', error.message); 
  }
  // Re-throw to allow specific handling in component calls
  throw error; 
};

api.interceptors.response.use(handleSuccess, handleError);

export default api;
