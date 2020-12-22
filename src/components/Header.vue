<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" class="cor-Rotaract">
        <b-navbar-brand @click="home" href="#">Livraria Rotaract Niterói Icaraí</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item @click="sobre" href="#">Sobre nós</b-nav-item>
            <b-nav-item @click="vazio" href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">            

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item @click="login" href="#">Profile</b-dropdown-item>
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

.cor-Rotarct{
    color: #BB4A4D;
}
</style>
