import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080`,
});

api.interceptors.request.use(
  async (config) => {
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

    config.headers.Authorization = ACCESS_TOKEN ;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
