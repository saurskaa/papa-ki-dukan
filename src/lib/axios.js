import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
//   withCredentials: true, // includes cookies in requests (important for Spring Security)
});

export default api;
