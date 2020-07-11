import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ShowPackage from "../views/ShowPackage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:owner/:name",
    component: ShowPackage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
