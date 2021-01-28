<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" style="background-color: #db5079">
        <b-navbar-brand href="#">Rotaract Niterói Icaraí</b-navbar-brand>

        <b-navbar-brand href="https://www.facebook.com/rotaracticarai/">
          <b-icon-facebook class="icone"></b-icon-facebook>
        </b-navbar-brand>

        <b-navbar-brand href="https://www.instagram.com/rotaracticarai/">
          <b-icon-instagram class="icone" animation="pulse"> </b-icon-instagram>
        </b-navbar-brand>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "botton",
  methods: {},
};
</script>

<style>
.icone {
  margin: 8px;
  animation: backwards
}
</style>
