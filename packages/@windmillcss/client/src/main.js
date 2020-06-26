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
import VueSocketIO from 'vue-socket.io'
import SocketIO from "socket.io-client"

Vue.config.productionTip = false;

Vue.use(VueClipboard);

Vue.use(new VueSocketIO({
  debug: false,
  connection: SocketIO('http://localhost:9991'), //options object is Optional
})
);

library.add(faFile);
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
