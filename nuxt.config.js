// const pkg = require('./package')

module.exports = {
  mode: 'universal',
  server: {
    port: 2001, // Staging
    // port: 2000, // Live
    // host: '127.0.0.1'
    host: '0.0.0.0'
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    // title: pkg.name,
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      // content: pkg.description
    },
    {
      hid: 'og:title',
      name: 'og:title',
      property: 'og:title',
      // content: pkg.name
    },
    {
      hid: 'og:description',
      name: 'og:description',
      property: 'og:description',
      // content: pkg.description
    },
    {
      hid: 'og:image',
      name: 'og:image',
      property: 'og:image',
      content: 'https://www.doodleblue.com/home.png'
      // content: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALJJREFUeNpiYBhmIOuWAhAX4JEvAKtBAkxIkgZA8jwQ9wPZ87Fong+WA6mBqEUyACKwH4gFgPgCECeguASiOQEqJwBWCzWECU1zIsM0NUMgXQjEB9A0L4DKJSIbwggk3iNpXoDF2TDNiUjiIDGQ3AcmPAGGXTMaABngCDIJbCLEZEzNWbcc4GGCZDtILyOOQDRAsRmiuR9JDqwZKH+BES0aYYZgOhvhKrhmqiSkYQAAAgwADE5c3onnRHkAAAAASUVORK5CYII='
    },
    {
      hid: 'og:image:width',
      name: 'og:image:width',
      content: '1200'
    },
    {
      hid: 'og:image:height',
      name: 'og:image:height',
      content: '630'
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      // content: pkg.name
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      // content: pkg.description
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://www.doodleblue.com/home.png'
      // content: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALJJREFUeNpiYBhmIOuWAhAX4JEvAKtBAkxIkgZA8jwQ9wPZ87Fong+WA6mBqEUyACKwH4gFgPgCECeguASiOQEqJwBWCzWECU1zIsM0NUMgXQjEB9A0L4DKJSIbwggk3iNpXoDF2TDNiUjiIDGQ3AcmPAGGXTMaABngCDIJbCLEZEzNWbcc4GGCZDtILyOOQDRAsRmiuR9JDqwZKH+BES0aYYZgOhvhKrhmqiSkYQAAAgwADE5c3onnRHkAAAAASUVORK5CYII='
    }
    ],
    link: [
      // {
      //   rel: 'canonical',
      //   href: 'https://www.doodleblue.com'
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/x-icon',
      //   href: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALJJREFUeNpiYBhmIOuWAhAX4JEvAKtBAkxIkgZA8jwQ9wPZ87Fong+WA6mBqEUyACKwH4gFgPgCECeguASiOQEqJwBWCzWECU1zIsM0NUMgXQjEB9A0L4DKJSIbwggk3iNpXoDF2TDNiUjiIDGQ3AcmPAGGXTMaABngCDIJbCLEZEzNWbcc4GGCZDtILyOOQDRAsRmiuR9JDqwZKH+BES0aYYZgOhvhKrhmqiSkYQAAAgwADE5c3onnRHkAAAAASUVORK5CYII='
      // },
      {
        rel: 'icon',
        type: 'image/png',
        size: '16x16',
        href: '/favicon/16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: '/favicon/32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '96x96',
        href: '/favicon/96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '192x192',
        href: '/favicon/192x192.png'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        size: '16x16',
        href: '/favicon/16x16.png'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        size: '32x32',
        href: '/favicon/32x32.png'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        size: '96x96',
        href: '/favicon/96x96.png'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        size: '192x192',
        href: '/favicon/192x192.png'
      },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Open+Sans:800'
      // },
      // {
      //   rel: 'stylesheet',
      //   type: 'text/css',
      //   href: '/fontawesome/css/all.min.css'
      // }
    ],
    script: [
      {
      src: '/Anime.js',
      defer: true
    },
    {
      src: '/three.min.js',
      defer: true
    },
    {
      src: '/CanvasRenderer.js',
      defer: true
    },
    {
      src: '/Stats.min.js',
      defer: true
    },
    {
      src: '/TweenMax.min.js',
      defer: true
    },
    {
      src: '/ScrollMagic.min.js',
      defer: true
    },
    {
      src: '/Projector.js',
      defer: true
    },
      // {
      //   src: '/facebookPixel.js',
      //   defer: true
      // }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#006ada'
  },

  /*
   ** Global CSS
   */

  css: [
    '~/assets/css/animate.min.css',
    'swiper/dist/css/swiper.css',
    '~/assets/css/style.css',
    '~/assets/css/main.css',
    // '~/static/fontawesome/css/all.min.css',
    '~/assets/css/lato.css',
    // 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Open+Sans:800'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
    src: '~/plugins/JQuery.js',
    ssr: false
  },
  {
    src: '~/plugins/GlobalMixin.js',
    ssr: false
  },
  {
    src: '~/plugins/Wow.js',
    ssr: false
  },
  {
    src: '~/plugins/Ga.js',
    ssr: false
  },
    '~/plugins/GlobalDeclaration.js',
  {
    src: '~/plugins/vue-swiper.js',
    ssr: false
  },
  {
    src: '~/plugins/MenuList.js',
    ssr: false
  },
  {
    src: '~/plugins/vue-resource.js',
    ssr: false
  },
  {
    src: '~/plugins/lazyload.js',
    ssr: false
  },
  {
    src: '~/plugins/jsonld.js'
  }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // 'nuxt-purgecss',
    '@nuxtjs/pwa',
    // '@nuxtjs/sitemap',
    // 'nuxt-purgecss',
    // '@bazzite/nuxt-optimized-images',
    // ['@nuxtjs/component-cache', {
    //   maxAge: 1000 * 60 * 60
    // }],
    // ['@nuxtjs/google-tag-manager', {
    //   id: 'GTM-NFHTD2V',
    //   layer: 'dataLayer',
    //   pageTracking: true,
    // }]
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: false,
    inlineImageLimit: -1,
  },
  /*
   ** Sitemap module configuration
   */
  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: 'https://www.doodleblue.com/',
  //   cacheTime: 1000 * 60 * 15,
  //   gzip: true,
  //   generate: false, // Enable me when using nuxt generate
  //   exclude: [
  //     "/alcove",
  //     "/consult-thankyou",
  //     "/contact-thankyou",
  //     "/our-works",
  //     '/pagenotfound',
  //     '/test',
  //     '/university', // Remove these URL's from sitemap generate
  //     '/casestudy'
  //   ],
  // },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  },
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    baseUrl: 'https://demo.doodleblue.tk'
    // baseUrl: 'http://127.0.0.1:2001'
    // baseUrl: 'https://doodleblue.com'
  }
}
