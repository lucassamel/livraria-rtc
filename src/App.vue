<template>
  <div id="app">
    
    <Header/>   
      
    <b-container fluid>
      <router-view />
    </b-container>
    
    <Botton class="footer"/>
  </div>
</template>

<script>

import Header from './components/Header'
import Botton from './components/Botton'
import { mapGetters} from "vuex"

export default {
  name: 'App',
  components: {
    
    Header, 
    Botton
  },
  computed:{
    ...mapGetters("account",{
      userProfile: "userProfile"
    })
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

.footer {
    position:fixed;
    bottom:0;
    width:100%;
}

</style>
