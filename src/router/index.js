import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Erro from "../views/Erro.vue";
import Filme from "../views/Filme.vue";
import MeusFilmes from "../views/MeusFilmes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/filme/:id",
    component: Filme,
    props: true
  },
  {
    path: "/salvos",
    component: MeusFilmes,
  },
  {
    path: "/*",
    component: Erro,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
