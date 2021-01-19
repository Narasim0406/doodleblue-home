import Vue from 'vue'

// Import WOW.js
import WOW from 'wow.js'
// new WOW().init();

const wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 60, // default
  mobile: false, // default
  // delay: '2s',       // default
  duration: '0.3s', // default
  live: true // default
})
wow.init()
