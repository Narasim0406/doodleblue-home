<template>
  <div>
    <section class="industriesSwiperWrapper">
      <b-container fluid>
        <!-- <h2 class="wow fade-in-bottom">
                    Industries
        </h2>-->

        <div
          data-relative-input="true"
          id="titleSceneIndustry"
          class="sectionFadedTitle woww fade-in-bottom"
          data-wow-delay="0.5s"
          dataa-wow-offset="250"
        >
          <h3 class="h1" data-depth="-0.1">Industries</h3>
        </div>

        <b-row>
          <b-col md="12">
            <div
              v-swiper:test="computeCenter == false ? swiperOption : swiperOptionCentered"
              ref="industriesSwiper"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in industries" :key="i">
                  <industriesSwiperCard :industry="item" :index="i"/>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import industriesSwiperCard from '@/components/Industries/industriesSwiperCard.vue'
import SwiperNavigation from '@/components/SwiperNavigation.vue'

export default {
  components: {
    industriesSwiperCard,
    SwiperNavigation
  },

  data() {
    return {
      swiperOptionCentered: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        // loop: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        freeMode: true,
        mousewheel: {
          releaseOnEdges: true
        },
        wrapperClass: 'swiper-wrapper-centered',
        navigation: {
          nextEl: '#industriesRight',
          prevEl: '#industriesLeft'
        },

        breakpoints: {
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
          640: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
          320: {
            slidesPerView: 'auto',
            spaceBetween: 20
          }
        }
      },

      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        // loop: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        wrapperClass: 'swiper-wrapper',
        navigation: {
          nextEl: '#industriesRight',
          prevEl: '#industriesLeft'
        },

        breakpoints: {
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
          640: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
          320: {
            slidesPerView: 'auto',
            spaceBetween: 20
          }
        }
      },

      industries: [
        {
          title: 'Finance',
          // image: "finance.jpg",
          image: '8.jpg',
          route: 'finance'
        },
        {
          title: 'Hospitality',
          // image: "realestate.jpg",
          image: '4.jpg',
          route: 'hospitality'
        },
        {
          title: 'Retail',
          // image: "banking.jpg",
          image: '111.jpg',
          route: 'retail'
        },
        {
          title: 'Transport',
          image: 'transport.png',
          // image: "222.jpg",
          route: 'transport'
        },
        {
          title: 'Fashion',
          // image: "fashion.jpg",
          image: '7.jpg',
          route: 'fashion'
        },
        {
          title: 'Education',
          // image: "education1.jpg",
          image: '6.jpg',
          route: 'education'
        },
        {
          title: 'Telecom',
          // image: "telecom.jpg",
          image: '11.jpg',
          route: 'telecom'
        },
        {
          title: 'Healthcare',
          // image: "healthcare_v1.png",
          image: '5.jpg',
          route: 'healthcare'
        }
      ]
    }
  },

  computed: {
    swiper() {
      return this.$refs.industriesSwiper.swiper
    },

    computeCenter() {
      if (process.client) {
        let size = window.innerWidth
        // if (size > 1440) {
        if (size > 1533) {
          return true
        } else {
          return false
        }
      }
    }
  },

  methods: {},

  mounted() {
    setTimeout(() => {
      var titleScene = document.getElementById('titleSceneIndustry')
      var parallaxInstanceTitle = new Parallax(titleScene)
    }, 100)
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  /* padding-left: 6.5rem; */
}

.swiper-slide {
  width: 200px;
  height: 400px;
  /* border: 0.5px solid gray; */
  /* display: flex; */
}

/* .swiper-slide-active {
  background-color: blue;
  background-blend-mode: darken;
}

.swiper-slide-next.industriesCardArrow {
  display: block;
} */

.sectionFadedTitle h1 {
  color: rgba(238, 238, 238, 0.443);
}
</style>
