<template>
  <div class="menuPageWrapper">
    <div class="menuOverlay">
      <!-- open/close -->
      <div class="overlay overlay-boxes">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="101%"
          viewBox="0 0 1440 806"
          preserveAspectRatio="none"
        >
          <path d="m0.005959,200.364029l207.551124,0l0,204.342453l-207.551124,0l0,-204.342453z" />
          <path d="m0.005959,400.45401l207.551124,0l0,204.342499l-207.551124,0l0,-204.342499z" />
          <path d="m0.005959,600.544067l207.551124,0l0,204.342468l-207.551124,0l0,-204.342468z" />
          <path d="m205.752151,-0.36l207.551163,0l0,204.342437l-207.551163,0l0,-204.342437z" />
          <path d="m204.744629,200.364029l207.551147,0l0,204.342453l-207.551147,0l0,-204.342453z" />
          <path d="m204.744629,400.45401l207.551147,0l0,204.342499l-207.551147,0l0,-204.342499z" />
          <path d="m204.744629,600.544067l207.551147,0l0,204.342468l-207.551147,0l0,-204.342468z" />
          <path d="m410.416046,-0.36l207.551117,0l0,204.342437l-207.551117,0l0,-204.342437z" />
          <path d="m410.416046,200.364029l207.551117,0l0,204.342453l-207.551117,0l0,-204.342453z" />
          <path d="m410.416046,400.45401l207.551117,0l0,204.342499l-207.551117,0l0,-204.342499z" />
          <path d="m410.416046,600.544067l207.551117,0l0,204.342468l-207.551117,0l0,-204.342468z" />
          <path d="m616.087402,-0.36l207.551086,0l0,204.342437l-207.551086,0l0,-204.342437z" />
          <path d="m616.087402,200.364029l207.551086,0l0,204.342453l-207.551086,0l0,-204.342453z" />
          <path d="m616.087402,400.45401l207.551086,0l0,204.342499l-207.551086,0l0,-204.342499z" />
          <path d="m616.087402,600.544067l207.551086,0l0,204.342468l-207.551086,0l0,-204.342468z" />
          <path d="m821.748718,-0.36l207.550964,0l0,204.342437l-207.550964,0l0,-204.342437z" />
          <path d="m821.748718,200.364029l207.550964,0l0,204.342453l-207.550964,0l0,-204.342453z" />
          <path d="m821.748718,400.45401l207.550964,0l0,204.342499l-207.550964,0l0,-204.342499z" />
          <path d="m821.748718,600.544067l207.550964,0l0,204.342468l-207.550964,0l0,-204.342468z" />
          <path d="m1027.203979,-0.36l207.550903,0l0,204.342437l-207.550903,0l0,-204.342437z" />
          <path d="m1027.203979,200.364029l207.550903,0l0,204.342453l-207.550903,0l0,-204.342453z" />
          <path d="m1027.203979,400.45401l207.550903,0l0,204.342499l-207.550903,0l0,-204.342499z" />
          <path d="m1027.203979,600.544067l207.550903,0l0,204.342468l-207.550903,0l0,-204.342468z" />
          <path d="m1232.659302,-0.36l207.551147,0l0,204.342437l-207.551147,0l0,-204.342437z" />
          <path d="m1232.659302,200.364029l207.551147,0l0,204.342453l-207.551147,0l0,-204.342453z" />
          <path d="m1232.659302,400.45401l207.551147,0l0,204.342499l-207.551147,0l0,-204.342499z" />
          <path d="m1232.659302,600.544067l207.551147,0l0,204.342468l-207.551147,0l0,-204.342468z" />
          <path d="m-0.791443,-0.360001l207.551163,0l0,204.342438l-207.551163,0l0,-204.342438z" />
        </svg>
        <button type="button" class="overlay-close woww fadeIn" data-wow-delay="1s">
          <!-- <i class="fas fa-times"></i> -->
          <img
            class="animated fadeIn"
            src="@/assets/images/close.svg"
            style="width:18px;cursor:pointer;"
            alt="Close"
          />
          <!-- Close -->
        </button>

        <div class="menuFadedText woww fadeInUp">
          <div>Digital</div>
          <div>Strategy</div>
          <div>Consulting</div>
        </div>

        <b-container class="menuItemsWrapper wwow fadeInUpp">
          <b-row align-v="center" style="height: 100vh;">
            <b-col md="12">
              <div class="menuItems">
                <h2 class="woww fade-in-bottom" data-wow-delay="0.1s">
                  <span>
                    <nuxt-link class="link" :to="{name: 'services'}">Services</nuxt-link>
                  </span>
                  <div class="subMenuItems animated animated-fast fade-in-bottom">
                    <b-row>
                      <b-col md="4" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name: 'services-service',params:{service:'digitaltransformation'}}"
                          >Digital Transformation</nuxt-link>
                        </h5>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'digitaltransformation',subservice: 'technology-ecosystem-audit'}}"
                          >Technology & Ecosystem Audit</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'digitaltransformation',subservice: 'digital-strategy'}}"
                          >Digital Strategy</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'digitaltransformation',subservice: 'digital-marketing'}}"
                          >Digital Marketing</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'digitaltransformation',subservice: 'data-analytics'}}"
                          >Data & Analytics</nuxt-link>
                        </p>
                      </b-col>
                      <b-col md="4" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name:'services-service',params:{service: 'uiuxdesign'}}"
                          >UI/UX & Design Thinking</nuxt-link>
                        </h5>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'uiuxdesign',subservice: 'branding'}}"
                          >Branding</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'uiuxdesign',subservice: 'ux-strategy'}}"
                          >UX Strategy</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'uiuxdesign',subservice: 'mobile-web-design'}}"
                          >Mobile & Web Design</nuxt-link>
                        </p>
                      </b-col>
                      <b-col md="4" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name:'services-service',params:{service:'mobileengineering'}}"
                          >Mobile Engineering</nuxt-link>
                        </h5>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'mobileengineering',subservice: 'android-development'}}"
                          >Android Development</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'mobileengineering',subservice: 'ios-development'}}"
                          >IOS Development</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'mobileengineering',subservice: 'react-native-development'}}"
                          >React Native Development</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'mobileengineering',subservice: 'wearable-development'}}"
                          >Wearable Development</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'mobileengineering',subservice: 'hybrid-development'}}"
                          >Hybrid Development</nuxt-link>
                        </p>
                      </b-col>
                      <b-col md="4" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name:'services-service',params:{service:'webtechnology'}}"
                          >Web Technology Development</nuxt-link>
                        </h5>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'webtechnology',subservice: 'content-management-systems'}}"
                          >Content Management Systems</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'webtechnology',subservice: 'e-commerce-platforms'}}"
                          >e-Commerce Platforms</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'webtechnology',subservice: 'custom-web-applications'}}"
                          >Custom Web Applications</nuxt-link>
                        </p>
                      </b-col>
                      <b-col md="4" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name:'services-service',params:{service:'innovation'}}"
                          >Innovation</nuxt-link>
                        </h5>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'innovation',subservice: 'augmented-virtual-reality'}}"
                          >Augmented & Virtual Reality</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'innovation',subservice: 'machine-learning-ai'}}"
                          >Machine Learning & AI</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'innovation',subservice: 'internet-of-things'}}"
                          >Internet of Things</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'innovation',subservice: 'blockchain'}}"
                          >Blockchain</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'innovation',subservice: 'cybersecurity'}}"
                          >Cyber Security</nuxt-link>
                        </p>
                      </b-col>
                      <b-col md="4" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name:'services-service',params:{service: 'enterpriseapplications'}}"
                          >Enterprise Application Development</nuxt-link>
                        </h5>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'enterpriseapplications',subservice: 'enterprise-resource-planning'}}"
                          >Enterprise Resource Planning</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'enterpriseapplications',subservice: 'point-of-sale'}}"
                          >Point of Sale</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'enterpriseapplications',subservice: 'customer-relation-management'}}"
                          >Customer Relationship Management</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'enterpriseapplications',subservice: 'data-workflow-automation'}}"
                          >Data Warehousing & Workflow Automation</nuxt-link>
                        </p>
                        <p>
                          <nuxt-link
                            class="link"
                            target="_blank"
                            :to="{name: 'services-service-subservice' , params: {service:'enterpriseapplications',subservice: 'business-intelligence'}}"
                          >Business Intelligence</nuxt-link>
                        </p>
                      </b-col>
                    </b-row>
                  </div>
                </h2>
                <h2 class="woww fade-in-bottom" data-wow-delay="0.2s">
                  <span>
                    <nuxt-link class="link" :to="{name:'industries'}">Industries</nuxt-link>
                  </span>
                  <div class="subMenuItems animated animated-fast fade-in-bottom">
                    <b-row>
                      <b-col md="3" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name: 'industries-industry', params: {industry: 'education' }}"
                          >Education</nuxt-link>
                        </h5>
                      </b-col>
                      <b-col md="3" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name: 'industries-industry', params: {industry: 'finance' }}"
                          >Finance</nuxt-link>
                        </h5>
                      </b-col>
                      <b-col md="3" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name: 'industries-industry', params: {industry: 'fashion' }}"
                          >Fashion</nuxt-link>
                        </h5>
                      </b-col>
                      <b-col md="3" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name: 'industries-industry', params: {industry: 'hospitality' }}"
                          >Hospitality</nuxt-link>
                        </h5>
                      </b-col>
                      <b-col md="3" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name: 'industries-industry', params: {industry: 'telecom' }}"
                          >Telecom</nuxt-link>
                        </h5>
                      </b-col>
                      <b-col md="3" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name: 'industries-industry', params: {industry: 'retail' }}"
                          >Retail</nuxt-link>
                        </h5>
                      </b-col>
                      <b-col md="3" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name: 'industries-industry', params: {industry: 'healthcare' }}"
                          >Healthcare</nuxt-link>
                        </h5>
                      </b-col>
                      <b-col md="3" class="subMenuItem">
                        <h5>
                          <nuxt-link
                            :to="{name: 'industries-industry', params: {industry: 'transport' }}"
                          >Transport</nuxt-link>
                        </h5>
                      </b-col>
                    </b-row>
                  </div>
                </h2>
                <h2 class="woww fade-in-bottom" data-wow-delay="0.0s">
                  <span>
                    <nuxt-link class="link" :to="{name: 'aboutus'}">About Us</nuxt-link>
                  </span>
                </h2>
                <h2 class="woww fade-in-bottom" data-wow-delay="0.5s">
                  <span>
                    <nuxt-link class="link" :to="{name: 'success-stories'}">Success Stories</nuxt-link>
                  </span>
                </h2>
                <h2 class="woww fade-in-bottom" data-wow-delay="0.3s">
                  <span>
                    <nuxt-link class="link" :to="{name: 'careers'}">Careers</nuxt-link>
                  </span>
                </h2>
                <!-- <h2 class="woww fade-in-bottom" data-wow-delay="0.4s">
                  <span>
                    <nuxt-link class="link" :to="{name: 'contactus'}">Contact Us</nuxt-link>
                  </span>
                </h2> -->
                <h2 class="woww fade-in-bottom" data-wow-delay="0.4s">
                  <span>
                    <nuxt-link class="link" :to="{name: 'blogs'}">Blogs</nuxt-link>
                  </span>
                </h2>
               <!-- <h2 class="woww fade-in-bottom" data-wow-delay="0.4s">
                  <span>
                    <a class="link" href="http://community.doodleblue.com/">Community</a>
                  </span>
                </h2>-->
              </div>
            </b-col>
          </b-row>
        </b-container>

        <ResponsiveMenuPage class="responsiveMenuPage" />
      </div>
    </div>
  </div>
