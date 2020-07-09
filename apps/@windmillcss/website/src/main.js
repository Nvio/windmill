import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { firestorePlugin } from "vuefire";
import InstantSearch from "vue-instantsearch";

Vue.config.productionTip = false;

Vue.use(firestorePlugin);
Vue.use(InstantSearch);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
