<template>
  <div >
    <h2 class="titulo">Informações do livro</h2>
    <div class="home">
      <div>
        <b-card
          :title="livro.titulo"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <!-- <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text> -->

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
      <b-list-group>
        <b-list-group-item>Titutlo: {{ livro.titulo }}</b-list-group-item>
        <b-list-group-item>Autor: {{ livro.autor }} </b-list-group-item>
        <b-list-group-item>Gênero: {{ livro.genero }}</b-list-group-item>
      </b-list-group>
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
