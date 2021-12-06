<template>
  <div>
    <h2 class="titulo">Informações do livro</h2>

    <div class="home">
      <div>
       
        <div>
          <b-img
            src="https://picsum.photos/1024/400/?image=41"
            fluid
            alt="Responsive image"
          ></b-img>
        </div>
        <b-list-group class="">
          <b-list-group-item>Título: {{ livro.titulo }}</b-list-group-item>
          <b-list-group-item>Autor: {{ livro.autor }} </b-list-group-item>
          <b-list-group-item>Gênero: {{ livro.genero }}</b-list-group-item>
          <b-button @click="delLivro(livro.livroId)" href="#" variant="primary"
            >Eu quero esse Livro!</b-button
          >
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../config/api";

export default {
  name: "detalheLivro",
  components: {},
  data() {
    return {
      livro: [],
      livroId: this.$route.params.id,
    };
  },
  created() {
    this.getLivro();
  },
  methods: {
    getLivro() {
      api
        .get("livros/" + this.livroId)
        .then((response) => {
          this.livro = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    delLivro(i) {
      api
        .delete("livros/" + i)
        .then((response) => {
          console.log(response.data);
          this.home();
        })
        .catch((error) => {
          console.log(error);
          
        });
    },
     home() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style>
.titulo {
  text-align: center;
}
.home {
  width: 80%;
  margin: auto;
  border: 2px solid #bcbcbc;
  padding: 10px;
}
</style>
