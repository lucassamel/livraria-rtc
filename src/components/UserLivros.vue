<template>
  <div class="home" v-if="livros.length > 0">
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
      <!-- <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text> -->
      <b-card-text>Autor: {{ i.autor }} </b-card-text>
    <b-card-text>Gênero: {{ i.genero }} </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
import api from "../config/api";

import {mapGetters, mapMutations} from "vuex"

export default {
  name: "userLivros",
  components: {},
  data() {
    return {
      livros: [],
      usuario: "" ,
    };
  },
  computed: {
    ...mapGetters("account", {
      getUserProfile: "getUserProfile",
      
    }),
  },
  created() {
    this.getLivros();
  },
  methods: {
      ...mapMutations("account", {
      setUserProfile: "setUserProfile",
      
    }),
    getLivros() {
      api
        .get("livros/userLivros/" + this.getUserProfile.usuarioId )
        .then((response) => {
          this.livros = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.home {
  width: 80%;
  margin: auto;
  border: 2px solid #bcbcbc;
  padding: 10px;
}
</style>