</template>


<script>
import ResponsiveMenuPage from '@/components/ResponsiveMenuPage.vue'

export default {
  props: ['showMenu'],

  components: {
    ResponsiveMenuPage
  },

  data() {
    return {
      // not required as of now
      /* menu: [
          {
            name: 'About Us',
            routeName: 'aboutus',
            subMenu: []
          },
          {
            name: 'Services',
            routeName: 'services',
            subMenu: [
              {
                name: 'Digital Transformation',
                routeName: 'digitaltransformation',
                subMenu: [
                  {
                    name: 'Technology & Ecosystem Audit',
                    routeName: 'DTSubServicePage'
                  },
                  {
                    name: 'Digital Strategy',
                    routeName: 'DTSubServicePage'
                  },
                  {
                    name: 'Digital Marketing',
                    routeName: 'DTSubServicePage'
                  },
                  {
                    name: 'Data & Analytics',
                    routeName: 'DTSubServicePage'
                  },
                ]
              },

              {
                name: 'UI/UX & Design Thinking',
                routeName: 'uiuxDesign',
                subMenu: [
                  {
                    name: 'Branding',
                    routeName: 'UIUXSubServicePage'
                  },
                  {
                    name: 'UX Strategy',
                    routeName: 'UIUXSubServicePage'
                  },
                  {
                    name: 'Mobile & Web Design',
                    routeName: 'UIUXSubServicePage'
                  },
                ]
              },

              {
                name: 'Mobile Engineering',
                routeName: 'uiuxDesign',
                subMenu: [
                  {
                    name: 'Android-Development',
                    routeName: 'MESubServicePage'
                  },
                  {
                    name: 'IOS-Development',
                    routeName: 'MESubServicePage'
                  },
                  {
                    name: 'React Native-Development',
                    routeName: 'MESubServicePage'
                  },
                  {
                    name: 'Wearable-Development',
                    routeName: 'MESubServicePage'
                  },
                  {
                    name: 'Hybrid-Development',
                    routeName: 'MESubServicePage'
                  },
                ]
              },

              {
                name: 'Web Technology-Development',
                routeName: 'webTechnology',
                subMenu: [
                  {
                    name: 'Content Management Systems',
                    routeName: 'WTSubServicePage'
                  },
                  {
                    name: 'e-Commerce Platforms',
                    routeName: 'WTSubServicePage'
                  },
                  {
                    name: 'Custom Web Applications',
                    routeName: 'WTSubServicePage'
                  },
                ]
              },

              {
                name: 'Innovation',
                routeName: 'innovation',
                subMenu: [
                  {
                    name: 'Augmented & Virtual Reality',
                    routeName: 'INSubServicePage'
                  },
                  {
                    name: 'Machine Learning & AI',
                    routeName: 'INSubServicePage'
                  },
                  {
                    name: 'Internet of Things',
                    routeName: 'INSubServicePage'
                  },
                  {
                    name: 'Blockchain',
                    routeName: 'INSubServicePage'
                  },
                  {
                    name: 'Cybersecurity',
                    routeName: 'INSubServicePage'
                  },
                ]
              },

              {
                name: 'Enterprise Application-Development',
                routeName: 'enterpriseApplications',
                subMenu: [
                  {
                    name: 'Enterprise Resource Planning',
                    routeName: 'EPSubServicePage'
                  },
                  {
                    name: 'Point of Sale',
                    routeName: 'EPSubServicePage'
                  },
                  {
                    name: 'Customer Relationship Management',
                    routeName: 'EPSubServicePage'
                  },
                  {
                    name: 'Data Warehousing & Workflow Automation',
                    routeName: 'EPSubServicePage'
                  },
                  {
                    name: 'Business Intelligence',
                    routeName: 'EPSubServicePage'
                  },
                ]
              },

            ]
          },
          {
            name: 'Industries',
            routeName: 'aboutus',
            subMenu: [
              {
                name: 'Education',
                routeName: 'industrypage'
              }
            ]
          },
          {
            name: 'About Us',
            routeName: 'aboutus',
            subMenu: []
          },
          {
            name: 'About Us',
            routeName: 'aboutus',
            subMenu: []
          },
        ] */
    }
  },

  watch: {
    $route(to, from) {
      setTimeout(() => {
        this.$emit('CloseMenu')
      }, 100)

      if (to != from) {
        // this.$emit('CloseMenu')
      }
      // this.$emit('CloseMenu')
      // alert()
    }
  },

  mounted() {
    var that = this


    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
      return new RegExp('(^|\\s+)' + className + '(\\s+|$)')
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass

    if ('classList' in document.documentElement) {
      hasClass = function(elem, c) {
        return elem.classList.contains(c)
      }
      addClass = function(elem, c) {
        elem.classList.add(c)
      }
      removeClass = function(elem, c) {
        elem.classList.remove(c)
      }
    } else {
      hasClass = function(elem, c) {
        return classReg(c).test(elem.className)
      }
      addClass = function(elem, c) {
        if (!hasClass(elem, c)) {
          elem.className = elem.className + ' ' + c
        }
      }
      removeClass = function(elem, c) {
        elem.className = elem.className.replace(classReg(c), ' ')
      }
    }

    function toggleClass(elem, c) {
      var fn = hasClass(elem, c) ? removeClass : addClass
      fn(elem, c)
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
    }

    // transport
    if (typeof define === 'function' && define.amd) {
      // AMD
      define(classie)
    } else {
      // browser global
      window.classie = classie
    }

    /* Menu box overlay class helper */


    // $('html').css('overflow-y', 'hidden')
    // $('body').css('overflow-y', 'hidden')

    // Overlay
    // (function() {
    // http://stackoverflow.com/a/2450976
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }
      return array
    }

    var triggerBttn = document.getElementById('trigger-overlay'),
      overlay = document.querySelector('div.overlay'),
      closeBttn = overlay.querySelector('button.overlay-close'),
      paths = [].slice.call(overlay.querySelectorAll('svg > path')),
      pathsTotal = paths.length

    function toggleOverlay() {
      var cnt = 0

       shuffle(paths)

      if (classie.has(overlay, 'open')) {
        // that.$emit('CloseMenu')
        $('.menuItemsWrapper').hide()
        $('.menuFadedText').hide()
        $('.overlay-boxes svg path').css({
          // 'fill': 'rgba(0, 123, 255, 0.95)'
          fill: 'rgba(255, 255, 255, 0.95)'
        })

        classie.remove(overlay, 'open')
        classie.add(overlay, 'close')

        paths.forEach(function(p, i) {
          setTimeout(function() {
            ++cnt
            p.style.display = 'none'
            if (cnt === pathsTotal) {
              classie.remove(overlay, 'close')
              // Emit close menu
              that.$emit('CloseMenu')
            }
          }, i * 10)
        })
      } else if (!classie.has(overlay, 'close')) {
        classie.add(overlay, 'open')
        paths.forEach(function(p, i) {
          setTimeout(function() {
            ++cnt
            p.style.display = 'block'

            if (cnt === pathsTotal) {
              $('.overlay-boxes svg path').css({
                fill: '#fff'
              })
              $('.menuItemsWrapper').css({
                display: 'block'
              })
              $('.menuFadedText').css({
                display: 'block'
              })
            }
          }, i * 10)
        })
      }
    }

    // not needed
    // triggerBttn.addEventListener( 'click', toggleOverlay );
    closeBttn.addEventListener('click', toggleOverlay)

    // On clik menu - close menu
    $('.link').click(function() {
      that.$emit('CloseMenu')
    })

    //trigger menu pone
    if (that.showMenu == true) {
      toggleOverlay()
    }
    // })();
  }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Open+Sans:800'); */

.menuPageWrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 15;
  font-family: 'Noto Sans', sans-serif !important;
}

/* Overlay */
/* Overlay style */
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* background: rgba(0, 123, 255, 0.95); */
  background: rgba(255, 255, 255, 0.9);
}

/* Overlay closing cross */
.overlay .overlay-close {
  width: 80px;
  height: 80px;
  position: absolute;
  right: 0px;
  top: 0px;
  overflow: hidden;
  border: none;
  /* background: url(../img/cross.png) no-repeat center center; */
  background: no-repeat center center;
  /* text-indent: 200%; */
  color: transparent;
  color: #1c1c1c;
  outline: none;
  z-index: 100;
  cursor: pointer;
  text-align: center;
  font-size: 2rem;
}

/* Menu style */
.overlay nav {
  text-align: center;
  position: relative;
  top: 50%;
  height: 60%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.overlay ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  height: 100%;
  position: relative;
}

.overlay ul li {
  display: block;
  height: 20%;
  height: calc(100% / 5);
  min-height: 54px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.overlay ul li a {
  font-size: 54px;
  font-weight: 300;
  display: block;
  color: #fff;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}

.overlay ul li a:hover,
.overlay ul li a:focus {
  color: #f0f0f0;
}

/* Effects */
.overlay-boxes {
  background: transparent;
  visibility: hidden;
  -webkit-transition: visibility 0s 0.8s;
  transition: visibility 0s 0.8s;
}

.overlay-boxes.open {
  visibility: visible;
  -webkit-transition: none;
  transition: none;
}

.overlay-boxes svg {
  position: absolute;
  top: 0;
  left: 0;
}

.overlay-boxes svg path {
  /* fill: rgb(0, 123, 255); */
  fill: rgb(255, 255, 255);
  display: none;
}

.overlay-boxes nav,
.overlay-boxes .overlay-close {
  opacity: 0;
  -webkit-transition: opacity 0.5s 0.8s;
  transition: opacity 0.5s 0.8s;
}

.overlay-boxes.open nav,
.overlay-boxes.open .overlay-close {
  opacity: 1;
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
}

.overlay-boxes.close nav,
.overlay-boxes.close .overlay-close {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

@media screen and (max-height: 30.5em) {
  .overlay nav {
    height: 70%;
    font-size: 34px;
  }
  .overlay ul li {
    min-height: 34px;
  }
}
/* Overlay */

.menuItemsWrapper {
  position: relative;
  /* top: 30px; */
  max-width: 95%;
  width: 95%;
  /* opacity: 0; */
  display: none;
}

.menuItems h2 {
  position: relative;
  color: #1c1c1c;
  margin: 0;
  font-weight: 100;
  transition: all 0.5s;
  width: 10px;
  z-index: 1;
  padding: 2rem;
  padding-left: 0;
  height: 100px;
  /* font-family: AirbnbCereal; */
}

.menuItems h2 span {
  transition: all 0.5s;
  font-size: 2.3rem;
  font-weight: 900;
  text-transform: uppercase;
  position: absolute;
  width: 450px;
  display: block;
}

.subMenuItems {
  position: absolute;
  display: none;
  left: 280px;
  top: 0;
  background: rgba(255, 255, 255, 0.5);
  padding: 2rem;
  width: 75%;
  width: 1000px;
  /* transform: translateX(300%); */
  z-index: 2;
}

.subMenuItems p {
  font-size: 1rem;
  margin: 0;
  padding: 0;
  font-weight: 400;
  /* color: #7c7c7c; */
  color: #000;
  padding: 0.2rem 0;
}

.subMenuItem {
  margin-bottom: 1rem;
  font-family: Lato;
}

.subMenuItem h5 {
  font-size: 1.2rem;
}

.menuItems h2:hover .subMenuItems {
  display: block;
}
.menuItems h2:hover .subMenuItems:hover {
  display: block !important;
}

.menuItems h2:hover span {
  display: inline-block;
  padding-left: 2rem;
  color: #006ada;
}

.menuItems h2:before {
  content: '';
  position: absolute;
  left: -500px;
  top: 50%;
  width: 50px;
  height: 2px;
  /* background: #1c1c1c; */
  background: #006ada;
  transform: translate(-100%, -50%);
  /* display: none; */
  transition: all 0.5s;
}

.menuItems h2:hover:before {
  display: block;
  left: 0;
}
.menuFadedText {
  display: none;
  position: absolute;
  /* top: 0; */
  right: 0;
  bottom: 0rem;
  font-size: 12rem;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 10rem;
  text-align: right;
  letter-spacing: -10px;
  /* width: 100%; */
  /* height: 100%; */
  color: #eee;
  /* text-shadow: 0px 0px 1px gray; */
  /* filter: blur(3px); */
}

.link:hover {
  color: #006ada !important;
}

h5 > a {
  color: #006ada !important;
}

.responsiveMenuPage {
  display: none;
}

.menuFadedText,
.menuItemsWrapper {
  display: block;
}

@media (max-width: 560px) {
  .responsiveMenuPage {
    display: block !important;
  }

  .menuFadedText,
  .menuItemsWrapper {
    display: none !important;
  }
}
</style>
