import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import vuex_store from "./vuex/index.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store: new Vuex.Store(vuex_store),
  render: h => h(App)
}).$mount("#app");
