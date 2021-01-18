
<template>
  <div>
    <!-- :style="{'background-image': 'url('+$getImgUrl('blur-close-up-design-196645.jpg')+')'}" -->
    <section class="serviceBannerWrapper">
      <div class="bannerOverlay"></div>

      <div style="position:absolute; top:0; left:0; width:100%; height: 100%">
        <Background/>
      </div>

      <b-container class="h-100">
        <b-row align-v="center" class="h-100">
          <b-col md="12" data-relative-input="true" id="bannerScene">
            <h3 data-depth="-0.1" class="d-inline-block wow fade-in-bottom" data-wow-delay="0.9s">
              <div>ENTERPRISE APPLICATION DEVELOPMENT</div>
            </h3>
            <br>
            <h1 data-depth="0.2" class="d-inline-block wow fade-in-bottom" data-wow-delay="1.3s">
              <div class="d-inline-block">
                <!-- {{ $route.params.subService }} -->
                {{ title }}
              </div>
            </h1>
            <!-- <div data-depth="-0.5" class="bannerLogoWrapper wow fadeInLeft" data-wow-delay="0.5s">
                            <img src="@/assets/images/ui ux banner logo.png" alt="doodleblue logo">
            </div>-->
          </b-col>
        </b-row>

        <!-- <SubServicePageNavigator :subServicePages="subServicePages" /> -->
      </b-container>
    </section>
  </div>
</template>

<script>
import Background from '@/components/Services/SubServices/enterpriseapplications/Banner/Background.vue'
export default {
  props: ['title'],

  components: {
    Background
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
  background-color: rgba(250, 250, 250, 0.7);
  background-blend-mode: overlay;

  /* background-image: url('@/assets/images/aboutbanner.jpg'); */

  /* background-color: transparent; */
  /* background-image: linear-gradient(0deg, transparent 24%, rgba(220, 220, 220, .2) 25%, rgba(220, 220, 220, .2) 26%, transparent 27%, transparent 74%, rgba(220, 220, 220, .2) 75%, rgba(220, 220, 220, .2) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(220, 220, 220, .2) 25%, rgba(220, 220, 220, .2) 26%, transparent 27%, transparent 74%, rgba(220, 220, 220, .2) 75%, rgba(220, 220, 220, .2) 76%, transparent 77%, transparent);
  background-size:100px 100px; */
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

.serviceBannerWrapper h1 {
  width: 80% !important;
  font-size: 4rem;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
}

.serviceBannerWrapper h1 span {
  font-weight: 900;
  text-transform: lowercase;
}

.serviceBannerWrapper h3 {
  font-size: 1.5rem;
  /* font-weight: 600; */
  color: #fff;
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
  height: 210px;
  /* transform: translateY(-25%); */
}

.bannerLogoWrapper img {
  transform: translateY(-25%);
}
</style>
