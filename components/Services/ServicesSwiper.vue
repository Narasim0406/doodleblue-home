<template>
  <div>
    <section class="servicesSwiperWrapper">
      <b-container fluid>
        <h2 class="wow fade-in-bottom">Our Services</h2>
        <div
          data-relative-input="true"
          id="titleScene2"
          class="sectionFadedTitle wow fade-in-bottom"
          data-wow-delay="0.5s"
          data-wow-offset="250"
        >
          <h3 class="h1" data-depth="-0.1">Services</h3>
        </div>

        <b-row>
          <b-col md="12">
            <div v-swiper:test="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in services" :key="i">
                  <ServiceSwiperCard :service="item"/>
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="swiper-pagination" slot="pagination"></div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import ServiceSwiperCard from '@/components/Services/ServiceSwiperCard.vue'

export default {
  components: {
    ServiceSwiperCard
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        mousewheel: {
          releaseOnEdges: true
        },
        // loop: true,
        speed: 300,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
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
            spaceBetween: 10,
            freeMode: false,
            mousewheel: {
              releaseOnEdges: true
            },
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            freeMode: false,
            mousewheel: {
              releaseOnEdges: true
            },
          }
        }
      },

      services: [
        {
          name: 'Digital<br>Transformation',
          // icon: "ve1.png",
          icon: 'db__Main services-digital transformation.png',
          route: 'digitaltransformation',
          subServiceRoute: 'DTSubServicePage',
          subServices: [
            {
              title: 'Technology & Ecosystem Audit',
              route: 'Technology-Ecosystem-Audit'
            },
            { title: 'Digital Strategy', route: 'Digital-Strategy' },
            { title: 'Digital Marketing', route: 'Digital-Marketing' },
            { title: 'Digital Analytics', route: 'data-analytics' }
          ]
        },
        {
          name: 'UI/UX &<br>Design Thinking',
          // icon: "ve2.png",
          icon: 'db__Main services-UX strategy.png',
          route: 'uiuxDesign',
          subServiceRoute: 'UIUXSubServicePage',
          subServices: [
            { title: 'Branding', route: 'Branding' },
            { title: 'UX Strategy', route: 'UX-Strategy' },
            { title: 'Mobile & Web Design', route: 'Mobile-Web-Design' }
          ]
        },
        {
          name: 'Mobile<br>Engineering',
          icon: 'db__Main services-mobile engineering.png',
          route: 'mobileEngineering',
          subServiceRoute: 'MESubServicePage',
          subServices: [
            { title: 'Android Development', route: 'Android-Development' },
            { title: 'iOS Development', route: 'iOS-Development' },
            {
              title: 'React Native Development',
              route: 'React-Native-Development'
            },
            { title: 'Wearable Development', route: 'Wearable-Development' },
            { title: 'Hybrid Development', route: 'Hybrid-Development' }
          ]
        },
        {
          name: 'Web Technology<br>Development',
          icon: 'db__Main services-web technology dev.png',
          route: 'webTechnology',
          subServiceRoute: 'WTSubServicePage',
          subServices: [
            {
              title: 'Content Management Systems',
              route: 'Content-Management-Systems'
            },
            { title: 'e-Commerce Platforms', route: 'e-Commerce-Platforms' },
            {
              title: 'Custom Web Applications',
              route: 'Custom-Web-Applications'
            }
          ]
        },
        {
          name: 'Innovation<br>Technology',
          icon: 'db__Main services-innovation.png',
          route: 'innovation',
          subServiceRoute: 'INSubServicePage',
          subServices: [
            {
              title: 'Augumented & Virtual Reality',
              route: 'Augumented-Virtual-Reality'
            },
            { title: 'Machine Learning & AI', route: 'Machine-Learning-AI' },
            { title: 'Internet of Things', route: 'Internet-of-Things' },
            { title: 'Blockchain', route: 'Blockchain' },
            { title: 'Cybersecurity', route: 'Cybersecurity' }
          ]
        },
        {
          name: 'Enterprise App <br>Development',
          icon: 'db__Main services-enterprise application dev.png',
          route: 'enterpriseApplications',
          subServiceRoute: 'EPSubServicePage',
          subServices: [
            'Enterprise Resource Planning',
            'Point of Sale',
            'Customer Relation Management',
            // "CRM",
            // "Data Warehousing & Workflow Automation",
            'Data & Workflow Automation',
            'Business Intelligence'
          ],
          subServices: [
            {
              title: 'Enterprise Resource Planning',
              route: 'Enterprise-Resource-Planning'
            },
            { title: 'Point of Sale', route: 'Point-of-Sale' },
            {
              title: 'Customer Relation Management',
              route: 'Customer-Relation-Management'
            },
            {
              title: 'Data & Workflow Automation',
              route: 'Data-Workflow-Automation'
            },
            { title: 'Business Intelligence', route: 'Business-Intelligence' }
          ]
        }
      ]
    }
  },

  computed: {
    swiper() {
      return this.$refs.servicesSwiper.swiper
    }
  },

  methods: {},

  mounted() {
    setTimeout(() => {
      var titleScene2 = document.getElementById('titleScene2')
      var parallaxInstanceTitle = new Parallax(titleScene2)
    }, 100)
  }
}
</script>

<style scoped>
.servicesSwiperWrapper {
  padding-top: 1rem;
}

.swiper-container {
  width: 100%;
  height: 100%;
  padding-left: 6.5rem;
}

.swiper-slide {
  min-width: 30%;
  max-width: 30%;
  padding: 10px 20px;
  /* border: 0.5px solid gray; */
}

.swiper-slide:last-child {
  min-width: 30%;
  max-width: 33%;
}

.swiper-container {
  padding: 0 32px;
  /* padding-bottom: 30px; */
}

.swiper-slide.swiper-slide-next {
  transition: all 0.5s;

  /* transform: scale(1.1); */
  box-shadow: 1px 5px 50px rgba(0, 0, 0, 0.1);
  /* box-shadow: none; */
}

/* .swiper-slide.swiper-slide-next:hover {
    box-shadow: 1px 5px 50px rgba(0,0,0,0);
} */
.swiper-slide.swiper-slide:hover {
  box-shadow: 1px 5px 50px rgba(0, 0, 0, 0.1);
}
/* .swiper-slide.swiper-slide :not(:hover) {
    box-shadow: none;
    opacity: 0.3;
} */

@media (max-width: 575.98px) {
  .swiper-slide.swiper-slide-next {
    box-shadow: 1px 5px 50px rgba(0, 0, 0, 0);
  }

  .swiper-slide.swiper-slide:hover {
    box-shadow: 1px 5px 50px rgba(0, 0, 0, 0);
  }

  .swiper-slide {
    padding: 10px;
  }

  .serviceSwiperCardLink.link {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08) !important;
  }

  .swiper-slide:last-child {
    width: 100% !important;
    max-width: 100% !important;
  }

  .servicesSwiperWrapper {
    margin-bottom: 2rem;
  }
}
</style>
