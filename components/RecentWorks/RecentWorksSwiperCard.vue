<template>
  <!-- <div class="h-100" style="overflow: hidden; transform-style: preserve-3d;"> -->
  <nuxt-link
    class="link w-100 h-100"
    :to="{name: 'casestudy-id', params: {id: recentWork.routeParam}}"
  >
    <div
      class="recentWorksSwiperCard wow fadeInRight tilt_swiper_slide"
      :style="{'background-image': 'url('+$getImgUrl(recentWork.image)+')'}"
    >
      <div class="rwOverlay"></div>
      <div class="content">
        <h5>{{ recentWork.title }}</h5>
        <h6>{{ recentWork.service }}</h6>
      </div>
    </div>
  </nuxt-link>
  <!-- </div> -->
</template>

<script>
import VanillaTilt from 'vanilla-tilt'
export default {
  props: ['recentWork'],

  mounted() {
    setTimeout(() => {
      const elements = document.querySelectorAll('.tilt_swiper_slide')
      // console.log('vanila elements', elements);
      const options = {
        reverse: false, // reverse the tilt direction
        max: 15, // max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 300, // Speed of the enter/exit transition
        transition: true, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: true, // If the tilt effect has to be reset on exit.
        easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
        glare: true, // if it should have a "glare" effect
        'max-glare': 0.5, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
        'glare-prerender': false // false = VanillaTilt creates the glare elements for you, otherwise
        // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
      }
      elements.forEach(element => {
        var vt = new VanillaTilt(element, options)
        // console.log('vanila elem', vt, element);
      })
    }, 100)
  }
}
</script>

<style scoped>
.recentWorksSwiperCard {
  position: relative;
  /* transform-style: preserve-3d !important; */
  /* transform: translateZ(30px) */
  overflow: hidden;
}

.recentWorksSwiperCard .rwOverlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  /* transition: all 0.5s; */
}

.recentWorksSwiperCard:hover .rwOverlay {
  background: rgba(0, 0, 0, 0);
}

.recentWorksSwiperCard .content {
  /* position: relative; */
  z-index: 3;
}

.recentWorksSwiperCard div {
  /* transform-style: preserve-3d;
    transform: translateZ(230px) */
}

.recentWorksSwiperCard h5 {
  /* transform: translateZ(30px) */
}

.recentWorksSwiperCard h6 {
  /* transform: translateZ(20px) */
}

.recentWorksSwiperCard i {
  /* transform: translateZ(20px) */
}
</style>
