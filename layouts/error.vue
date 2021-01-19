<template>
  <div class="pageNotFoundWrapper">
    <b-container class="h-100">
      <b-row align-h="center" align-v="center" class="h-100">
        <b-col md="12">
          <h1>
            Ground control to major Tom, Your Circuit's dead,
            There's something wrong.
          </h1>
        </b-col>
        <b-col md="12">
          <div class="imageWrapper">
            <div class="background" data-relative-input="true" id="titleScene">
              <img data-depth="-0.1" src="@/assets/images/bg.png" alt="planets">
            </div>
            <div class="foreground">
              <img src="@/assets/images/image1.png" alt="404">
            </div>
            <div class="foregroundStar" data-relative-input="true" id="titleScene2">
              <img data-depth="0.3" src="@/assets/images/Untitled-1.png" alt="star">
            </div>
          </div>
        </b-col>
        <b-col md="12">
          <div class="errorMsg text-center">
            <p>We can't seem to find the page you're looking for</p>
            <div>
              <img src="@/assets/images/Layer 2 copy 4.png" alt="doodleblue">
            </div>
            <div>
              <nuxt-link :to="{name: 'index'}">
                <Button
                  class="goHomeBtn"
                  clsass="webBtn wow fade-in-bottom"
                  data-wow-delay="0.1s"
                  buttonText="Return to Homepage"
                  color="#000"
                  style="border: 0px solid rgb(3, 124, 255); padding-left: 1.75rem; margin-top: 1.5rem;"
                  :center="true"
                />
              </nuxt-link>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  layout: 'noLayout',
  components: {
    Button
  },
  mounted() {
    setTimeout(() => {
      var titleScene = document.getElementById('titleScene')
      var parallaxInstanceTitle = new Parallax(titleScene)
      var titleScene2 = document.getElementById('titleScene2')
      var parallaxInstanceTitle2 = new Parallax(titleScene2)
    }, 100)
  }
}
</script>

<style scoped>
.pageNotFoundWrapper {
  height: 100vh;
}

.pageNotFoundWrapper .container {
  max-width: 640px;
}

.pageNotFoundWrapper h1 {
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1rem;
  padding-top: 3rem;
  text-align: center;
}

.imageWrapper {
  position: relative;
}

.foreground {
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  text-align: center;
}

.foregroundStar {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin: auto;
  z-index: 3;
  text-align: center;
}

.foregroundStar img {
  margin: auto;
  left: 0;
  right: 0;
}

.background {
  /* position: absolute; */
  z-index: 1;
}

.errorMsg {
  padding-top: 2rem;
}

.errorMsg p {
  padding-bottom: 2rem;
}

.goHomeBtn {
  transform: scale(0.8);
}

.customArrow {
  padding-left: 0 !important;
}
</style>
