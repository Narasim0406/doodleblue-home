// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
// import App from "./App";
// import router from "./router";

// Import Dependency Libraries
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue Resouece
import VueResource from "vue-resource";

Vue.use(VueResource);

// Import My Style
import "./assets/css/style.css";
import "./assets/css/animate.min.css";

//Vue aAnalytics
import VueAnalytics from "vue-analytics";

Vue.use(VueAnalytics, {
  id: "UA-37392759-1",
  checkDuplicatedScript: true
});

// Import WOW.js
import WOW from "wow.js";
// new WOW().init();

const wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 60, // default
  mobile: false, // default
  // delay: '2s',       // default
  duration: "0.3s", // default
  live: true // default
});
wow.init();

// Use Dependency Libraries
Vue.use(BootstrapVue);

// Import Jquery
window.jQuery = window.$ = require("jquery");
jQuery = require("jquery");

// Import Parallax
window.Parallax = require("parallax-js");

import VanillaTilt from "vanilla-tilt";

import VueAwesomeSwiper from "vue-awesome-swiper";
// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

import VueNumber from "vue-number-animation";
Vue.use(VueNumber);

import scrollmagic from "scrollmagic";
Vue.use(scrollmagic);

// Import Config
import { storagePath, apiHost } from "./config/config";

Vue.mixin({
  data: function() {
    return {
      get storagePath() {
        return storagePath;
      },
      get baseUrl() {
        return apiHost;
      },
      storageImageUrl: ""
    };
  },

  computed: {
    // Get Browser Info
    browserInfo() {
      let info = localStorage.getItem("browserInfo");
      return JSON.parse(info);
    }
  },

  created() {},
  methods: {
    // Get img url require
    getImgUrl(pic) {
      return require("@/assets/images/" + pic);
    },

    // Comnpatability chck for footer
    checkFooterCompatability() {
      // Check for cross browser compatability for Footer
      if (
        this.browserInfo.name == "Safari" ||
        this.browserInfo.name == "Firefox"
      ) {
        $(".pageRouter").css({
          position: "relative",
          "box-shadow": "none"
        });
        $(".page_footer_wrapper").css({
          position: "relative",
          "z-index": 1
        });
        $(".responsive_page_footer_wrapper").css({
          position: "relative",
          "z-index": 1,
          "margin-top": 0
        });
        $(".industriesSwiperWrapper").css({
          "margin-bottom": 0
        });
      } else {
        if (window.innerWidth < 760) {
          // Set margin to page router to show footer
          setTimeout(() => {
            console.log(
              "Page footer height",
              $(".responsive_page_footer_wrapper").innerHeight()
            );
            $(".pageRouter").css(
              "margin-bottom",
              $(".responsive_page_footer_wrapper").innerHeight()
            );
          }, 500);
        } else {
          // Set margin to page router to show footer
          setTimeout(() => {
            console.log(
              "Page footer height",
              $(".page_footer_wrapper").innerHeight()
            );
            $(".pageRouter").css(
              "margin-bottom",
              $(".page_footer_wrapper").innerHeight()
            );
          }, 500);
        }
      }
    },

    // generic lottie animation
    initLottieAnimation(elemId, fileName) {
      var storagePath = this.storagePath + "bodymovin/";
      var animData = {
        wrapper: document.getElementById(elemId),
        animType: "html",
        loop: true,
        prerender: true,
        autoplay: true,
        path: storagePath + fileName
      };
      var anim = lottie.loadAnimation(animData);
    },

    initHomeServiceLottieAnimation(elemId, fileName) {
      var storagePath = this.storagePath + "bodymovin/";
      var animData = {
        wrapper: document.getElementById(elemId),
        animType: "html",
        loop: false,
        prerender: true,
        autoplay: true,
        path: storagePath + fileName
      };
      var anim = lottie.loadAnimation(animData);
    }
  }
});

// Import Lottie for animation
window.lottie = require("lottie-web");

