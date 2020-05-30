import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false;

Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
