import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.component('Loading', Loading);
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//filters
import currency from './filters/currency'
import date from './filters/date'
Vue.filter('currency', currency);
Vue.filter('date', date);
// 表單驗證
import './vee-validate';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // ValidationProvider,
  render: h => h(App)
}).$mount('#app')
