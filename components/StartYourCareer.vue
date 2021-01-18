<template>
  <div>
    <section class="startYourCareerWrapper">
      <b-container v-lazy:background-image="$getImgUrl('aboutbanner.jpg')"
        class="startYourCareerContainer"
      >
        <b-row align-v="center" class="h-100">
          <b-col md="7">
            <h2 class="wow fade-in-bottom">There is so much left to build</h2>
            <h5 class="wow fade-in-bottom">
              At doodleblue, we work for the common good - within our organization and
              with other organizations around the world. We're building a future where data
              can be leveraged to serve people, create value and improve the quality of life
            </h5>
            <nuxt-link class="link" :to="{name: 'careers'}">
              <Button
                class="knowOurStrategyWrapperbtn wow fade-in-bottom"
                data-wow-delay="0.1s"
                buttonText="Start Your Career"
                color="#fff"
              />
            </nuxt-link>
          </b-col>
        </b-row>
        <div
          data-relative-input="true"
          id="titleScene1"
          class="startYourCareerFadedTitle wow fade-in-bottom"
        >
          <h3 class="h1" data-depth="-0.1">Careers</h3>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  data(){
    return{
    }
  },
  components: {
    Button
  }
}
</script>

<style scoped>
</style>
