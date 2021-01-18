exports.ids = [1];
exports.modules = {

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2842220d", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.c81f966.png";

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home-page-logo.d6be19d.gif";

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBanner_vue_vue_type_style_index_0_id_64a9fbfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBanner_vue_vue_type_style_index_0_id_64a9fbfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBanner_vue_vue_type_style_index_0_id_64a9fbfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBanner_vue_vue_type_style_index_0_id_64a9fbfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeBanner_vue_vue_type_style_index_0_id_64a9fbfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".homePageBanner[data-v-64a9fbfa]{position:relative;-webkit-animation:bg-scrolling-reverse 3s infinite;animation:bg-scrolling-reverse 3s infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;margin-bottom:1rem}.scrollDownIndicator[data-v-64a9fbfa]{text-align:center;position:absolute;bottom:-10px;left:0;right:0;margin:auto;z-index:1}.scrollDownIndicator img[data-v-64a9fbfa]{opacity:.4!important}@media (min-width:1920px){.h-100.container[data-v-64a9fbfa]{transform:scale(1.3)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=84fe97fc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('HomeBanner'),_vm._ssrNode(" "),_c('HomeIntro')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=84fe97fc&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/HomeBanner.vue?vue&type=template&id=64a9fbfa&scoped=true&
var HomeBannervue_type_template_id_64a9fbfa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"homePageBanner"},[_vm._ssrNode("<div class=\"bannerOverlay\" data-v-64a9fbfa></div> "),_c('b-container',{staticClass:"h-100"},[_c('b-row',{staticClass:"h-100",attrs:{"align-v":"center"}},[_c('b-col',{attrs:{"md":"6"}},[_c('div',{staticClass:"block_reveal_effect primary"},[(false)?undefined:_vm._e(),_vm._v(" "),_c('h1',{staticClass:"block_reveal_effect primary"},[_vm._v("WE DISCOVER, DESIGN & BUILD STRATEGY TO HELP BRANDS")])]),_vm._v(" "),_c('div',{staticClass:"block_reveal_effect block_reveal_effect_delay_02 dark font-italic"},[_c('h2',[_c('div',[_c('span',[_vm._v("Digital Strategy Consulting")]),_vm._v(" "),_c('span',[_vm._v("Design. Innovate. Transform.")])])])])]),_vm._v(" "),_c('b-col',{staticClass:"overflowHidden",attrs:{"md":"6"}},[_c('div',{staticClass:"wow fadeInLeft",attrs:{"data-wow-delay":"0.5s"}},[_c('img',{staticClass:"responsiveImg",attrs:{"src":__webpack_require__(31),"alt":"doodleblue"}})])])],1)],1)],2)}
var HomeBannervue_type_template_id_64a9fbfa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Home/HomeBanner.vue?vue&type=template&id=64a9fbfa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/HomeBanner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HomeBannervue_type_script_lang_js_ = ({
  jsonld() {
    return {
      url: 'https://www.doodleblue.com',
      Name: 'doodleblue Innovations',
      description: '<p>doodleblue Innovations is a custom mobile application development company in India and USA. We deliver creative IT solutions for all types of businesses</p>',
      image: '',
      '@context': 'http://schema.org',
      '@type': 'WebSite'
    };
  },

  mounted() {// var storagePath = this.storagePath + 'bodymovin/'
    // var animData = {
    //     wrapper: document.getElementById('dbhomelogo'),
    //     animType: 'html',
    //     loop: true,
    //     prerender: true,
    //     autoplay: true,
    //     // path: storagePath + fileName
    //     path: '../../static/homelogo/data.json'
    // };
    // var anim = lottie.loadAnimation(animData);
  }

});
// CONCATENATED MODULE: ./components/Home/HomeBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_HomeBannervue_type_script_lang_js_ = (HomeBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Home/HomeBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Home_HomeBannervue_type_script_lang_js_,
  HomeBannervue_type_template_id_64a9fbfa_scoped_true_render,
  HomeBannervue_type_template_id_64a9fbfa_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "64a9fbfa",
  "7c13f324"
  
)

/* harmony default export */ var HomeBanner = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/HomeIntro.vue?vue&type=template&id=2826332f&
var HomeIntrovue_type_template_id_2826332f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"homeIntroWrapper"},[_c('b-container',[_c('h2',{staticClass:"wow fade-in-bottom"},[_vm._v("\n      We’ve worked with the top companies to\n      transform and create a digital future\n    ")]),_vm._v(" "),_c('div',{staticClass:"sectionFadedTitle wow fade-in-bottom",attrs:{"data-relative-input":"true","id":"titleScene4","data-wow-delay":"0.5s","data-wow-offset":"250"}},[_c('h3',{staticClass:"h1",attrs:{"data-depth":"-0.1"}},[_vm._v("About")])]),_vm._v(" "),_c('b-row',{attrs:{"align-v":"center"}},[_c('b-col',{attrs:{"md":"6"}}),_vm._v(" "),_c('b-col',{attrs:{"md":"6"}},[_c('p',{staticClass:"wow fade-in-bottom",attrs:{"data-wow-delay":"0.2s"}},[_vm._v("We are a digital strategy consulting boutique that loves to learn, collaborate and create all things digital. We are equipped to cater to a mix of global brands, leading consultancies, famous startups, fortune 500s and governments. With digital transformation being the need of the hour, we help clients make significant and lasting improvements in the digital space.")]),_vm._v(" "),_c('nuxt-link',{staticClass:"link",attrs:{"to":{name:'aboutus'}}})],1)],1)],1)],1)}
var HomeIntrovue_type_template_id_2826332f_staticRenderFns = []


