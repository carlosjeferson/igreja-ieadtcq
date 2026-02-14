import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Porta que definimos no server.ts
});

// Interceptor para enviar o token JWT automaticamente em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@ADTC:token');
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;