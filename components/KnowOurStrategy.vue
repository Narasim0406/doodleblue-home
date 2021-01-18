<template>
  <div>
    <section class="knowOurStrategyWrapper">
      <b-container>
        <b-row align-v="center">
          <b-col md="7" order-md="1" order="2">
            <div>
              <div
                data-relative-input="true"
                id="titleScene1"
                class="sectionFadedTitle wow fade-in-bottom"
                data-wow-delay="0.5s"
                data-wow-offset="250"
              >
                <h3 class="h1" data-depth="-0.1">Strategy</h3>
              </div>

              <h2 class="wow fade-in-bottom">
                <span style>
                  Our digital strategy consulting approach.
                  <br />We don't just build, we perform.
                </span>
              </h2>

              <h4
                class="wow fade-in-bottom"
              >We deploy super agile process that facilitate transparent and effective communication to optimize digital transformation</h4>
              <nuxt-link class="link" :to="{name:'approach'}">
                <Button
                  class="wow fade-in-bottom"
                  data-wow-delay="0.1s"
                  buttonText="Our Approach"
                  style="border: 1px solid rgb(3, 124, 255); padding-left: 1.4rem; margin-top: 1.5rem; background: #006ada;"
                  color="#fff"
                  :center="true"
                />
              </nuxt-link>
            </div>
          </b-col>
          <b-col md="5" order-md="2" order="1">
            <div class="wow fadeIn" v-lazy-container="{ selector: 'img' }">
              <img
                class="responsiveImg"
                :data-src="require('@/assets/images/strategy.png')"
                alt="digital strategy"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  },

  mounted() {
    setTimeout(() => {
      var titleScene1 = document.getElementById('titleScene1')
      var parallaxInstanceTitle = new Parallax(titleScene1)
    }, 100)
  }
}
</script>

<style scoped>
.knowOurStrategyWrapper .sectionFadedTitle {
  width: 120%;
}
.knowOurStrategyWrapper .sectionFadedTitle h3 {
  text-align: left;
}
</style>
