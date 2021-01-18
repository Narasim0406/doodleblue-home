<template>
  <div>
    <!-- Banner -->
    <Banner/>
    <!-- Banner -->

    <!-- Services Swiper -->
    <SubServicesSwiper service="UIUX"/>
    <!-- Services Swiper -->

    <!-- Interaction SVG -->
    <ServiceInteraction
      text1="Our unparalled group of professionals provide adept UI/UX services that aren't about designs alone. We make design a scientific process. We combine deeper methods of heuristic evaluation to build predictability in design decisions made for digital experiences."
      text2
      text3
      image="uiux.png"
    />
    <!-- Interaction SVG -->

    <!-- Our Methodology -->
    <OurMethodology color="rgb(54, 116, 217)"/>
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
import Banner from '@/components/Services/uiuxdesign/banner.vue'
import SubServicesSwiper from '@/components/Services/SubServices/SubServicesSwiper.vue'
// // import RecentWorksSwiper from '@/components/RecentWorks/RecentWorksSwiper.vue'

import ServiceInteraction from '@/components/Services/ServiceInteraction.vue'
import OurMethodology from '@/components/OurMethodology.vue'
import SingleCaseStudy from '@/components/SingleCaseStudy.vue'

export default {
  // head() {
  //   return {
  //     title: 'UI/UX Design Services | India, USA',
  //     meta: [
  //       {
  //         hid: 'og:title',
  //         name: 'og:title',
  //         content: 'UI/UX Design Services | India, USA'
  //       },
  //       {
  //         hid: `keywords`,
  //         name: 'keywords',
  //         keywords:
  //           'user experience design, ui ux design company , ux design company,user experience design agency,ui design company,ui ux services'
  //       },
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content:
  //           'At doodleblue, we provide creative ui/ux services that adds meaning to each pixel. We have expertise in brand stratgey, ux strategy, mobile, web and wearble designs.'
  //       },
  //       {
  //         hid: 'og:description',
  //         name: 'og:description',
  //         content:
  //           'At doodleblue, we provide creative ui/ux services that adds meaning to each pixel. We have expertise in brand stratgey, ux strategy, mobile, web and wearble designs.'
  //       }
  //     ]
  //   }
  // },
  components: {
    Banner,
    SubServicesSwiper,
    ServiceInteraction,
    // RecentWorksSwiper,
    OurMethodology,
    SingleCaseStudy
  }
}
</script>

<style scoped>
</style>
