<template>
  <section class="homePageBanner">
    <div class="bannerOverlay"></div>
    <b-container class="h-100">
      <b-row class="h-100" align-v="center">
        <b-col md="6">
          <div class="block_reveal_effect primary">
            <h1 class="block_reveal_effect primary" v-if="false">
              <span style="font-weight:100;">WE</span> DISCOVER,
              <span class="textPrimary">DESIGN</span>
              <span style="font-weight:100;">&</span>
              <span class="textPrimary">BUILD</span> STRATEGY
              <span style="font-weight:100;">TO HELP BRANDS</span>
            </h1>
            <h1
              class="block_reveal_effect primary"
            >WE DISCOVER, DESIGN & BUILD STRATEGY TO HELP BRANDS</h1>
          </div>
          <div class="block_reveal_effect block_reveal_effect_delay_02 dark font-italic">
            <h2>
              <div>
                <span>Digital Strategy Consulting</span>
                <span>Design. Innovate. Transform.</span>
              </div>
            </h2>
            <!-- <h2 class="font-italic">
                            Design. Innovate. Transform.
            </h2>-->
          </div>
        </b-col>
        <b-col md="6" class="overflowHidden">
          <!-- <div class="block_reveal_effect block_reveal_effect_delay_04 primary"> -->
          <div class="wow fadeInLeft" data-wow-delay="0.5s">
            <img class="responsiveImg" :src="require('@/assets/images/home-page-logo.gif')" alt="doodleblue">
          </div>
        </b-col>

        <!-- <b-col md="6">
                  <div id="dbhomelogo" style="height:400px; width: 600px;"></div>
        </b-col>-->
      </b-row>
      <!-- <i class="fas fa-long-arrow-alt-down"></i> -->

      <!-- <div style="position:relative" classs="wow fadeInUp" data-wow-offset="0">
                <div class="scrollDownIndicator wow fadeInDown" data-wow-delay="2s" data-wow-offset="0">
                    <img src="@/assets/images/scroll.png" alt="scroll">
                </div>
      </div>-->
    </b-container>
  </section>
</template>

<script>
export default {
   jsonld() {
    return {
      url: 'https://www.doodleblue.com',
      Name: 'doodleblue Innovations',
      description:
        '<p>doodleblue Innovations is a custom mobile application development company in India and USA. We deliver creative IT solutions for all types of businesses</p>',
      image: '',
      '@context': 'http://schema.org',
      '@type': 'WebSite'
    }
  },
  mounted() {
    // var storagePath = this.storagePath + 'bodymovin/'
    // var animData = {
    //     wrapper: document.getElementById('dbhomelogo'),
    //     animType: 'html',
    //     loop: true,
    //     prerender: true,
    //     autoplay: true,
    //     // path: storagePath + fileName
    //     path: '../../static/homelogo/data.json'
    // };
    // var anim = lottie.loadAnimation(animData);
  }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Neuton'); */

/* Main styles */
.homePageBanner {
  position: relative;
  /* margin-top: 13.5rem; */
  /* color: #999; */
  /* font: 400 16px/1.5 exo, ubuntu, "segoe ui", helvetica, arial, sans-serif; */
  /* text-align: center; */
  /* img size is 50x50 */
  /* background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC") repeat 0 0; */
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

  margin-bottom: 1rem;
}
/* .homePageBanner::before {
  content: "INFINITY";
  font-size: 8rem;
  font-weight: 100;
  font-style: normal;
} */

.scrollDownIndicator {
  text-align: center;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  /* opacity: 0.4 !important; */
}

.scrollDownIndicator img {
  opacity: 0.4 !important;
}
@media (min-width: 1920px) {
  .h-100.container {
    transform: scale(1.3);
  }
}
</style>
