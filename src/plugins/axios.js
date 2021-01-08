import axios from 'axios';

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_ROOT_API || 'http://localhost:8000',
});

export default api;
