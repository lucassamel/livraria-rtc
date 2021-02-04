<template>
  <div >
    <div >
      <b-navbar toggleable="lg" type="dark"  style="background-color: #db5079" >
        <b-navbar-brand @click="home" href="#">Livrando 
          <img src="" width="54" alt="rotaract">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item @click="comoFunciona" href="#" active>Como funciona?</b-nav-item>
            <b-nav-item @click="sobre" href="#" active>Sobre</b-nav-item>            
            <b-nav-item @click="livros" href="#" active>Livros</b-nav-item>
            <b-nav-item @click="doar" href="#" active>Doar</b-nav-item>
            <b-nav-item @click="faq" href="#" active>FAQ</b-nav-item>
            <b-nav-item @click="contato" href="#" active>Contato</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">            

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item @click="login" href="#">Login</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  methods: {
      login(){
          this.$router.push({name:"login"})
      },
      sobre(){
          this.$router.push({name:"sobre"})
      },
      home(){
          this.$router.push({name:"home"})
      }
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
