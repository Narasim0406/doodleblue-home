  <template>
  <div>
    <!-- Banner -->
    <Banner/>
    <!-- Banner -->

    <!-- Services Swiper -->
    <SubServicesSwiper service="IN"/>
    <!-- Services Swiper -->

    <!-- Interaction -->

    <ServiceInteraction
      text1="Technology revolutionizes the business world and shapes the now, near and next. We are equipped to provide leap in speed and quality with experience in making strategic decisions. Through innovation, we provide delivery, excellence, talent growth, co-creating the future of ventures."
      text2
      text3
      image="in.png"
    />
    <!-- Interaction -->

    <!-- Our Methodology -->
    <OurMethodology color="rgb(139, 77, 244)"/>
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
import Banner from '@/components/Services/innovation/banner.vue'

import SubServicesSwiper from '@/components/Services/SubServices/SubServicesSwiper.vue'
// import RecentWorksSwiper from '@/components/RecentWorks/RecentWorksSwiper.vue'

import OurMethodology from '@/components/OurMethodology.vue'
import ServiceInteraction from '@/components/Services/ServiceInteraction.vue'
import SingleCaseStudy from '@/components/SingleCaseStudy.vue'

export default {
  // head() {
  //   return {
  //     title: 'Innovation | India, USA',
  //     meta: [
  //       {
  //         hid: 'og:title',
  //         name: 'og:title',
  //         content: 'Innovation | India, USA'
  //       },
  //       {
  //         hid: `keywords`,
  //         name: 'keywords',
  //         keywords:
  //           'augmented reality development,virtual reality development,iot application development,blockchain development services '
  //       },
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content:
  //           'Improve your brand’s visibility, value and personality with new perspectives and dimensions.'
  //       },
  //       {
  //         hid: 'og:description',
  //         name: 'og:description',
  //         content:
  //           'Improve your brand’s visibility, value and personality with new perspectives and dimensions.'
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
