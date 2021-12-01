import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:61303/api/",
});

// api.interceptors.request.use(
//  (config) => {
//    config.headers.Authorization = `Bearer ${token}`;

//    return config;
//  },
//  (error) => {
//    return Promise.reject(error);
//  }
// );
// api.interceptors.request.use((config) => {
//   console.log("Interceptando requisicao", config);
//   config.data = {
//     ...config.data,
//     teste: "Teste",
//   };
//   return config;
// });

// Adiciona um interceptador na requisição
api.interceptors.request.use(
  function(config) {
    // Faz alguma coisa antes da requisição ser enviada
    console.log("Interceptando requisicao", config);

    config.headers.post["Authorization"] = "token_jwt";

    return config;
  },
  function(error) {
    // Faz alguma coisa com o erro da requisição
    return Promise.reject(error);
  }
);

// Adiciona um interceptador na resposta
api.interceptors.response.use(
  function(response) {
    // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
    // Faz alguma coisa com os dados de resposta
    return response;
  },
  function(error) {
    // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
    // Faz alguma coisa com o erro da resposta
    return Promise.reject(error);
  }
);

export default api;
