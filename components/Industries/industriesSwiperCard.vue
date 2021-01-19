<template>
  <nuxt-link class="link" :to="{name: 'industries-industry', params:{industry: industry.route}}">
    <!-- <div
      class="industrySwiperCard woww fadeIn position-relative"
      :data-wow-delay="`0.${index}s`"
      :style="{'background-image': 'url('+$getImgUrl(industry.image)+')'}"
    > -->
    <div
      class="industrySwiperCard woww fadeIn position-relative"
      :data-wow-delay="`0.${index}s`"
      v-lazy:background-image="$getImgUrl(industry.image)"
    >
      <div>
        <h3>{{ industry.title }}</h3>
        <h2>{{ industry.title }}</h2>
        <h6 class="industryCardArrow wow fadeIn" data-wow-duration="0.3s">
          <span>Read more</span>
          <i class="fas fa-long-arrow-alt-right"></i>
        </h6>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['industry', 'index']
}
</script>

<style scoped>
.industryCardArrow {
  transition: all 0.5s;
  transform: translateX(-88%);
}
.industryCardArrow span {
  transition: all 0.5s;
  opacity: 0;
}

.industryCardArrow i {
  padding-left: 1rem;
  opacity: 1;
}
.industrySwiperCard{
  background-size: 100% 100%;
}
.industrySwiperCard:hover .industryCardArrow {
  transform: translateX(0%);
}
.industrySwiperCard:hover .industryCardArrow span {
  opacity: 1;
}
</style>
