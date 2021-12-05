<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" style="background-color: #db5079">
        <b-navbar-brand @click="home" href="#"
          >Livrando
          <!-- <img src="" width="54" alt="rotaract" /> -->
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item @click="comoFunciona" href="#" active
              >Como funciona?</b-nav-item
            >
            <b-nav-item @click="sobre" href="#" active>Sobre</b-nav-item>
            <b-nav-item @click="livros" href="#" active>Livros</b-nav-item>
            <b-nav-item @click="doar" href="#" active>Doar</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div>
              <b-nav>
                <b-nav-item
                  @click="login"
                  href="#"
                  v-if="getUserProfile.usuarioId == 0"
                  >Login</b-nav-item
                >
                <b-nav-item
                  @click="register"
                  href="#"
                  v-if="getUserProfile.usuarioId == 0"
                  >Register</b-nav-item
                >
                <b-nav-item v-if="getUserProfile.usuarioId !== 0"
                  >Bem vindo {{ getUserProfile.email }}
                </b-nav-item>
              </b-nav>
            </div>
            <div v-if="getUserProfile.usuarioId !== 0">
              <b-dropdown text="Menu" class="m-md-2" id="dropdown-right" right>
                <b-dropdown-item @click="livros">Meus Livros</b-dropdown-item>
                <b-dropdown-item @click="cadastroLivro">Cadastrar Livro</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item @click="logOut" href="#"
                  >Logout</b-dropdown-item
                >
              </b-dropdown>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "header",
  computed: {
    ...mapGetters("account", {
      getUserProfile: "getUserProfile",
      getLogOut: "getLogOut",
    }),
  },
  created() {
    this.userProfile();
  },
  methods: {
    ...mapActions("account", {
      userLogOut: "userLogOut",
    }),

    ...mapMutations("account", {
      setUserProfile: "setUserProfile",
      setLogOut: "setLogOut",
    }),

    async logOut() {
      await this.userLogOut();
      if (this.setLogOut) {
        const resetUser = {
          usuarioId: 0,
          nome: "",
          sobrenome: "",
          email: "",
        };
        this.setUserProfile(resetUser);
        this.setLogOut(false);
        this.home();
      }
    },

    login() {
      this.$router.push({ name: "login" });
    },
    sobre() {
      this.$router.push({ name: "sobre" });
    },
    register() {
      this.$router.push({ name: "userRegister" });
    },
    home() {
      this.$router.push({ name: "home" });
    },
    comoFunciona() {
      this.$router.push({ name: "home" });
    },
    doar() {
      this.$router.push({ name: "home" });
    },
    livros() {
      this.$router.push({ name: "userLivros" });
    },
    cadastroLivro() {
      this.$router.push({ name: "cadastroLivro" });
    },
  },
};
</script>

<style>
.centro {
  align-items: center;
  margin: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
