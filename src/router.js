import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login";
import Sobre from "./components/Sobre";
import store from "./store/index";
import UserRegister from "./components/UserRegister";
import UserLivros from "./components/UserLivros"
// import { createRouter, createWebHistory } from "vue-router";

const router =  new VueRouter
({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requireAuth: false },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/sobre",
      name: "sobre",
      component: Sobre,
    },
    {
      path: "/register",
      name: "userRegister",
      component: UserRegister,
    },
    {
      path: "/userLivros",
      name: "userLivros",
      component: UserLivros,
      meta: { requireAuth: true },
    },
  ],
});

router.beforeEach(async (to, from, next) => {

  
    if(to.meta.requireAuth){
        let userProfile = store.getters["account/getUserProfile"];
        if(userProfile.id === 0){
            await store.dispatch("account/userProfile");
            userProfile = store.getters["account/getUserProfile"];
            if(userProfile.id == 0){
                return next({path: "/login"})
            }
        }
    }
    return next()
});

export default router;

