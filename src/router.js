import VueRouter from 'vue-router';
import Home from './components/Home.vue'



export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        } 
      
    ]
});