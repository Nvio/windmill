import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import VueClipboard from "vue-clipboard2";
import "./assets/tailwind.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFile);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.use(VueClipboard);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
