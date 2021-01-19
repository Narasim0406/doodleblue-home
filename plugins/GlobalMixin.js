import Vue from 'vue'

// Import Config
import { storagePath, apiHost } from '~/config/config'
window.lottie = require('lottie-web')

Vue.mixin({
  data: function () {
    return {
      get storagePath() {
        return storagePath
      },
      get baseUrl() {
        return apiHost
      },
      storageImageUrl: ''
    }
  },

  computed: {
    // Get Browser Info
    browserInfo() {
      let info = localStorage.getItem('browserInfo')
      return JSON.parse(info)
    }
  },

  mounted() {
    //////////////////////////////////////////////////////////
    //////////////// Browser Info /////////////////////////////
    //////////////////////////////////////////////////////////
    var objappVersion = navigator.appVersion
    var objAgent = navigator.userAgent
    var objbrowserName = navigator.appName
    var objfullVersion = '' + parseFloat(navigator.appVersion)
    var objBrMajorVersion = parseInt(navigator.appVersion, 10)
    var objOffsetName, objOffsetVersion, ix
    // In Chrome
    if ((objOffsetVersion = objAgent.indexOf('Chrome')) != -1) {
      objbrowserName = 'Chrome'
      objfullVersion = objAgent.substring(objOffsetVersion + 7)
    }
    // In Microsoft internet explorer
    else if ((objOffsetVersion = objAgent.indexOf('MSIE')) != -1) {
      objbrowserName = 'Microsoft Internet Explorer'
      objfullVersion = objAgent.substring(objOffsetVersion + 5)
    }
    // In Firefox
    else if ((objOffsetVersion = objAgent.indexOf('Firefox')) != -1) {
      objbrowserName = 'Firefox'
    }
    // In Safari
    else if ((objOffsetVersion = objAgent.indexOf('Safari')) != -1) {
      objbrowserName = 'Safari'
      objfullVersion = objAgent.substring(objOffsetVersion + 7)
      if ((objOffsetVersion = objAgent.indexOf('Version')) != -1)
        objfullVersion = objAgent.substring(objOffsetVersion + 8)
    }
    // For other browser "name/version" is at the end of userAgent
    else if (
      (objOffsetName = objAgent.lastIndexOf(' ') + 1) <
      (objOffsetVersion = objAgent.lastIndexOf('/'))
    ) {
      objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion)
      objfullVersion = objAgent.substring(objOffsetVersion + 1)
      if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
        objbrowserName = navigator.appName
      }
    }
    // trimming the fullVersion string at semicolon/space if present
    if ((ix = objfullVersion.indexOf(';')) != -1)
      objfullVersion = objfullVersion.substring(0, ix)
    if ((ix = objfullVersion.indexOf(' ')) != -1)
      objfullVersion = objfullVersion.substring(0, ix)
    objBrMajorVersion = parseInt('' + objfullVersion, 10)
    if (isNaN(objBrMajorVersion)) {
      objfullVersion = '' + parseFloat(navigator.appVersion)
      objBrMajorVersion = parseInt(navigator.appVersion, 10)
    }
    /* console.log('' +'Browser name = '+objbrowserName+'<br>' +'Full version = '+objfullVersion+'<br>' +'Major version = '+objBrMajorVersion+'<br>' +'navigator.appName = '+navigator.appName+'<br>' +'navigator.userAgent = '+navigator.userAgent+'<br>' ) */

    var browserInfo = {
      name: objbrowserName,
      fullVersion: objfullVersion,
      majorVersion: objBrMajorVersion,
      navigatorAppName: navigator.appName,
      navigatorUserAgent: navigator.userAgent
    }

    localStorage.setItem('browserInfo', JSON.stringify(browserInfo))
    //////////////////////////////////////////////////////////
    //////////////// Browser Info /////////////////////////////
    //////////////////////////////////////////////////////////
  },

  methods: {
    // Comnpatability chck for footer
    checkFooterCompatability() {
      // Check for cross browser compatability for Footer

        setTimeout(()=>{
          window.addEventListener("scroll", ()=>{
            if(window.innerWidth > 760 && window.pageYOffset > ($('.pageRouter').innerHeight() - $('.page_footer_wrapper').innerHeight())){
              $('.contact-us').css({
                'transform': 'translate(130%, 0)'
              })
            }
            else{
              $('.contact-us').css({
                'transform': 'translate(0,0)'
              })
            }
          });
        },500)

      if (
        this.browserInfo.name == 'Safari' ||
        this.browserInfo.name == 'Firefox'
      ) {
        $('.pageRouter').css({
          position: 'relative',
          'box-shadow': 'none'
        })
        $('.page_footer_wrapper').css({
          position: 'relative',
          'z-index': 1
        })
        $('.responsive_page_footer_wrapper').css({
          position: 'relative',
          'z-index': 1,
          'margin-top': 0
        })
        $('.industriesSwiperWrapper').css({
          'margin-bottom': 0
        })
      } else {
        if (window.innerWidth < 760) {
          // Set margin to page router to show footer
          setTimeout(() => {
            $('.pageRouter').css(
              'margin-bottom',
              $('.responsive_page_footer_wrapper').innerHeight()
            )            
          }, 500)
        } else {
          // Set margin to page router to show footer
          setTimeout(() => {
            $('.pageRouter').css(
              'margin-bottom',
              $('.page_footer_wrapper').innerHeight()
            )
          }, 500)
        }
      }
    },

    // generic lottie animation
    initLottieAnimation(elemId, fileName) {
      var storagePath = this.storagePath + 'bodymovin/'
      var animData = {
        wrapper: document.getElementById(elemId),
        animType: 'html',
        loop: true,
        prerender: true,
        autoplay: true,
        path: storagePath + fileName
      }
      var anim = lottie.loadAnimation(animData)
    },

    initHomeServiceLottieAnimation(elemId, fileName) {
      var storagePath = this.storagePath + 'bodymovin/'
      var animData = {
        wrapper: document.getElementById(elemId),
        animType: 'html',
        loop: false,
        prerender: true,
        autoplay: true,
        path: storagePath + fileName
      }
      var anim = lottie.loadAnimation(animData)
    }
  }
})
