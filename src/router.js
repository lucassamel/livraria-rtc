import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import Login from './components/Login'



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
        }
      
    ]
});