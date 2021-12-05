import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:61303/api/",
});

api.interceptors.request.use((config) => {
  return config;
});

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export default api;
