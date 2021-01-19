<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <div v-swiper:test="swiperOption">
          <div class="swiper-wrapper" v-lazy-container="{ selector: 'img' }">
            <div class="swiper-slide" v-for="(item, i) in clients" :key="i" >
              <img
                class="responsiveImg wow fade-in-bottom"
                :data-src="getImgUrl(item.image)"
                alt="clients"
              >
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        // speed: 1000,
        // loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
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
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },

      clients: [
        {
          image: 'clients/Frame 4.png'
        },
        {
          image: 'clients/Frame 4.1.png'
        },
        {
          image: 'clients/Frame 4.2.png'
        }
      ]
    }
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/images/" + pic);
    },
  }
}
</script>
