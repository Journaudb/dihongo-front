import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
