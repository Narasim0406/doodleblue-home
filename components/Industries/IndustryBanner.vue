<template>
  <div>
    <section
      class="industryBannerWrapper"
      :style="{'background-image': 'url('+$getImgUrl(data.cover)+')'}"
    >
      <div class="bannerOverlay"></div>
      <b-container class="h-100">
        <b-row align-v="center" class="h-100">
          <b-col md="12">
            <h3 class="d-inline-block breabcrumb block_reveal_effect dark">
              <span>
                <nuxt-link class="link" :to="{name: 'industries'}">Industries</nuxt-link>
              </span>
              /
              <span>
                <!-- <nuxt-link class="link"
                                :to="{name: 'industrypage', params:{industry: $route.params.industry} }"
                >-->
                {{ $route.params.industry }}
                <!-- </nuxt-link> -->
              </span>
            </h3>
            <h1 class="d-inline-block block_reveal_effect dark">
              <div class="d-inline-block">
                <!-- About -->
                <span>{{ data.title }}</span>
              </div>
            </h1>
            <br>
            <h3 class="d-inline-block block_reveal_effect block_reveal_effect_delay_02 dark">
              <div>
                <!-- Leading in digital transformation -->
              </div>
            </h3>
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
  props: ['data'],

  methods: {},

  mounted() {}
}
</script>

<style scoped>
.industryBannerWrapper {
  position: relative;
  width: 100%;
  min-height: 620px;
  height: 100vh;
  background-size: cover;
  /* background-color: #006ada;
  background-blend-mode: hard-light; */
  /* background-color: rgba(0, 0, 0, 0.3); */
  background-color: rgba(255, 255, 255, 0.85);
  background-blend-mode: overlay;

  /* background-image: url('@/assets/images/aboutbanner.jpg'); */

  /* background-color: transparent; */
  /* background-image: linear-gradient(0deg, transparent 24%, rgba(220, 220, 220, .2) 25%, rgba(220, 220, 220, .2) 26%, transparent 27%, transparent 74%, rgba(220, 220, 220, .2) 75%, rgba(220, 220, 220, .2) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(220, 220, 220, .2) 25%, rgba(220, 220, 220, .2) 26%, transparent 27%, transparent 74%, rgba(220, 220, 220, .2) 75%, rgba(220, 220, 220, .2) 76%, transparent 77%, transparent);
  background-size:100px 100px; */
}

.industryBannerWrapper h1 {
  font-size: 4rem;
  /* font-size: 3.3rem; */
  font-weight: 100;
  /* color: #fff; */
  text-transform: uppercase;
  width: 90% !important;
}

.industryBannerWrapper h1 span {
  font-weight: 900;
  text-transform: none;
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
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0 ); /*IE6-9*/
}

.breabcrumb {
  text-transform: uppercase;
  font-size: 1.5rem;
}

.breabcrumb span:first-child {
  color: #006ada;
  font-weight: 900;
}
</style>
