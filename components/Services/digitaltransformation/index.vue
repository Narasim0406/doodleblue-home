<template>
  <div>
    <!-- Banner -->
    <Banner/>
    <!-- Banner -->

    <!-- Services Swiper -->
    <SubServicesSwiper service="DT"/>
    <!-- Services Swiper -->

    <ServiceInteraction
      class="wow fade-in-bottom"
      text1="Transform the way business interacts with changing digital landscapes by creating trust quotient and engagement. Digital transformation brings a new dimension in the business world with innovation, creativity and strategies that bring prodigious results."
      text2="Embark on a lubricative"
      text3="Digital Transformation Journey"
      image="SVG/DT icons 4 circle_Innovate.svg"
    />

    <!-- Our Methodology -->
    <OurMethodology color="rgb(221, 29, 69)"/>
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
import Banner from '@/components/Services/digitaltransformation/banner.vue'
import SubServicesSwiper from '@/components/Services/SubServices/SubServicesSwiper.vue'
// // import RecentWorksSwiper from '@/components/RecentWorks/RecentWorksSwiper.vue'
import ServiceInteraction from '@/components/Services/ServiceInteraction.vue'
import OurMethodology from '@/components/OurMethodology.vue'
import SingleCaseStudy from '@/components/SingleCaseStudy.vue'

export default {
  // head() {
  //   return {
  //     title: 'Digital Transformation Strategy | India, USA ',
  //     meta: [
  //       {
  //         hid: 'og:title',
  //         name: 'og:title',
  //         content: 'Digital Transformation Strategy | India, USA '
  //       },
  //       {
  //         hid: `keywords`,
  //         name: 'keywords',
  //         keywords:
  //           'digital transformation, digital business transformation, digital transformation strategy, digital transformation companies'
  //       },
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content:
  //           'Stay ahead radically with doodleblue. We innovate, expand and measure the way business interacts with digital landscapes, making the digital transformation real.'
  //       },
  //       {
  //         hid: 'og:description',
  //         name: 'og:description',
  //         content:
  //           'Stay ahead radically with doodleblue. We innovate, expand and measure the way business interacts with digital landscapes, making the digital transformation real.'
  //       }
  //     ]
  //   }
  // },
  components: {
    Banner,
    SubServicesSwiper,
    // RecentWorksSwiper,
    OurMethodology,
    ServiceInteraction,
    SingleCaseStudy
  }
}
</script>

<style scoped>
</style>
