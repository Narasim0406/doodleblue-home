<template>
  <div>
    <!-- Banner -->
    <Banner/>
    <!-- Banner -->

    <!-- Services Swiper -->
    <SubServicesSwiper service="WT"/>
    <!-- Services Swiper -->

    <!-- Interaction -->
    <ServiceInteraction
      text1="Our website development services turn ideas and designs into functional, reliable products and services with latest technology solutions using trending programming languages and robust databases. We design and build pixel perfect websites that are creatively and technologically inclined."
      text2
      text3
      image="wt.png"
    />
    <!-- Interaction -->

    <!-- Our Methodology -->
    <OurMethodology color="rgb(218, 112, 55)"/>
    <!-- Our Methodology -->

    <!-- Case study -->
    <SingleCaseStudy/>
    <!-- Case study -->

    <!-- Recent work -->
    <!-- <RecentWorksSwiper/> -->
    <!-- Recent work -->
  </div>
</template>

<script>
import Banner from '@/components/Services/webtechnology/banner.vue'
import SubServicesSwiper from '@/components/Services/SubServices/SubServicesSwiper.vue'
// import RecentWorksSwiper from '@/components/RecentWorks/RecentWorksSwiper.vue'

import OurMethodology from '@/components/OurMethodology.vue'
import ServiceInteraction from '@/components/Services/ServiceInteraction.vue'
import SingleCaseStudy from '@/components/SingleCaseStudy.vue'

export default {
  // head() {
  //   return {
  //     title: 'Website Development Services | India, USA ',
  //     meta: [
  //       {
  //         hid: 'og:title',
  //         name: 'og:title',
  //         content: 'Website Development Services | India, USA'
  //       },
  //       {
  //         hid: `keywords`,
  //         name: 'keywords',
  //         keywords:
  //           'web design services, development company in india, development services, custom website design, web development company'
  //       },
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content:
  //           "doodleblue's web development services brings together creativity, technology and strategy to build rich websites."
  //       },
  //       {
  //         hid: 'og:description',
  //         name: 'og:description',
  //         content:
  //           "doodleblue's web development services brings together creativity, technology and strategy to build rich websites."
  //       }
  //     ]
  //   }
  // },
  components: {
    Banner,
    SubServicesSwiper,
    OurMethodology,
    // RecentWorksSwiper,
    ServiceInteraction,
    SingleCaseStudy
  }
}
</script>

<style scoped>
</style>
