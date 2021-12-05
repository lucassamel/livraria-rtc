<template>
  <div class="login">
    <h2 class="titulo">Cadastro de Livro</h2>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Titulo :" label-for="input-1">
        <b-form-input
          id="email"
          v-model="form.titulo"
          type="text"
          placeholder="Titulo do livro"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Autor :" label-for="input-2">
        <b-form-input
          id="nome"
          v-model="form.autor"
          placeholder="Nome"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Genero :" label-for="input-2">
        <b-form-input
          id="genero"
          
          v-model="form.genero"
          placeholder="Genero do livro"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Cadastrar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import api from "../config/api";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "cadastroLivro",
  components: {},
  data() {
    return {
      form: {
        titulo: "",
        autor: "",
        isnb: 0,
        genero: "",
        paginas: 100,
        usuarioId: 0,
      },
      show: true,
      //   usuarioId: this.getUserProfile.usuarioId
    };
  },
  computed: {
    ...mapGetters("account", {
      getUserProfile: "getUserProfile",
    }),
  },

  methods: {
    ...mapMutations("account", {
      setUserProfile: "setUserProfile",
    }),
    async register() {
      this.form.usuarioId = this.getUserProfile.usuarioId;
      const payload = this.form;

      await api
        .post("livros", payload)
        .then((response) => {
          console.log(response);
          this.livros();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onSubmit() {
      this.register();
    },

    livros() {
      this.$router.push({ name: "userLivros" });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      (this.form.titulo = "Teste"),
        (this.form.autor = "Galvao"),
        (this.form.genero = "Futebol"),
        (this.form.isnb = "123"),
        (this.form.paginas = 100),
        this.$nextTick(() => {
          this.show = true;
        });
    },
  },
};
</script>

<style>
.login {
  width: 50%;
  margin: auto;
  border: 2px solid #bcbcbc;
  padding: 10px;
  margin-top: 1%;
}
</style>