Vue.directive("scroll", {
  inserted: function(el, binding) {
    console.log("scroll directive");

    //get the class we gave to the directive,  {animation :'classname'}
    let animationIn = binding.value.animationIn;
    let animationOut = binding.value.animationOut;
    //pixels calculated from top of element when animation should start
    let offsetPixels = 200;
    //run and check position
    let f = function(evt) {
      if (window.screen.width <= 768) {
        // console.log('check viewport', elementIsInViewport(el))

        if (elementIsInViewport(el)) {
          el.classList.add(animationIn);
        } else {
          el.classList.remove(animationIn);
        }
      }
    };
    //add event listener
    window.addEventListener("scroll", f);

    // check if element is in viewport
    function elementIsInViewport(el) {
      return $(el).isInViewport();
    }
  }
});

$.fn.isInViewport = function() {
  var delta = $(this).outerHeight() / 2;
  var elementTop = $(this).offset().top + delta + 50;
  var elementBottom = elementTop + $(this).outerHeight() - delta;

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

/* Menu box overlay class helper */

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function(window) {
  "use strict";

  // class helper functions from bonzo https://github.com/ded/bonzo

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;

  if ("classList" in document.documentElement) {
    hasClass = function(elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function(elem, c) {
      elem.classList.add(c);
    };
    removeClass = function(elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function(elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function(elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + " " + c;
      }
    };
    removeClass = function(elem, c) {
      elem.className = elem.className.replace(classReg(c), " ");
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if (typeof define === "function" && define.amd) {
    // AMD
    define(classie);
  } else {
    // browser global
    window.classie = classie;
  }
})(window);

/* Menu box overlay class helper */

//////////////////////////////////////////////////////////
//////////////// Browser Info /////////////////////////////
//////////////////////////////////////////////////////////
var objappVersion = navigator.appVersion;
var objAgent = navigator.userAgent;
var objbrowserName = navigator.appName;
var objfullVersion = "" + parseFloat(navigator.appVersion);
var objBrMajorVersion = parseInt(navigator.appVersion, 10);
var objOffsetName, objOffsetVersion, ix;
// In Chrome
if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
  objbrowserName = "Chrome";
  objfullVersion = objAgent.substring(objOffsetVersion + 7);
}
// In Microsoft internet explorer
else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
  objbrowserName = "Microsoft Internet Explorer";
  objfullVersion = objAgent.substring(objOffsetVersion + 5);
}
// In Firefox
else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
  objbrowserName = "Firefox";
}
// In Safari
else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
  objbrowserName = "Safari";
  objfullVersion = objAgent.substring(objOffsetVersion + 7);
  if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
    objfullVersion = objAgent.substring(objOffsetVersion + 8);
}
// For other browser "name/version" is at the end of userAgent
else if (
  (objOffsetName = objAgent.lastIndexOf(" ") + 1) <
  (objOffsetVersion = objAgent.lastIndexOf("/"))
) {
  objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
  objfullVersion = objAgent.substring(objOffsetVersion + 1);
  if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
    objbrowserName = navigator.appName;
  }
}
// trimming the fullVersion string at semicolon/space if present
if ((ix = objfullVersion.indexOf(";")) != -1)
  objfullVersion = objfullVersion.substring(0, ix);
if ((ix = objfullVersion.indexOf(" ")) != -1)
  objfullVersion = objfullVersion.substring(0, ix);
objBrMajorVersion = parseInt("" + objfullVersion, 10);
if (isNaN(objBrMajorVersion)) {
  objfullVersion = "" + parseFloat(navigator.appVersion);
  objBrMajorVersion = parseInt(navigator.appVersion, 10);
}
/* console.log('' +'Browser name = '+objbrowserName+'<br>' +'Full version = '+objfullVersion+'<br>' +'Major version = '+objBrMajorVersion+'<br>' +'navigator.appName = '+navigator.appName+'<br>' +'navigator.userAgent = '+navigator.userAgent+'<br>' ) */

var browserInfo = {
  name: objbrowserName,
  fullVersion: objfullVersion,
  majorVersion: objBrMajorVersion,
  navigatorAppName: navigator.appName,
  navigatorUserAgent: navigator.userAgent
};

localStorage.setItem("browserInfo", JSON.stringify(browserInfo));
//////////////////////////////////////////////////////////
//////////////// Browser Info /////////////////////////////
//////////////////////////////////////////////////////////

Vue.config.productionTip = false;

/* eslint-disable */
new Vue({
  el: "#app",
  router,
  // components: { App },
  render: h => h(App)
  // template: '<App/>'
});
