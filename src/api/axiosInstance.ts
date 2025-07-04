import axios from 'axios';

const api = axios.create({
  baseURL: 'https://injured-crow-davikomura-dfe4d9d8.koyeb.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);

export default api;