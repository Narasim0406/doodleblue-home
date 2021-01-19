<template>
  <div>
    <header class="responsiveHeader">
      <transition
        name="custom-classes-transition4"
        enter-active-class="animated-fast fadeInLeft"
        leave-active-class="animated-fast fadeOutLeft"
      >
        <nuxt-link class="link" to="/" v-if="scrollHeader">
          <div class="logoWrapper" :style="{'background': computedServiceColor}">
            <img src="@/assets/images/logo.png" alt="doodleblue">
          </div>
        </nuxt-link>
      </transition>
      <transition
        name="custom-classes-transition3"
        enter-active-class="animated-fast fadeInRight"
        leave-active-class="animated-fast fadeOutRight"
      >
        <div
          class="logoWrapper menuWrapper"
          v-if="scrollHeader"
          @click="toggleMenuPage"
          :style="{'background': computedServiceColor}"
        >
          <img src="@/assets/images/menu-icon-white.png" alt="menu">
        </div>
      </transition>
    </header>

    <!-- Menu Page Starts -->
    <!-- <transition
            name="custom-classes-transition"
            enter-active-class="animated-fast slideInUp"
            leave-active-class="animated-fast slideOutUp"
    >-->
    <MenuPage v-if="showMenu" :showMenu="showMenu" @CloseMenu="toggleMenuPage"/>
    <!-- </transition> -->
    <!-- Menu Page Ends -->
  </div>
</template>

<script>
import MenuPage from '@/components/MenuPage.vue'
// import MenuPage from '@/views/MenuPage.vue'

export default {
  components: {
    MenuPage
  },

  data() {
    return {
      showMenu: false,
      // scrollHeader: false || this.propsScrollHeader,
      scrollHeader: true,
      showDefaultHeader: true
    }
  },

  computed: {
    // Compute service color with route change
    computedServiceColor() {
      let routeName = this.$route.name

      switch (routeName) {
        // case '/service/digital-transformation':
        //     return '#dc1d45'
        //     break;

        // case '/service/ui-ux-design-thinking':
        //     return 'rgb(11, 53, 115)'
        //     break;

        // case '/service/mobile-engineering':
        //     return 'rgb(147, 232, 71)'
        //     break;

        case 'industries-industry':
          return '#006ada'
          break

        case 'casestudy-id':
          return '#006ada'
          break

        case 'services-service-subservice':
          return 'rgba(0,0,0, 0.3)'
          break
        case 'beta-casestudy':
          return 'rgba(0,0,0, 0.3)'
          break

        default:
          return '#000'
          break
      }
    }
  },

  methods: {
    // Toggle Menu Page
    toggleMenuPage() {
      this.showMenu = !this.showMenu
    },

    // Window Scroll Funtion - Header
    headerScroll() {
      var lastPosition = 0
      var position = $(window).scrollTop()
      var delta = 100
      var that = this

      window.onscroll = function() {
        var windowOffset = window.pageYOffset
        // console.log('last pos , windowOffset', lastPosition, windowOffset)
        // if (windowOffset < 80 && window.screen.width > 768 && that.propsScrollHeader==false) {
        if (windowOffset < 80 && window.screen.width > 768) {
          // that.scrollHeader = false
          // that.showDefaultHeader = true
        } else if (lastPosition < windowOffset && window.screen.width > 768) {
          that.scrollHeader = true
        }
        lastPosition = windowOffset

        // Hide header on scroll down, show on scroll up - only mobile
        if (window.screen.width <= 480) {
          /* if (lastPosition > windowOffset - 10) {
                console.log('mobile show header on scroll up', lastPosition, windowOffset)
                that.scrollHeader = true
                } else {
                console.log('mobile hide header on scroll down', lastPosition, windowOffset)
                that.scrollHeader = false
                that.showDefaultHeader = false
                } */
          var scroll = $(window).scrollTop()
          // console.log("scrolling default - pos, scroll", position, scroll);
          if (scroll > position && position > delta) {
            // console.log("scrolling downwards", position, scroll);
            // that.scrollHeader = false
            // that.showDefaultHeader = false
            if ($('.responsiveHeader').is(':visible')) {
              // $('.responsiveHeader.logoWrapper').removeClass('fadeOutLeft');
              // $('.responsiveHeader.menuWrapper').removeClass('fadeOutRight');

              // $('.responsiveHeader.logoWrapper').addClass('fadeOutLeft');
              // $('.responsiveHeader.menuWrapper').addClass('fadeOutRight');
              setTimeout(() => {
                that.scrollHeader = false
                that.showDefaultHeader = false
              }, 300)
            }
          } else if (
            scroll + 35 < position ||
            (scroll <= 80 && that.scrollHeader == false)
          ) {
            // console.log("scrolling upwards", position, scroll);
            that.scrollHeader = true
          }
          position = scroll
        }
      }

      if (window.screen.width <= 768) {
        that.scrollHeader = true
      }
    }
  },

  mounted() {
    this.headerScroll()
  }
}
</script>

<style scoped>
header.responsiveHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 10;
}

.responsiveHeader .logoWrapper img {
  width: 50px;
  height: auto;
  margin: auto;
}

.responsiveHeader .logoWrapper {
  float: left;
  display: flex;
  padding: 10px;
  width: 70px;
  height: 70px;
  background: #006ada;
}

.menuWrapper {
  float: right !important;
  cursor: pointer;
}
.menuWrapper img {
  width: 30px !important;
}

.headerNavWrapper.light .nav-link {
  color: #fff;
}

.headerLogoContainer.light {
  padding-left: 20px;
}

.headerWrapper.light {
  padding-top: 20px;
}

@media (max-width: 560px) {
  .responsiveHeader .logoWrapper img {
    width: 50px;
    height: auto;
    margin: auto;
  }

  .responsiveHeader .logoWrapper {
    float: left;
    display: flex;
    padding: 5px;
    width: 60px;
    height: 60px;
    background: #006ada;
  }

  .menuWrapper {
    float: right !important;
    cursor: pointer;
  }
  .menuWrapper img {
    width: 25px !important;
  }

  .responsiveHeader .logoWrapper img {
    width: 40px;
  }
}
</style>

