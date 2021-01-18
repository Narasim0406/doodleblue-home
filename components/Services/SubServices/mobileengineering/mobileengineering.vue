<template>
  <div>
    <!-- Banner -->
    <Banner :title="computeSubService.name" />
    <!-- Banner -->

    <!-- Sub service content items -->
    <SubServiceContent :subService="computeSubService" color="rgb(83, 183, 81)" />
    <!-- Sub service content items -->

    <!-- Recent Works Swiper -->
    <ServiceCaseStudy />
    <!-- Recent Works Swiper -->
  </div>
</template>

<script>
import Banner from '@/components/Services/SubServices/mobileengineering/Banner/index.vue'
import SubServiceContent from '@/components/Services/SubServices/SubServiceContent.vue'

import ServiceCaseStudy from '@/components/Services/ServiceCaseStudy.vue'

export default {
    jsonld() {
    return {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: this.computeSubService.seo.schema.name,
      image: this.computeSubService.seo.image,
      description: this.computeSubService.seo.schema.description,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '50'
      }
    }
  },
  head() {
    return {
      title: this.computeSubService.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.computeSubService.seo.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          keywords: this.computeSubService.seo.keywords
        },

        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.computeSubService.seo.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.computeSubService.seo.title
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: this.computeSubService.seo.image
        },

        //Twitter
        {
        hid : "twitter:card",
        name : "twitter:card",
        content: "summary_large_image"
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.computeSubService.seo.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.computeSubService.seo.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.computeSubService.seo.twitterImage
        }
      ]
    }
  },
  components: {
    Banner,
    SubServiceContent,
    ServiceCaseStudy
  },
  data() {
    return {
      android: {
        name: 'ANDROID DEVELOPMENT',
        title: 'Create Smarter and powerful systems',
        desc:
          'Our android app development services designs and builds aesthetic, user-centric and responsive applications that follow agile methodologies for development. We develop applications that are easy to use, facile to navigate and highly responsive with robust platforms and cutting-edge technology.',
        contents: [
          {
            image: 'icons-32.svg',
            title: 'Concept',
            content:
              'Set the course, structure and guidelines for products, and build an MVP to validate the direction.'
          },
          {
            image: 'icons-28.svg',
            title: 'User test',
            content:
              'Incorporate appropriate and effective test strategy throughout the design and development process.'
          },
          {
            image: 'icons-27.svg',
            title: 'Prototyping',
            content:
              'Create a preliminary version of the product to understand layout and user flow experience.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Android App Development Services | India,USA',
          description:
            'Our android app development services designs and builds aesthetic, user-centric and responsive applications that follow agile methodologies for development',
          keywords:
            'android app development company in india, android application development company, android app development services, android app development company,android app development, android mobile app development, android mobile app development in chennai',
          image: `${require('@/assets/images/socialsharing/doodleblue - Android Development.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/mobileengineering/doodleblue-AndroidDevelopment.png',
          schema: {
            name: 'Android App Development Services',
            description: 'We develop applications that are easy to use, facile to navigate and highly responsive with robust platforms and cutting-edge technology.Our android app development services designs and builds aesthetic, user-centric and responsive applications that follow agile methodologies for development.'
          }
        }
      },

      ios: {
        name: 'IOS DEVELOPMENT',
        title: 'Swift and exclusive buildout',
        desc:
          'Our ios app development services defines and delivers products with impeccable quality and efficiency with a framework that handles multiple platforms with finesse. It elevates performance of mobile territory by modular and intuitive architecture.',
        contents: [
          {
            image: 'icons-26.svg',
            title: 'Secure',
            content:
              'Encryption makes transactions and applications secure and efficient, protecting from external threats, virus and malware.'
          },
          {
            image: 'icons-25.svg',
            title: 'Robust',
            content:
              'Swift code to ensure fast, secure and powerful system for developing applications that connect to wearable devices.'
          },
          {
            image: 'icons-24.svg',
            title: 'Technology',
            content:
              'Programming language Swift with Native SDK framework aids build applications for diverse cases ranging from geo tagging, geo tracking by integrating with beacons and bar codes.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | iOS App Development Services | India,USA',
          description:
            'Our ios app development services defines and delivers products with impeccable quality and efficiency with a framework that handles multiple platforms with finesse.',
          keywords:
            'iOS app development company in india, iOS  application development company, iOS  app development services, iOS  app development company,ios app development, iphone app development company, iphone app development, iphone app development in chennai',
          image: `${require('@/assets/images/socialsharing/doodleblue -  ios development.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/mobileengineering/doodleblue-iosdevelopment.png',
          schema: {
            name: 'iOS App Development Services',
            description: 'Our ios app development services defines and delivers products with impeccable quality and efficiency with a framework that handles multiple platforms with finesse. It elevates performance of mobile territory by modular and intuitive architecture.Swift code to ensure fast, secure and powerful system for developing applications that connect to wearable devices.'
          }
        }
      },

      reactNative: {
        name: 'React native DEVELOPMENT',
        title: 'Intuitive architecture for robust applications',
        desc:
          'We define and deliver products with impeccable quality and efficiency with a framework that handles multiple platforms with finesse. Our react native development elevates performance of mobile territory by modular and intuitive architecture.',
        contents: [
          {
            image: 'icons-23.svg',
            title: 'Agile',
            content:
              'Easy and quick development with one code implementation for both android and ios.'
          },
          {
            image: 'icons-22.svg',
            title: 'Technology',
            content:
              'Combines smoothly with components written in Objective-C, Java, or Swift.'
          },
          {
            image: 'icons-21.svg',
            title: 'Instantaneous',
            content:
              'Reload app instantly and run new code while retaining application state.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | React Native App Development | India,USA',
          description:
            'Our React native app development elevates performance of mobile territory by modular and intuitive architecture.',
          keywords:
            'react native development, react native app development, hybrid app development, react native app,react native app development services, react native app development companies, react native app development companies in chennai, react native app development companies in India',
          image: `${require('@/assets/images/socialsharing/doodleblue-react-native-expert-developers-team.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/mobileengineering/doodleblue-React.png',
          schema: {
            name: 'React Native App Development Services',
            description: 'We define and deliver products with impeccable quality and efficiency with a framework that handles multiple platforms with finesse. Our react native development elevates performance of mobile territory by modular and intuitive architecture.'
          }
        }
      },
      wearableDevelopment: {
        name: 'WEARABLE DEVELOPMENT',
        title: 'Smart Tech For Daily Life',
        desc:
          'Our wearable app development unlocks device potential to experience the vision of ubiquitous computing with enhanced functionality and tracking mechanism.',
        contents: [
          {
            image: 'icons-20.svg',
            title: 'Sensor',
            content:
              'Transmission of signal that enables access to apps directly on the wearable device.'
          },
          {
            image: 'icons-19.svg',
            title: 'Processors',
            content:
              'power watches to trackers to eyewear, giving it a powerful and distinctive edge.'
          },
          {
            image: 'icons-18-01.svg',
            title: 'Sync',
            content:
              'Continuous and timely sync between device and apps to get actionable information at all times.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Wearable App Development Company | India,USA',
          description:
            'Our Wearable app development unlocks device potential to experience the vision of ubiquitous computing with enhanced functionality and tracking mechanism.',
          keywords:
            'Wearable app Development company, wearable app development,wearable app development in india, wearable app development in chennai',
          image: `${require('@/assets/images/socialsharing/doodleblue - Wearable.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/mobileengineering/doodleblue-Wearable.png',
          schema: {
            name: 'Wearable App Development Services',
            description: 'Our wearable app development unlocks device potential to experience the vision of ubiquitous computing with enhanced functionality and tracking mechanism.Transmission of signal that enables access to apps directly on the wearable device.Continuous and timely sync between device and apps to get actionable information at all times.'
          }
        }
      },
      hybridDevelopment: {
        name: 'HYBRID DEVELOPMENT',
        title: 'The art of being in two places at once',
        desc:
          'Our hybrid app development combines elements of native and web applications. We build applications to take user experience to an entirely new standard.',
        contents: [
          {
            image: 'icons-17.svg',
            title: 'Cross-platform',
            content:
              'Create a perfect blend of native application’s usability and web application’s versatility.'
          },
          {
            image: 'icons-16.svg',
            title: 'Robust',
            content:
              'Agile hybrid development methodolgy and rigorous quality testing to ensure that it works well on all the popular platforms'
          },
          {
            image: 'icons-15.svg',
            title: 'Speed',
            content:
              'Continuous and timely sync between device and apps to get actionable information at all times.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Hybrid App Development Company | India,USA',
          description:
            'Our Hybrid app development combines elements of native and web applications. We build applications to take user experience to an entirely new standard.',
          keywords:
            'hybrid app development company, hybrid mobile app development, hybrid mobile application development,hybrid app development, hybrid mobile app, hybrid app development companies in india, hybrid app development in chennai',
          image: `${require('@/assets/images/socialsharing/doodleblue - Hybrid.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/mobileengineering/doodleblue-Hybrid.png',
          schema: {
            name: 'Hybrid App Development Services',
            description: 'Our hybrid app development combines elements of native and web applications. We build applications to take user experience to an entirely new standard.Agile hybrid development methodology and rigorous quality testing to ensure that it works well on all the popular platforms'
          }
        }
      }
    }
  },

  computed: {
    // Compute sub service based on route
    computeSubService() {
      let route = this.$route.params.subservice
      switch (route) {
        case 'android-development':
          return this.android
          break
        case 'ios-development':
          return this.ios
          break
        case 'react-native-development':
          return this.reactNative
          break
        case 'wearable-development':
          return this.wearableDevelopment
          break
        case 'hybrid-development':
          return this.hybridDevelopment
          break
        default:
          this.$router.push({ name: 'pagenotfound' })
          return this.android
      }
    }
  }
}
</script>

<style scoped>
</style>
