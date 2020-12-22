import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import Login from './components/Login'
import Sobre from './components/Sobre'



export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        } ,
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/sobre',
            name: 'sobre',
            component: Sobre
        }
      
    ]
});