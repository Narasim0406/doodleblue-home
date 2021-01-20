<template>
  <div>
    <!-- Banner -->
    <HomeBanner/>
    <!-- Banner -->

    <!-- About Us -->
    <HomeIntro/>
    <!-- About Us -->

    <!-- Services Swiper -->
    <ServicesSwiper/>
    <!-- Services Swiper -->

    <!-- <br> -->

    <!-- Recent Works Swiper -->
    <RecentWorksSwiper/> 
    <!-- Recent Works Swiper -->

    <!-- Know Our Strategy -->
    <KnowOurStrategy/> 
    <!-- Know Our Strategy -->

    <!-- Start Your Career -->
    <StartYourCareer/> 
    <!-- Start Your Career -->
  </div>
</template>

<script>
import HomeBanner from '../components/Home/HomeBanner.vue'
import HomeIntro from '../components/Home/HomeIntro.vue'
import ServicesSwiper from '../components/Services/ServicesSwiper.vue'
import RecentWorksSwiper from '../components/RecentWorks/RecentWorksSwiper.vue'
import KnowOurStrategy from '../components/KnowOurStrategy.vue'
import StartYourCareer from '../components/StartYourCareer.vue'

export default {
    jsonld() {
    return {
      // Local Business Schema
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'doodleblue Innovations Private Limited',
      image: `${require('../assets/images/socialsharing/logo/logo.png')}`,
      '@id': 'https://www.doodleblue.com/#digital-strategy-consulting',
      url: 'https://www.doodleblue.com/',
      telephone: '095661 62753',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5 Prakash Presidium, 110, Uthamar Gandhi Rd,',
        addressLocality: 'Chennai',
        addressRegion: 'TN',
        postalCode: '600034',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 13.061912,
        longitude: 80.24677099999997
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '10:00',
        closes: '19:00'
      },
      sameAs: [
        'https://www.facebook.com/doodleblue.Innovations/',
        'https://twitter.com/doodleblue7',
        'https://www.instagram.com/doodleblue/',
        'https://www.youtube.com/user/doodleblue7',
        'https://www.linkedin.com/company/doodleblue/',
        'https://www.doodleblue.com/'
      ]
      // Website Schema  --> HomeBanner Component
      // Organisation Schema --> HomeIntro Component
    }
  },
  layout: 'BaseLayout',
  components: {
    HomeBanner,
    HomeIntro,
    ServicesSwiper,
    RecentWorksSwiper,
    KnowOurStrategy,
    StartYourCareer
  },
  head() {
    return {
      title: 'doodleblue | Digital Strategy Consulting',
      link: [
          {rel: 'canonical', href: 'https://www.doodleblue.com/'},
          { rel: 'canonical', href: 'http://www.doodleblue.com/' },
          { rel: 'canonical', href: 'http://www.doodleblue.com/' },
          { rel: 'canonical', href: 'http://doodleblue.com/' },
        ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'doodleblue | Digital Strategy Consulting'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          keywords: 'Web development,android app development,mobile app development, web design company,Digital Marketing,ecommerce,react native,react.js,best wearable app development company, mobile app design company,ios app development'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'doodleblue innovations is a custom mobile application development company in India and USA. We deliver creative IT solutions for all type of businesses.'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'Website'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'doodleblue | Digital Strategy Consulting'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.doodleblue.com/home.png'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: ''
        },
        // {
        //   hid: 'og:image',
        //   name: 'og:image',
        //   property: 'og:image',
        //   content: require('@/assets/images/socialsharing/blogs/blockchain.png')
        // },

        //Twitter
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'doodleblue | Digital Strategy Consulting'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'doodleblue innovations is a custom mobile application development company in India and USA. We deliver creative IT solutions for all type of businesses.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://www.doodleblue.com/home.png'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@doodleblue7'
        },
      ]
    }
  }
}
</script>