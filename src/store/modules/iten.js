import axios from "axios";

const state = {
  itens: []
    
  };

  const getters = {
    allItens: state => state.itens,
    itenById: (state) => (id) => (state.itens.filter(t => t.id == id))[0],
  };
  
  const actions = {
    fetchItens({ commit }) {
      commit("setItens");
  },
      getItens({ commit }) {
      axios.get(
        "https://5e850ecfa8fdea00164acf6f.mockapi.io/itens"
      ).then((response) => {
        commit('getIten', response.data[0].itens);
      });
    },
  
    addIten({ commit }, new_iten) {
      const new_index = state.itens.length + 1
      const response = {
        "id": new_index,
        "title": new_iten.title,
        "descricao":new_iten.descricao,
        "estoque":new_iten.estoque,
        "src":new_iten.src,
      }
      commit("addIten", response);
    },
    deleteIten({ commit }, id) {
      commit("removeIten", id);
    },
    updateIten({ commit }, updIten) {
      commit("updateIten", updIten);
    },
  };
  const mutations = {
    setItens: (state) => state.itens,
    getIten: (state, iten) => (state.itens = iten),
    addIten: (state, new_iten) => state.itens.push(new_iten),
    updateIten: (state, updIten) => {
      const index = state.itens.findIndex(i => i.id === updIten.id)
      if (index !== -1) {
        state.itens.splice(index, 1, updIten);
        }
      },
      removeIten: (state, id) =>
    (state.itens = state.itens.filter(t => t.id !== id)),

    
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };