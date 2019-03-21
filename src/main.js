import Vue from "vue";
import StarRating from "vue-star-rating";
import App from "./App.vue";

//Vue.use(require('vue-resource'));
Vue.component("star-rating", StarRating);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
