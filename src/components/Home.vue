<template>
  <div class="home">
    <br />
    <div class="cards" v-if="livros.length > 0">
      <b-card
        v-for="i in livros"
        :key="i.id"
        :title="i.titulo"
        img-src="https://veja.abril.com.br/wp-content/uploads/2017/08/cultura-livros-20141109-003.jpg"
        :id="i.id"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text> {{ i.genero }} </b-card-text>
        
       
        <b-button size="sm" class="mb-2" variant="danger">
          <b-icon @click="deleteIten(i.id)" icon="trash"></b-icon>
        </b-button>
        <router-link
          tag="a"
          :to="{ name: 'DetalheIten', params: { id: i.id } }"
        >
          <b-button class="margemBotao" size="sm" variant="success"
            >Detalhe do Item</b-button
          >
        </router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
//import config from "../config/config";
// import axios from "axios";

import api from "../config/api";
/*import { mapGetters, mapActions } from "vuex";
 */

export default {
  name: "home",
  components: {},
  data() {
    return {
      livros: [
        
      ]
    };
  },
  created() {
    this.getLivros();
  },
  methods: {
    getLivros() {
      api.get("livros").then((response) => {
        this.livros = response.data;
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      })
      
    },
    

  //   deleteIten(i) {
  //   axios.delete("http://localhost:61303/api/livros/" + i.id).then((response) => {
  //     console.log(response.data);
  //   }).catch((response) => {
  //     console.log(response);
  //   })
  // }
  },
  
};
</script>

<style>
.cards {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.margemBotao {
  margin: 5px;
  float: right;
}

#estoque {
  color: red;
}

#disponivel {
  color: green;
}

.home{
  width: 80%;
  margin: auto;  
  border: 2px solid #bcbcbc;
  padding: 10px;
}
</style>
