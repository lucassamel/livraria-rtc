<template>
  <div class="login">
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email :"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
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

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
// import axios from "axios";
// import api from "../config/api";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      token: "",
      show: true,
    };
  },
  // async created() {
  //   const login = { email: this.form.email, password: this.form.password };
  //   const response = await api.post("axount/login", login);
  //   this.token = response.data;
  // },
  computed: {
    ...mapGetters("account", { getLoginApiStatus: "getLoginApiStatus" }),
  },
  ...mapMutations("account", {
      setUserProfile: "setUserProfile",
      
    }),
  methods: {
    ...mapActions("account", {
      userLogin: "userLogin",
    }),
    async login() {
      const payload = this.form;

      await this.userLogin(payload);
      if (this.getLoginApiStatus == "success") {
        // let userProfile = {
        //   usuarioId: 0,
        //   nome: response.nome,
        //   sobrenome: payload.sobrenome,
        //   email: payload.email,
        // };
        // this.userProfile = userProfile
        this.home();

      } else {
        alert("error");
      }
    },
    onSubmit() {
      this.login();
    },
    // async login() {

    //   // const login = { email: this.form.email, password: this.form.password };
    //   // const response = await api.post("account/login", login);
    //   // this.token = response.data;

    //   await api
    //     .post(
    //       "account/login",
    //       this.form,
    //       {withCredentials: true}
    //     )
    //     .then((response) => {
    //       console.log("Usuario Logado");
    //       console.log(response.data);
    //       // localStorage.setItem("jwtToken", response.data.token);
    //       this.home();
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    home() {
      this.$router.push({ name: "home" });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "alunos@vue.com";
      this.form.password = "12345";
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
