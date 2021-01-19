<template>
  <div>
    <header
      v-if="!scrollHeader && showDefaultHeader"
      class="defaultHeader animated fadeIn"
      data-wow-offset="0"
      data-wow-delay="0.5s"
    >
      <b-container fluid class="header-md-screen">
        <b-row align-v="center">
          <b-col md="3">
            <div class="headerLogoContainer">
              <nuxt-link class="link" :to="{name:'index'}">
                <!-- <img src="@/assets/images/full-logo-inversee.png" alt="doodleblue logo"> -->
                <img
                  src="@/assets/images/logo-dark.svg"
                  alt="doodleblue logo"
                  style="width: 193px; height: 90px; margin-left: 1.5rem;"
                />
              </nuxt-link>
            </div>
          </b-col>

          <b-col md="9">
            <b-nav class="headerNavWrapper">
              <!-- <b-nav-item> -->
              <li class="nav-item">
                <nuxt-link class="link nav-link" :to="{name:'services'}">Services</nuxt-link>
              </li>
              <!-- </b-nav-item> -->
              <!-- <b-nav-item> -->
              <li class="nav-item">
                <nuxt-link class="link nav-link" :to="{name:'industries'}">Industries</nuxt-link>
                <!-- </b-nav-item>               -->
              </li>
              <!-- <b-nav-item> -->
              <li class="nav-item">
                <nuxt-link class="link nav-link" :to="{name:'aboutus'}">About Us</nuxt-link>
                <!-- </b-nav-item> -->
              </li>
              <!-- <b-nav-item> -->
              <li class="nav-item">
                <nuxt-link class="link nav-link" :to="{name:'success-stories'}">Success Stories</nuxt-link>
                <!-- </b-nav-item> -->
              </li>
              <!-- <b-nav-item> -->
              <li class="nav-item">
                <nuxt-link class="link nav-link" :to="{name:'careers'}">Careers</nuxt-link>
                <!-- </b-nav-item> -->
              </li>
              <!-- <b-nav-item> -->
              <!-- <li class="nav-item">
                <nuxt-link class="link nav-link" :to="{name:'contactus'}">Contact Us</nuxt-link>
              </li> -->

              <li class="nav-item">
                <nuxt-link class="link nav-link" :to="{name:'blogs'}">Blogs</nuxt-link>
                <!-- </b-nav-item> -->
              </li>
              <!--<li class="nav-item">
                <a class="link nav-link" href="http://community.doodleblue.com/">Community</a>
                
              </li>-->

              <b-nav-item @click="toggleMenuPage" class="menuIconWidth">
                <img src="@/assets/images/menu-icon-blue.png" alt="menu" />
              </b-nav-item>
            </b-nav>
          </b-col>
        </b-row>
      </b-container>

      <!-- Light -->
      <!-- <b-container v-if="false" fluid class="headerWrapper light">
        <b-row align-v="center">
          <b-col md="4">
            <div class="headerLogoContainer light">
              <img src="@/assets/images/full-logo.png" alt="doodleblue logo">
            </div>
          </b-col>

          <b-col md="8">
            <b-nav class="headerNavWrapper light">
              <b-nav-item active>
                <nuxt-link class="link" to="/">Industries</nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link class="link" to="/">Services</nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link class="link" to="/">Careers</nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link class="link" to="/">About Us</nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link class="link" to="/">Contact Us</nuxt-link>
              </b-nav-item>
              <b-nav-item @click="toggleMenuPage">
                <img src="@/assets/images/menu-icon-white.png" alt="menu">
              </b-nav-item>
            </b-nav>
          </b-col>
        </b-row>
      </b-container>-->
    </header>

    <header class="responsiveHeader">
      <transition
        name="custom-classes-transition"
        enter-active-class="animated-fast fadeInLeft"
        leave-active-class="animated-fast fadeOutLeft"
      >
        <nuxt-link class="link" :to="{name:'index'}" v-if="scrollHeader">
          <div class="logoWrapper">
            <img src="@/assets/images/logo.png" alt="doodleblue" />
          </div>
        </nuxt-link>
      </transition>
      <transition
        name="custom-classes-transition2"
        enter-active-class="animated-fast fadeInRight"
        leave-active-class="animated-fast fadeOutRight"
      >
        <div class="logoWrapper menuWrapper" @click="toggleMenuPage" v-if="scrollHeader">
          <img src="@/assets/images/menu-icon-white.png" alt="menu" />
        </div>
      </transition>
    </header>

    <!-- Menu Page Starts -->
    <!-- <transition
                                    name="custom-classes-transition"
                                    enter-active-class="animated-fast slideInUp"
                                    leave-active-class="animated-fast slideOutUp"
    >-->
    <MenuPage v-if="showMenu" :showMenu="showMenu" @CloseMenu="toggleMenuPage" />
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
      scrollHeader: false || this.propsScrollHeader,
      showDefaultHeader: true
    }
  },

  methods: {
    // Toggle Menu Page
    toggleMenuPage() {
      this.showMenu = !this.showMenu
      if (this.showMenu) {
        $('html').css('overflow-y', 'hidden')
        $('body').css('overflow-y', 'hidden')
      } else {
        $('html').css('overflow-y', 'auto')
        $('body').css('overflow-y', 'auto')
      }
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
          that.scrollHeader = false
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
              }, 0)
              console.log(that.scrollHeader,that.showDefaultHeader,"SSD")
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
    this.headerScroll();
    
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
.menuIconWidth {
  min-width: 65px;
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

.nuxt-link-exact-active {
  /* color: #006ada !important; */
  color: #006ada !important;
}

@media (max-width: 560px) {
  .header-md-screen{
    display:none;
  }
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