// CONCATENATED MODULE: ./components/Home/HomeIntro.vue?vue&type=template&id=2826332f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home/HomeIntro.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import Button from '../components/Button.vue'
// import ClientsSwiper from '../components/ClientsSwiper.vue'
/* harmony default export */ var HomeIntrovue_type_script_lang_js_ = ({
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Corporation',
      name: 'doodleblue Innovations Private Limited',
      alternateName: 'doodleblue Innovations',
      url: 'https://www.doodleblue.com',
      logo: `${__webpack_require__(30)}`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+919551943000',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: 'en'
      },
      sameAs: ['https://www.facebook.com/doodleblue.Innovations/', 'https://www.instagram.com/doodleblue/', 'https://twitter.com/doodleblue7', 'https://www.linkedin.com/company/doodleblue/', 'https://www.youtube.com/user/doodleblue7', 'https://www.doodleblue.com/']
    };
  },

  components: {// Button,
    // ClientsSwiper
  },

  mounted() {// if (process.client) {
    //   setTimeout(() => {
    //     var titleScene4 = document.getElementById('titleScene4')
    //     var parallaxInstanceTitle = new Parallax(titleScene4)
    //   }, 100)
    // }
  }

});
// CONCATENATED MODULE: ./components/Home/HomeIntro.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_HomeIntrovue_type_script_lang_js_ = (HomeIntrovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Home/HomeIntro.vue





/* normalize component */

var HomeIntro_component = Object(componentNormalizer["a" /* default */])(
  Home_HomeIntrovue_type_script_lang_js_,
  HomeIntrovue_type_template_id_2826332f_render,
  HomeIntrovue_type_template_id_2826332f_staticRenderFns,
  false,
  null,
  null,
  "0a92bb1a"
  
)

/* harmony default export */ var HomeIntro = (HomeIntro_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import ServicesSwiper from '../components/Services/ServicesSwiper.vue'
// import RecentWorksSwiper from '../components/RecentWorks/RecentWorksSwiper.vue'
// import KnowOurStrategy from '../components/KnowOurStrategy.vue'
// import StartYourCareer from '../components/StartYourCareer.vue'

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  jsonld() {
    return {
      // Local Business Schema
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'doodleblue Innovations Private Limited',
      image: `${__webpack_require__(30)}`,
      '@id': 'https://www.doodleblue.com/#digital-strategy-consulting',
      url: 'https://www.doodleblue.com/',
      telephone: '095661 62753',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5 Prakash Presidium, 110, Uthamar Gandhi Rd,',
        addressLocality: 'Chennai',
        addressRegion: 'TN',
        postalCode: '600034',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 13.061912,
        longitude: 80.24677099999997
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00'
      },
      sameAs: ['https://www.facebook.com/doodleblue.Innovations/', 'https://twitter.com/doodleblue7', 'https://www.instagram.com/doodleblue/', 'https://www.youtube.com/user/doodleblue7', 'https://www.linkedin.com/company/doodleblue/', 'https://www.doodleblue.com/'] // Website Schema  --> HomeBanner Component
      // Organisation Schema --> HomeIntro Component

    };
  },

  layout: 'BaseLayout',
  components: {
    HomeBanner: HomeBanner,
    HomeIntro: HomeIntro // ServicesSwiper,
    // RecentWorksSwiper,
    // KnowOurStrategy,
    // StartYourCareer

  },

  head() {
    return {
      title: 'doodleblue | Digital Strategy Consulting',
      link: [{
        rel: 'canonical',
        href: 'https://www.doodleblue.com/'
      }, {
        rel: 'canonical',
        href: 'http://www.doodleblue.com/'
      }, {
        rel: 'canonical',
        href: 'http://www.doodleblue.com/'
      }, {
        rel: 'canonical',
        href: 'http://doodleblue.com/'
      }],
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'doodleblue | Digital Strategy Consulting'
      }, {
        hid: 'keywords',
        name: 'keywords',
        keywords: 'Web development,android app development,mobile app development, web design company,Digital Marketing,ecommerce,react native,react.js,best wearable app development company, mobile app design company,ios app development'
      }, {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'doodleblue innovations is a custom mobile application development company in India and USA. We deliver creative IT solutions for all type of businesses.'
      }, {
        hid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'Website'
      }, {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'doodleblue | Digital Strategy Consulting'
      }, {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: 'https://www.doodleblue.com/home.png'
      }, {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: ''
      }, // {
      //   hid: 'og:image',
      //   name: 'og:image',
      //   property: 'og:image',
      //   content: require('@/assets/images/socialsharing/blogs/blockchain.png')
      // },
      //Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'doodleblue | Digital Strategy Consulting'
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'doodleblue innovations is a custom mobile application development company in India and USA. We deliver creative IT solutions for all type of businesses.'
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.doodleblue.com/home.png'
      }, {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@doodleblue7'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e11553e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map