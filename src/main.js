import Vue from "vue";
import App from "./App";
import router from "./router";
import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
  id: 'UA-146783550-1'
})
Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
