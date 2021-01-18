<template>
  <div>
    <!-- Banner -->
    <Banner/>
    <!-- Banner -->

    <!-- Services Swiper -->
    <SubServicesSwiper service="EP"/>
    <!-- Services Swiper -->

    <!-- Interaction -->
    <ServiceInteraction
      text1="Play a pivotal role in corporate environment by streamlining processes that support varied functions. Our enterprise application development company mounts perfect web and enterprise mobile apps that enhance flexibilty and efficiency."
      text2
      text3
      image="ep.png"
    />
    <!-- Interaction -->

    <!-- Our Methodology -->
    <OurMethodology color="rgb(53, 198, 204)"/>
    <!-- Our Methodology -->

    <!-- Case study -->
    <SingleCaseStudy/>
    <!-- Case study -->

    <!-- Recent Works Swiper -->
    <!-- <RecentWorksSwiper/> -->
    <!-- Recent Works Swiper -->
  </div>
</template>

<script>
import Banner from '@/components/Services/enterpriseapplications/banner.vue'
import SubServicesSwiper from '@/components/Services/SubServices/SubServicesSwiper.vue'
// import RecentWorksSwiper from '@/components/RecentWorks/RecentWorksSwiper.vue'

import OurMethodology from '@/components/OurMethodology.vue'
import ServiceInteraction from '@/components/Services/ServiceInteraction.vue'
import SingleCaseStudy from '@/components/SingleCaseStudy.vue'

export default {
  // head() {
  //   return {
  //     title: 'Enterprise Application Development Company | India, USA',
  //     meta: [
  //       {
  //         hid: 'og:title',
  //         name: 'og:title',
  //         content: 'Enterprise Application Development Company | India, USA'
  //       },
  //       {
  //         hid: `keywords`,
  //         name: 'keywords',
  //         keywords:
  //           'Enterprise Application Development, enterprise app development, enterprise mobile application development, enterprise mobile app development'
  //       },
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content:
  //           'Our enterprise application development enhances flexibilty and efficiency of web and enterprise mobile apps.'
  //       },
  //       {
  //         hid: 'og:description',
  //         name: 'og:description',
  //         content:
  //           'Our enterprise application development enhances flexibilty and efficiency of web and enterprise mobile apps.'
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
