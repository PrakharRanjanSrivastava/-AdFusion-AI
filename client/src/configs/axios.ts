import axios from 'axios';

const api = axios.create({
    // Vite uses import.meta.env instead of process.env
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
    withCredentials: true // Add this if you enabled credentials in CORS
});

export default api;