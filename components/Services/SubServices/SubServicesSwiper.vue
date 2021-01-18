<template>
  <div>
    <section class="SubservicesSwiperWrapper">
      <b-container fluid>
        <b-row>
            <!-- <span v-show="true">{{ computeSubServiceCount }}</span> -->
          <b-col md="12">

            <template>
               <div           
              v-swiper:test="swiperOption"
              ref="servicesSwiper"
            >
              <div :class="{
                'swiper-wrapper swiper-wrapper-centered':computeSubServiceCount === true,
                'swiper-wrapper':computeSubServiceCount === false}">
                <div class="swiper-slide" v-for="(item, i) in subServices[service]" :key="i">
                  <SubServiceSwiperCard :service="item"/>
                </div>
              </div>
            </div>
            </template>          

          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import SubServiceSwiperCard from '@/components/Services/SubServices/SubServiceSwiperCard.vue'
import SwiperNavigation from '@/components/SwiperNavigation.vue'

export default {
  props: ['service'],

  components: {
    SubServiceSwiperCard,
    SwiperNavigation
  },

  data() {
    return {
      swiperOptionCentered: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        wrapperClass: 'swiper-wrapper-centered',
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        navigation: {
          nextEl: '#servicesRight',
          prevEl: '#servicesLeft'
        },

        breakpoints: {
          1024: {
            // slidesPerView: 1,
            spaceBetween: 40
          },
          768: {
            // slidesPerView: 1,
            spaceBetween: 30
          },
          640: {
            // slidesPerView: 1,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },

      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 300,
        freeMode: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        navigation: {
          nextEl: '#servicesRight',
          prevEl: '#servicesLeft'
        },

        breakpoints: {
          1024: {
            // slidesPerView: 1,
            spaceBetween: 40
          },
          768: {
            // slidesPerView: 1,
            spaceBetween: 30
          },
          640: {
            // slidesPerView: 1,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },

      subServices: {
        DT: [
          {
            name: 'Digital Marketing',
            icon: 'db__Digital transformation-digital marketing.png',
            route: 'digitaltransformation',
            routeParam: 'digital-marketing',
            code: 'DT'
          },
          {
            name: 'Digital Strategy',
            icon: 'db__Digital transformation-digital strategy.png',
            route: 'digitaltransformation',
            routeParam: 'digital-strategy',
            code: 'DT'
          },
          {
            name: 'Data & Analytics',
            icon: 'db__Digital transformation-data analytics.png',
            route: 'digitaltransformation',
            routeParam: 'data-analytics',
            code: 'DT'
          },
          {
            name: 'Technology & Ecosystem Audit',
            icon: 'db__Digital transformation-technology ecosytem audit.png',
            route: 'digitaltransformation',
            routeParam: 'technology-ecosystem-audit',
            code: 'DT'
          }
        ],
        UIUX: [
          {
            name: 'Branding',
            icon: 'db__ui ux-branding.png',
            route: 'uiuxdesign',
            routeParam: 'branding',
            code: 'UIUX'
          },
          {
            name: 'UX Strategy',
            icon: 'db__ui ux-ux strategy.png',
            route: 'uiuxdesign',
            routeParam: 'ux-strategy',
            code: 'UIUX'
          },
          {
            name: 'Mobile & Web Design',
            icon: 'db__ui ux-mobile & web design.png',
            route: 'uiuxdesign',
            routeParam: 'mobile-web-design',
            code: 'UIUX'
          }
        ],
        ME: [
          {
            name: 'Android Development',
            icon: 'db__mobile engineering- android dev.png',
            route: 'mobileengineering',
            routeParam: 'android-development',
            code: 'ME'
          },
          {
            name: 'iOS Development',
            icon: 'db__mobile engineering-ios dev.png',
            route: 'mobileengineering',
            routeParam: 'IOS-Development',
            code: 'ME'
          },
          {
            name: 'React Native Development',
            icon: 'db__mobile engineering-react native.png',
            route: 'mobileengineering',
            routeParam: 'React-Native-Development',
            code: 'ME'
          },
          {
            name: 'Wearable Development',
            icon: 'db__mobile engineering-wearble dev.png',
            route: 'mobileengineering',
            routeParam: 'Wearable-Development',
            code: 'ME'
          },
          {
            name: 'Hybrid Development',
            icon: 'db__mobile engineering-hybrid dev.png',
            route: 'mobileengineering',
            routeParam: 'Hybrid-Development',
            code: 'ME'
          }
        ],
        WT: [
          {
            name: 'Content Management Systems',
            icon: 'db__web technology-CMS.png',
            route: 'webtechnology',
            routeParam: 'Content-Management-Systems',
            code: 'WT'
          },
          {
            name: 'e-Commerce Platforms',
            icon: 'db__web technology-ecommerce.png',
            route: 'webtechnology',
            routeParam: 'e-Commerce-Platforms',
            code: 'WT'
          },
          {
            name: 'Custom Web Applications',
            icon: 'db__web technology-custom web application.png',
            route: 'webtechnology',
            routeParam: 'Custom-Web-Applications',
            code: 'WT'
          }
        ],
        IN: [
          {
            name: 'Augumented & Virtual Reality',
            icon: 'db__Innovation-computer vision AR & VR.png',
            route: 'innovation',
            routeParam: 'Augumented-Virtual-Reality',
            code: 'IN'
          },
          {
            name: 'Machine Learning & AI',
            icon: 'db__Innovation-machine learning & AI.png',
            route: 'innovation',
            routeParam: 'Machine-Learning-AI',
            code: 'IN'
          },
          {
            name: 'Internet of Things',
            icon: 'db__Innovation-internet of things.png',
            route: 'innovation',
            routeParam: 'Internet-of-Things',
            code: 'IN'
          },
          {
            name: 'Blockchain',
            icon: 'db__Innovation-blockchain.png',
            route: 'innovation',
            routeParam: 'Blockchain',
            code: 'IN'
          },
          {
            name: 'Cybersecurity',
            icon: 'db__Innovation-cybersecurity.png',
            route: 'innovation',
            routeParam: 'Cybersecurity',
            code: 'IN'
          }
        ],
        EP: [
          {
            name: 'Enterprise Resource Planning',
            icon: 'db__Enterprise application-ERP.png',
            route: 'enterpriseapplications',
            routeParam: 'Enterprise-Resource-Planning',
            code: 'EP'
          },
          {
            name: 'Point of Sale',
            icon: 'db__Enterprise application-POS.png',
            route: 'enterpriseapplications',
            routeParam: 'Point-of-Sale',
            code: 'EP'
          },
          {
            name: 'Customer Relation Management',
            icon: 'db__Enterprise application-CRM.png',
            route: 'enterpriseapplications',
            routeParam: 'Customer-Relation-Management',
            code: 'EP'
          },
          {
            name: 'Data Warehousing & Workflow Automation',
            icon:
              'db__Enterprise application-data warhousing workflow automation.png',
            route: 'enterpriseapplications',
            routeParam: 'Data-Workflow-Automation',
            code: 'EP'
          },
          {
            name: 'Business Intelligence',
            icon: 'db__Enterprise application-business intelligence.png',
            route: 'enterpriseapplications',
            routeParam: 'Business-Intelligence',
            code: 'EP'
          }
        ]
      }

      /* services: [
                {
                    name: "Digital<br>Transformation",
                    icon: "ve1.png",
                    route: "digitalTransformation",
                    subServices: [
                        {
                            name: "Technology & Ecosystem Audit",
                            icon: "ve1.png",
                            route: "digitalTransformation",
                        },
                        {
                            name: "Digital Strategy",
                            icon: "ve1.png",
                            route: "digitalTransformation",
                        },
                        {
                            name: "Digital Marketing",
                            icon: "ve1.png",
                            route: "digitalTransformation",
                        },
                        {
                            name: "Data & Analytics",
                            icon: "ve1.png",
                            route: "digitalTransformation",
                        },
                    ]
                },
                {
                    name: "UI/UX &<br>Design Thinking",
                    icon: "ve2.png",
                    route: "designThinking",
                    subServices: [
                        "Branding",
                        "UX Strategy",
                        "Mobile & Web Design"
                    ]
                },
                {
                    name: "Mobile<br>Engineering",
                    icon: "ve3.png",
                    route: "digitalTransformation",
                    subServices: [
                        "Android Development",
                        "IOS Development",
                        "React Native Development",
                        "Wearable Development",
                        "Hybrid Development",
                    ]
                },
                {
                    name: "Web Technology<br>Development",
                    icon: "ve4.png",
                    route: "digitalTransformation",
                    subServices: [
                        "Content Management Systems",
                        "e-Commerce Platforms",
                        "Custom Web Applications"
                    ]
                },
                {
                    name: "Innovation<br>Technology",
                    icon: "ve5.png",
                    route: "digitalTransformation",
                    subServices: [
                        "Augumented & Virtual Reality",
                        "Machine Learning & AI",
                        "Internet of Things",
                        "Blockchain",
                        "Cybersecurity"
                    ]
                },
                {
                    name: "Enterprise App <br>Development",
                    icon: "ve6.png",
                    route: "digitalTransformation",
                    subServices: [
                        "Enterprise Resource Planning",
                        "Point of Sale",
                        "Customer Relation Management",
                        "Data Warehousing & Workflow Automation",
                        "Business Intelligence"
                    ]
                },
            ] */
    }
  },

  computed: {
    swiper() {
      return this.$refs.servicesSwiper.swiper
    },

     computeSubServiceCount() {
      // if (process.client) {
        var count = this.subServices[this.service].length
        // var size = window.innerWidth
        // console.log('__COUT__',count)
        if (count==3) {
          // $('.swiper-wrapper-centered').css({
          //   'justify-content': 'center'
          // })
          return true
        } else {
          return false
        }

    }
  }
}
</script>

<style scoped>
.swiper-wrapper-centered .swiper-slide{
  margin-right: 30px;
}
.SubservicesSwiperWrapper {
  margin-top: -180px;
  position: relative;
  z-index: 4;
}

.swiper-container {
  width: 100%;
  height: 100%;
  padding-left: 6.5rem;
}

.swiper-slide {
  width: 350px;
  box-shadow: 1px 5px 50px rgba(0, 0, 0, 0.1);
}
.swiper-container {
  padding: 3rem 2rem;
  /* padding-bottom: 30px; */
}

.swiper-slide.swiper-slide-next {
  transition: all 0.5s;

  /* transform: scale(1.1); */
  box-shadow: 1px 5px 50px rgba(0, 0, 0, 0.1);
}

/* .swiper-slide.swiper-slide-next:hover {
    box-shadow: 1px 5px 50px rgba(0,0,0,0);
} */
.swiper-slide.swiper-slide:hover {
  box-shadow: 1px 5px 50px rgba(0, 0, 0, 0.1);
}

@media (max-width: 575.98px) {
  .swiper-slide {
    width: 300px;
    box-shadow: 1px 5px 50px rgba(0, 0, 0, 0) !important;
  }

  .subServiceTitle h3 {
    font-size: 1.3rem;
  }

  .swiper-slide.swiper-slide-next {
    box-shadow: 1px 5px 50px rgba(0, 0, 0, 0) !important;
  }

  .swiper-slide.swiper-slide:hover {
    box-shadow: 1px 5px 50px rgba(0, 0, 0, 0);
  }

  .swiper-slide {
    padding: 10px;
  }

  .SubserviceSwiperCardLink.link {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08) !important;
  }

  .swiper-slide:last-child {
    width: 100% !important;
    max-width: 100% !important;
  }
}
</style>
