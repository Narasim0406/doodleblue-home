<template>
  <div>
    <section class="recentWorksSwiperWrapper">
      <b-container fluid>
        <h2 class="wow fade-in-bottom">Recent Work</h2>

        <div
          data-relative-input="true"
          id="titleScene3"
          class="sectionFadedTitle wow fade-in-bottom"
          data-wow-delay="0.5s"
          data-wow-offset="250"
        >
          <h3 class="h1" data-depth="-0.1">Work</h3>
        </div>

        <b-row>
          <b-col md="12">
            <div v-swiper:test="swiperOption">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in recentWorks" :key="i">
                  <RecentWorksSwiperCard :recentWork="item"/>
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <SwiperNavigation navigateID="recentWorks"/>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import RecentWorksSwiperCard from '@/components/RecentWorks/RecentWorksSwiperCard.vue'
import SwiperNavigation from '@/components/SwiperNavigation.vue'

export default {
  components: {
    RecentWorksSwiperCard,
    SwiperNavigation
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // mousewheelControl: true,
        // freeMode: true,
         mousewheel: {
          releaseOnEdges: true
        },
        // loop: true,
        speed: 300,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        navigation: {
          nextEl: '#recentWorksRight',
          prevEl: '#recentWorksLeft'
        },

        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },

      recentWorks: [
        {
          title: 'Business Enhancement For Healthcare Systems',
          service: 'Digital Transformation',
          // image: "insight_img.png",
          image: 'business-enhancement-for-healthcare-square.jpg',
          routeParam: 'healthcare'
        },
        {
          title: 'Inception of Brand Establishment for Educational Institute',
          service: 'Enterprise Application Development ',
          // image: "buildHelpImage-1.png",
          image: 'inception-of-brand-establishment-square.jpg',
          routeParam: 'education'
        },
        {
          title: 'Increased Customer Engagement For Fashion Houses',
          service: 'Digital Transformation',
          // image: "buildHelpImage-2.png",
          image: 'Increased-customer-engament-for-fashion-houses-square.jpg',
          routeParam: 'fashion'
        },
        {
          title: 'Seamless & agile CRM Portal for Leisure Line',
          service: 'UI/UX & Design Thinking',
          image: 'Seamless-and-agile-CRM-square.jpg',
          routeParam: 'hospitality'
        },
        {
          title: 'One-touch application for transport facility',
          service: 'Mobile Engineering',
          image: 'One-touch-application-for-transport-square.jpg',
          routeParam: 'transport'
        },
        {
          title: 'Multiple Customizable Services For Finance Powerhouse',
          service: 'Web Technology Development',
          image: 'Multiple-customisable-square.jpg',
          routeParam: 'finance'
        },
        {
          title: 'Connecting millions with customer insights',
          service: 'Enterprise Application Development ',
          image: 'Connection-millions-with..-square.jpg',
          routeParam: 'telecom'
        },
        {
          title: 'Riveting Shopping Experience With Chatbot',
          service: 'Innovation',
          image: 'Reviting-shopping-experience-with-chat-bot-square.jpg',
          routeParam: 'retail'
        }
      ]
    }
  },

  computed: {
    swiper() {
      return this.$refs.recentWorksSwiper.swiper
    }
  },

  methods: {},

  mounted() {
    setTimeout(() => {
      var titleScene3 = document.getElementById('titleScene3')
      var parallaxInstanceTitle = new Parallax(titleScene3)
    }, 100)
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  /* padding-left: 6.5rem; */
  padding-left: 1.5rem;
}

.swiper-slide {
  width: 300px;
  height: 300px;
  /* border: 0.5px solid gray; */
}

/* .swiper-slide-active {
  background-color: blue;
  background-blend-mode: darken;
}

.swiper-slide-next.recentWorksCardArrow {
  display: block;
} */
</style>
