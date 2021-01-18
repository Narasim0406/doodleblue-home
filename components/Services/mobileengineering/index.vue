<template>
  <div>
    <!-- Banner -->
    <Banner/>
    <!-- Banner -->

    <!-- Services Swiper -->
    <SubServicesSwiper service="ME"/>
    <!-- Services Swiper -->

    <!-- Interaction -->

    <ServiceInteraction
      text1="We build beautiful, user-centric, engaging and responsive applications with a coalesce of strategy, design and development. Our mobile app development follows agile development process that leverages and delivers project at maximal quality."
      text2
      text3
      image="me.png"
    />
    <!-- Interaction -->

    <!-- Our Methodology -->
    <OurMethodology color="#45c151"/>
    <!-- Our Methodology -->

    <!-- Case study -->
    <SingleCaseStudy/>
    <!-- Case study -->

    <!-- Recent works -->
    <!-- <RecentWorksSwiper/> -->
    <!-- Recent works -->
  </div>
</template>

<script>
import Banner from '@/components/Services/mobileengineering/banner.vue'

import SubServicesSwiper from '@/components/Services/SubServices/SubServicesSwiper.vue'
// // import RecentWorksSwiper from '@/components/RecentWorks/RecentWorksSwiper.vue'
import OurMethodology from '@/components/OurMethodology.vue'
import ServiceInteraction from '@/components/Services/ServiceInteraction.vue'
import SingleCaseStudy from '@/components/SingleCaseStudy.vue'

export default {
  // head() {
  //   return {
  //     title: 'Mobile App Development Services | India, USA',
  //     meta: [
  //       {
  //         hid: 'og:title',
  //         name: 'og:title',
  //         content: 'Mobile App Development Services | India, USA'
  //       },
  //       {
  //         hid: `keywords`,
  //         name: 'keywords',
  //         keywords:
  //           'mobile application development, mobile app development, mobile application developer, mobile apps developers, mobile apps development india, mobile software development, mobile application development company, mobile app development services'
  //       },
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content:
  //           'Our mobile app development services build engaging applications that follows agile development process. '
  //       },
  //       {
  //         hid: 'og:description',
  //         name: 'og:description',
  //         content:
  //           'Our mobile app development services build engaging applications that follows agile development process. '
  //       }
  //     ]
  //   }
  // },
  components: {
    Banner,
    SubServicesSwiper,
    ServiceInteraction,
    OurMethodology,
    // RecentWorksSwiper,
    SingleCaseStudy
  }
}
</script>

<style scoped>
</style>
