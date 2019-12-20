import Vue from "vue"
import StarRating from "vue-star-rating"
import App from "./App.vue"
import router from './router'


Vue.component("star-rating", StarRating);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
