
<template>
  <div>
    <!-- :style="{'background-image': 'url('+$getImgUrl('architectural-design-architecture-buildings-830891.jpg')+')'}" -->
    <section
      class="serviceBannerWrapper"
      :style="{'background-image': 'url('+$getImgUrl('sample.png')+')'}"
    >
      <div class="bannerOverlay"></div>
      <b-container class="h-100">
        <ServiceDropdown :show.sync="showDropdown" @close="toggleDropdown" />
        <b-row align-v="center" class="h-100">
          <b-col md="12" data-relative-input="true" id="bannerScene">
            <h3
              @click="toggleDropdown"
              class="d-inline-block block_reveal_effect block_reveal_effect_delay_02 dark"
            >
              <div>
                ENTERPRISE APPLICATION DEVELOPMENT
                <span style="padding: 0 1rem;">
                  <i class="fas fa-chevron-down"></i>
                </span>
              </div>
            </h3>
            <br />
            <h1 data-depth="0.2" class="d-inline-block block_reveal_effect dark">
              <div class="d-inline-block">AUTOMATE BUSINESS PROCESS</div>
            </h1>
            <div
              data-depth="-0.5"
              class="bannerLogoWrapper wow fadeInLeft"
              data-wow-delay="0.5s"
              v-lazy-container="{ selector: 'img' }"
            >
              <img
                :data-src="require('@/assets/images/enterprise banner logo.png')"
                alt="doodleblue logo"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>

      <!-- <div style="position:relative" classs="wow fadeInUp" data-wow-offset="0">
                <div class="scrollDownIndicator wow fadeInDown" data-wow-delay="2s" data-wow-offset="0">
                    <img src="@/assets/images/scroll.png" alt="scroll">
                </div>
      </div>-->
    </section>
  </div>
</template>

<script>
import ServiceDropdown from '@/components/Services/ServiceDropdown.vue'

export default {
  components: {
    ServiceDropdown
  },

  data() {
    return {
      showDropdown: false
    }
  },

  methods: {
    toggleDropdown() {
      // alert()
      this.showDropdown = !this.showDropdown
    }
  },

  mounted() {
    // var scene = document.getElementById('bannerScene');
    // var parallaxInstance = new Parallax(scene);
  }
}
</script>

<style scoped>
.serviceBannerWrapper {
  position: relative;
  z-index: 3;
  width: 100%;
  min-height: 620px;
  height: 100vh;
  background-size: cover;
  background-position: center;
  /* background-color: #006ada;
  background-blend-mode: hard-light; */
  /* background-color: rgba(0, 0, 0, 0.3); */
  background-color: rgba(250, 250, 250, 0.8);
  background-blend-mode: overlay;

  /* background-image: url('@/assets/images/aboutbanner.jpg'); */

  /* background-color: transparent; */
  /* background-image: linear-gradient(0deg, transparent 24%, rgba(220, 220, 220, .2) 25%, rgba(220, 220, 220, .2) 26%, transparent 27%, transparent 74%, rgba(220, 220, 220, .2) 75%, rgba(220, 220, 220, .2) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(220, 220, 220, .2) 25%, rgba(220, 220, 220, .2) 26%, transparent 27%, transparent 74%, rgba(220, 220, 220, .2) 75%, rgba(220, 220, 220, .2) 76%, transparent 77%, transparent);
  background-size:100px 100px; */

  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC')
    repeat 0 0;

  /* background-image: url("type10_2"); */

  animation: bg-scrolling-reverse 3s infinite;
  /* IE 10+ */
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
}

.serviceBannerWrapper h1 {
  width: 80% !important;
  font-size: 4rem;
  font-weight: 900;
  /* color: #fff; */
  text-transform: uppercase;
}

.serviceBannerWrapper h1 span {
  font-weight: 900;
  text-transform: lowercase;
}

.serviceBannerWrapper h3 {
  font-size: 1.5rem;
  /* font-weight: 600; */
  /* color: #fff; */
  text-transform: uppercase;
}

.serviceBannerWrapper h3:hover {
  color: #006ada;
  cursor: pointer;
}

.bannerOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.2); */
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+50,ffffff+100&1+0,0+50,1+100 */
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0 ); /*IE6-9*/
}

.bannerLogoWrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  z-index: -1;
  height: 210px;
  /* transform: translateY(-25%); */
}

.bannerLogoWrapper img {
  transform: translateY(-25%);
}
</style>
