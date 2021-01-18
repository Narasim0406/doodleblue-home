<template>
  <div>
    <!-- Banner -->
    <!-- <WTSubServiceBanner :title="subService.name" /> -->
    <Banner :title="computeSubService.name" />

    <!-- Banner -->

    <!-- Sub service content items -->
    <SubServiceContent :subService="computeSubService" color="rgb(217, 111, 54)" />
    <!-- Sub service content items -->

    <!-- Recent Works Swiper -->
    <!-- <ServiceCaseStudy/> -->
    <!-- Recent Works Swiper -->
  </div>
</template>

<script>
import Banner from '@/components/Services/SubServices/webtechnology/Banner/index.vue'
// import ServiceCaseStudy from '@/components/Services/ServiceCaseStudy.vue'
import SubServiceContent from '@/components/Services/SubServices/SubServiceContent.vue'

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
          content: this.computeSubService.seo.twitterImages
        }
      ]
    }
  },
  components: {
    Banner,
    SubServiceContent
    // ServiceCaseStudy
  },

  data() {
    return {
      cms: {
        name: 'CONTENT MANAGEMENT SYSTEMS',
        title: 'Flexible websites',
        desc:
          'Our cms web development services provide omnichannel digital environment that manages content assets with ease. Personalized, tailored, and flexible solutions to content management systems.',
        contents: [
          {
            image: 'icons-15.svg',
            title: 'Search engine optimized websites',
            content:
              'Allows easy and regular content updation that optimizes and enhances visibility of websites.'
          },
          {
            image: 'icons dt-4 - brand auditing.png',
            title: 'Customization',
            content:
              'Easy development, personalization and implementation using industry leading technologies like WordPress, Drupal, Joomla and ExpressionEngine.'
          },
          {
            image: 'icons dt-2 - security.png',
            title: 'Design flexibility',
            content:
              'Lucid design adaptability with brand style and colour for easy refinement and visual consistency.'
          }
        ],
        seo: {
          title:
            'doodleblue innovations | CMS Web Development Services | India, USA',
          description:
            'Our cms web development services provide omnichannel digital environment that manages content assets with ease.',
          keywords:
            'CMS website development company, cms web development services,cms development, cms development services, cms development services in india, cms development services in chennai',
          image: `${require('@/assets/images/socialsharing/doodleblue-content management-system.png')}`,
          twitterImages: 'https://doodlebluebytes.com/social-share-images/services/webtechnology/doodleblue-contentmanagement-system.png',
          schema: {
            name: 'CMS Web Development Services',
            description:
              'Our CMS web development services provide omni-channel digital environment that manages content assets with ease. Personalized, tailored, and flexible solutions to content management systems.Easy development, personalization and implementation using industry leading technologies like WordPress, Drupal, Joomla and Expression Engine.'
          }
        }
      },

      ecommerce: {
        name: 'E-COMMERCE PLATFORMS',
        title: 'Online stores with enhanced security and performance',
        desc:
          'Our e-commerce website development is customized to make a lasting impression with diversity. Our agile team of professionals provide integrated solutions that attract the right community leading to successful online marketplaces.',
        contents: [
          {
            image: 'icons slicine-2 competitive benchmarking.png',
            title: 'Real-time analytics and reports',
            content:
              'Instant insight into the performance of websites and sales campaigns with data reporting and analytics.'
          },
          {
            image: 'icons-19.svg',
            title: 'Easy to use',
            content:
              'Enable fully automated process by featuring a simple and intuitive user interface.'
          },
          {
            image: 'icons-26.svg',
            title: 'Technology and framework',
            content:
              'Powered by proven technology including Magento 2, Shopify , WooCommerce.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | E-Commerce Website Development Company| India, USA',
          description:
            'Our e-commerce website development is customized to make a lasting impression with diversity.',
          keywords:
            'ecommerce website development, e-commerce website development company, e-commerce website development company in india,e-commerce website development company in chennai',
          image:`${require('@/assets/images/socialsharing/doodleblue - e commerce.png')}`,
          twitterImages: 'https://doodlebluebytes.com/social-share-images/services/webtechnology/doodleblue-ecommerce.png',
          schema: {
            name: 'e-commerce Website Development Services',
            description: 'Our e-commerce website development is customized to make a lasting impression with diversity. Our agile team of professionals provide integrated solutions that attract the right community leading to successful online marketplaces.'
          }
        }
      },

      webApp: {
        name: 'CUSTOM WEB APPLICATIONS',
        title: 'Unparalleled customization benefits',
        desc:
          'Our custom web app devlopment applies sound process of strategy, user experience, design execution, programming to form a successful online business that allows business to innovate and deliver better business results.',
        contents: [
          {
            image: 'icons dt-8 - marketing goal setting.png',
            title: 'Analysis',
            content:
              'Security testing to check data leaks, modifications, authorisations and authentications.'
          },
          {
            image: 'icons dt-3 - infrastructure scalability.png',
            title: 'Architecture',
            content:
              'Design to function efficiently in relation to scale, robustness, and security.'
          },
          {
            image: 'icons dt-13 - comptetive intelligence.png',
            title: 'Deployment',
            content:
              'Encompass processes to get new software and hardware up and running in its environment.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Custom Web App Development | India,USA',
          description:
            'Our custom web app devlopment applies sound process of strategy, user experience, design execution, programming to form a successful online business',
          keywords:
            'custom web application development, custom web app development,custom web app development companies, custom web application development services,web application development companies, custom web app development companies in india, custom web app development companies in chennai',
          image:`${require('@/assets/images/socialsharing/doodleblue - Custom Web.png')}`,
          twitterImages: 'https://doodlebluebytes.com/social-share-images/services/webtechnology/doodleblue-CustomWeb.png',
          schema: {
            name: 'Custom Web App Development Services',
            description: 'Our custom web app development applies sound process of strategy, user experience, design execution, programming to form a successful online business that allows business to innovate and deliver better business results.'
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
        case 'content-management-systems':
          return this.cms
          break
        case 'e-commerce-platforms':
          return this.ecommerce
          break
        case 'custom-web-applications':
          return this.webApp
          break
        default:
          this.$router.push({ name: 'pagenotfound' })
          return this.cms
      }
    }
  }
}
</script>

<style scoped>
</style>
