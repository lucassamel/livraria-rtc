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

</style>
