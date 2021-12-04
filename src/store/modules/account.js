import axios from "axios";

const state = () => ({
  loginApiStatus: "",
  userProfile:{
    "usuarioId": 0,
    "nome": "",
    "sobrenome": "",
    "email": "teste"
},
logOut: false,
});

const getters = {
  getLoginApiStatus(state) {
    return state.loginApiStatus;
  },
  getUserProfile(state) {
    return state.userProfile;
  },
  getLogOut(state) {
    return state.logOut;
  }
};

const actions = {
  async userLogin({ commit }, payload) {
    const response = await axios
      .post(
        "http://localhost:61303/api/account/login",
        payload,       
        
      )
      .catch((err) => {
        console.log(err);
      });
    if (response && response.data) {
      commit("setloginApiStatus", "success");
      commit("setUserProfile", response.data);
      console.log(response.data);
    } else {
      commit("setloginApiStatus", "failed");
    }
  },
  async userLogOut({ commit }) {
    const response = await axios
      .post(
        "http://localhost:61303/api/account/logout"
      )
      .catch((err) => {
        console.log(err);
      });
      if(response){
        commit("setLogOut", true)
        }
        else{
        commit("setLogOut", false)
        }
  },

  async userProfile({ commit}){
    const response = await axios
      .get(
        "http://localhost:61303/api/account/user",     
      )
      .catch((err) => {
        console.log(err);
      });
      if(response && response.data){
        commit("setUserProfile", response.data);
      }
  }
};

const mutations = {
  setloginApiStatus(state, payload) {
    state.loginApiStatus = payload;
  },
  setUserProfile(state, payload) {
    const userProfile = {
      usuarioId:payload.usuarioId,
      nome: payload.nome,
      sobrenome: payload.sobrenome,
      email: payload.email,
  };
    state.userProfile = userProfile;
},
  setLogOut(state, payload){
    state.logOut = payload;
   }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
