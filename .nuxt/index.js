import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_bootstrapvue_8d8bcfc8 from 'nuxt_plugin_bootstrapvue_8d8bcfc8' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_axios_c1c71226 from 'nuxt_plugin_axios_c1c71226' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_JQuery_09e96fe3 from 'nuxt_plugin_JQuery_09e96fe3' // Source: ..\\plugins\\JQuery.js (mode: 'client')
import nuxt_plugin_GlobalMixin_2031f0a2 from 'nuxt_plugin_GlobalMixin_2031f0a2' // Source: ..\\plugins\\GlobalMixin.js (mode: 'client')
import nuxt_plugin_Wow_9a8267e4 from 'nuxt_plugin_Wow_9a8267e4' // Source: ..\\plugins\\Wow.js (mode: 'client')
import nuxt_plugin_Ga_385a15f2 from 'nuxt_plugin_Ga_385a15f2' // Source: ..\\plugins\\Ga.js (mode: 'client')
import nuxt_plugin_GlobalDeclaration_4fd5c956 from 'nuxt_plugin_GlobalDeclaration_4fd5c956' // Source: ..\\plugins\\GlobalDeclaration.js (mode: 'all')
import nuxt_plugin_vueswiper_6a7b4f42 from 'nuxt_plugin_vueswiper_6a7b4f42' // Source: ..\\plugins\\vue-swiper.js (mode: 'client')
import nuxt_plugin_MenuList_ef7d6638 from 'nuxt_plugin_MenuList_ef7d6638' // Source: ..\\plugins\\MenuList.js (mode: 'client')
import nuxt_plugin_lazyload_10f2b7b2 from 'nuxt_plugin_lazyload_10f2b7b2' // Source: ..\\plugins\\lazyload.js (mode: 'client')
import nuxt_plugin_jsonld_2ff766e1 from 'nuxt_plugin_jsonld_2ff766e1' // Source: ..\\plugins\\jsonld.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description"},{"hid":"og:title","name":"og:title","property":"og:title"},{"hid":"og:description","name":"og:description","property":"og:description"},{"hid":"og:image","name":"og:image","property":"og:image","content":"https:\u002F\u002Fwww.doodleblue.com\u002Fhome.png"},{"hid":"og:image:width","name":"og:image:width","content":"1200"},{"hid":"og:image:height","name":"og:image:height","content":"630"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:title","name":"twitter:title"},{"hid":"twitter:description","name":"twitter:description"},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Fwww.doodleblue.com\u002Fhome.png"}],"link":[{"rel":"icon","type":"image\u002Fpng","size":"16x16","href":"\u002Ffavicon\u002F16x16.png"},{"rel":"icon","type":"image\u002Fpng","size":"32x32","href":"\u002Ffavicon\u002F32x32.png"},{"rel":"icon","type":"image\u002Fpng","size":"96x96","href":"\u002Ffavicon\u002F96x96.png"},{"rel":"icon","type":"image\u002Fpng","size":"192x192","href":"\u002Ffavicon\u002F192x192.png"},{"rel":"apple-touch-icon","type":"image\u002Fpng","size":"16x16","href":"\u002Ffavicon\u002F16x16.png"},{"rel":"apple-touch-icon","type":"image\u002Fpng","size":"32x32","href":"\u002Ffavicon\u002F32x32.png"},{"rel":"apple-touch-icon","type":"image\u002Fpng","size":"96x96","href":"\u002Ffavicon\u002F96x96.png"},{"rel":"apple-touch-icon","type":"image\u002Fpng","size":"192x192","href":"\u002Ffavicon\u002F192x192.png"}],"script":[{"src":"\u002FAnime.js","defer":true},{"src":"\u002Fthree.min.js","defer":true},{"src":"\u002FCanvasRenderer.js","defer":true},{"src":"\u002FStats.min.js","defer":true},{"src":"\u002FTweenMax.min.js","defer":true},{"src":"\u002FScrollMagic.min.js","defer":true},{"src":"\u002FProjector.js","defer":true}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_bootstrapvue_8d8bcfc8 === 'function') {
    await nuxt_plugin_bootstrapvue_8d8bcfc8(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_c1c71226 === 'function') {
    await nuxt_plugin_axios_c1c71226(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_JQuery_09e96fe3 === 'function') {
    await nuxt_plugin_JQuery_09e96fe3(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_GlobalMixin_2031f0a2 === 'function') {
    await nuxt_plugin_GlobalMixin_2031f0a2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_Wow_9a8267e4 === 'function') {
    await nuxt_plugin_Wow_9a8267e4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_Ga_385a15f2 === 'function') {
    await nuxt_plugin_Ga_385a15f2(app.context, inject)
  }

  if (typeof nuxt_plugin_GlobalDeclaration_4fd5c956 === 'function') {
    await nuxt_plugin_GlobalDeclaration_4fd5c956(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueswiper_6a7b4f42 === 'function') {
    await nuxt_plugin_vueswiper_6a7b4f42(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_MenuList_ef7d6638 === 'function') {
    await nuxt_plugin_MenuList_ef7d6638(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_lazyload_10f2b7b2 === 'function') {
    await nuxt_plugin_lazyload_10f2b7b2(app.context, inject)
  }

  if (typeof nuxt_plugin_jsonld_2ff766e1 === 'function') {
    await nuxt_plugin_jsonld_2ff766e1(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
