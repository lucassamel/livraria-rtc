<template>
  <div id="app">
    
      <Header/>   
      
    <b-container fluid>
      <router-view />
    </b-container>
    <br>
    <Botton/>
  </div>
</template>

<script>

import Header from './components/Header'
import Botton from './components/Botton'

export default {
  name: 'App',
  components: {
    
    Header, 
    Botton
  }
}
</script>

<style>
.barra {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

</style>
