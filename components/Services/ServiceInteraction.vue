<template>
  <section style="overflow:hidden;">
    <div class="dt_journey_wrapper">
      <b-container>
        <div><h2 class="dt_starter">{{ text1 }}</h2></div>

        <div class="dt_header" v-if="text2 != '' || text3 != ''">
          <div class="dt_title_dark">{{ text2 }}</div>
          <div class="dt_title_color">{{ text3 }}</div>
        </div>

        <div class="dt_svg">
          <component :is="findComponent"/>
        </div>
      </b-container>
    </div>
  </section>
</template>

<script>
export default {
  props: ['text1', 'text2', 'text3', 'image'],

  computed: {
    findComponent() {
      return () =>
        import(`~/components/Services/${
          this.$route.params.service
        }/journey.vue`)
    }
  }
}
</script>

<style scoped>
.dt_starter {
  padding: 100px;
  padding-top: 0;
  padding-bottom: 80px;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  line-height: unset
}

.dt_header {
  text-align: center;
  font-size: 3rem;
  /* margin-bottom: 30px; */
  padding-bottom: 4rem;
  /* margin-top: -1rem; */
  margin-bottom: 1rem;
}

.dt_svg {
  text-align: center;
}
.dt_svg img {
  width: 100%;
}

.dt_title_color {
  color: #dc1d45;
  margin-top: -20px;
}

.centerBottomContent {
  float: left;
  width: 18%;
}

p {
  font-size: 1rem;
}
</style>
