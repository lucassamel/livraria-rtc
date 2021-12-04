import Vue from 'vue'
import App from './App.vue'

import router from './router';
import VueRouter from 'vue-router'

import store from "./store/index";

import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import axios from 'axios'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

Vue.use(VueRouter)

Vue.config.productionTip = true

// Vue.prototype.$axios = axios

new Vue({
  store,
  render: h => h(App),
  router: router,
}).$mount('#app')
