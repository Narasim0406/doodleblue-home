// If used in nuxt.js/ssr, you should keep it only in browser build environment
import Vue from 'vue'
if (process.client) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
