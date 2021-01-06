import axios from 'axios';

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_ROOT_API || 'localhost:8000',
});
api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.common['Content-Type'] = 'Application/json';

export default api;
