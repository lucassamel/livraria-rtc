<template>
  <div class="login">
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Email :" label-for="input-1">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nome :" label-for="input-2">
        <b-form-input
          id="nome"
          v-model="form.nome"
          placeholder="Nome"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Sobrenome :" label-for="input-2">
        <b-form-input
          id="sobrenome"
          v-model="form.sobrenome"
          placeholder="Sobrenome"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Senha :" label-for="input-2">
        <b-form-input
          id="password"
          v-model="form.password"
          placeholder="Senha"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Confirme a Senha :"
        label-for="input-2"
      >
        <b-form-input
          id="confirmPassword"
          v-model="form.confirmPassword"
          placeholder="Confirme a senha"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Registrar-se</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import api from "../config/api";

export default {
  name: "userRegister",
  data() {
    return {
      form: {
        email: "",
        nome: "",
        sobrenome: "",
        password: "",
        confirmPassword: "",
      },
      show: true,
    };
  },

  methods: {
    async register() {
      const payload = this.form;

      await api.post("account/register", payload)
      .then((response) => {
          console.log(response)
          this.login()
      }).catch((error) => {
          console.log(error)
      })
    },
    onSubmit() {
      this.register();
    },

    login() {
      this.$router.push({ name: "login" });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      (this.form.email = ""),
        (this.form.nome = ""),
        (this.form.sobrenome = ""),
        (this.form.password = ""),
        (this.form.confirmPassword = ""),
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
