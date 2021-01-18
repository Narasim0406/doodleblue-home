
<template>
  <div>
    <!-- :style="{'background-image': 'url('+$getImgUrl('top-view-photography-of-smartphones-and-papers-on-white-surface.jpg')+')'}" -->
    <!-- :style="{'background-image': 'url('+$getImgUrl('depositphotos_120504392-stock-illustration-black-and-white-doodle-seamless.jpg')+')'}" -->
    <section class="serviceBannerWrapper">
      <div class="bannerOverlay"></div>
      <b-container class="h-100">
        <b-row align-v="center" class="h-100">
          <b-col md="12" data-relative-input="true" id="bannerScene">
            <h1 data-depth="0.2" class="d-inline-block block_reveal_effect dark">
              <div class="d-inline-block">
                <span style="font-weight:100; text-transform: uppercase;">BLENDING</span>
                <span class="textPrimary textUppercase">STRATEGY</span>
                <span style="font-weight:100;">,</span>
                <span class="textPrimary textUppercase">DESIGN</span>
                <span style="font-weight:100; text-transform: uppercase;">AND</span>
                <span class="textPrimary textUppercase">INNOVATION</span>
              </div>
            </h1>
            <h2
              data-depth="-0.1"
              class="d-inline-block block_reveal_effect block_reveal_effect_delay_02 dark"
            >
              <div
                style="text-transform: none;"
              >Leveraging technology and innovation to transform your business</div>
            </h2>
            <br>
            <!-- <div data-depth="-0.5" class="bannerLogoWrapper wow fadeInLeft" data-wow-delay="0.5s">
                            <img src="@/assets/images/logo big.png" alt="doodleblue logo">
            </div>-->
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
export default {
  methods: {},

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
  background-color: rgba(250, 250, 250, 0.3);
  background-blend-mode: overlay;

  /* background-image: url('@/assets/images/aboutbanner.jpg'); */

  /* background-color: transparent; */
  /* background-image: linear-gradient(0deg, transparent 24%, rgba(220, 220, 220, .2) 25%, rgba(220, 220, 220, .2) 26%, transparent 27%, transparent 74%, rgba(220, 220, 220, .2) 75%, rgba(220, 220, 220, .2) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(220, 220, 220, .2) 25%, rgba(220, 220, 220, .2) 26%, transparent 27%, transparent 74%, rgba(220, 220, 220, .2) 75%, rgba(220, 220, 220, .2) 76%, transparent 77%, transparent);
  background-size:100px 100px; */

  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC')
    repeat 0 0;

  -webkit-animation: bg-scrolling-reverse 3s infinite;
  /* background-blend-mode: hard-light; */
  /* background-color: blue; */
  /* background-blend-mode: multiply; */
  /* Safari 4+ */
  -moz-animation: bg-scrolling-reverse 3s infinite;
  /* Fx 5+ */
  -o-animation: bg-scrolling-reverse 3s infinite;
  /* Opera 12+ */
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

.serviceBannerWrapper h2 {
  font-size: 1.75rem;
  /* font-weight: 600; */
  /* color: #fff; */
  text-transform: uppercase;
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
}
</style>
