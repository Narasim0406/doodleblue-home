<template>
  <div>
    <!-- Banner -->
    <Banner :title="computeSubService.name" />
    <!-- Banner -->

    <!-- Sub service content items -->
    <SubServiceContent :subService="computeSubService" color="#006ada" />
    <!-- Sub service content items -->

    <!-- Recent Works Swiper -->
    <ServiceCaseStudy />
    <!-- Recent Works Swiper -->
  </div>
</template>

<script>
import Banner from '@/components/Services/SubServices/uiuxdesign/Banner/index.vue'

import ServiceCaseStudy from '@/components/Services/ServiceCaseStudy.vue'
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
          property: 'og:description',
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
    ServiceCaseStudy,
    SubServiceContent
  },
  data() {
    return {
      branding: {
        name: 'branding',
        title: 'Establish and escalate brand value',
        desc:
          'Our brand strategy consulting reinforces brand to create a visual identity and experience that makes a difference. We build brands and drive business growth with a strategic plan that communicates and adheres to brand guidelines and philosophy.',
        contents: [
          {
            image: 'icons slicine-6 - research.png',
            title: 'Research',
            content:
              'Research and methodical analysis yeilds a trove of invaluable insights. We build our solutions upon a foundation of solid research, sound analysis that draw up an actionalble list of recommendations.'
          },
          {
            image: 'icons slicine-13 - brand identity.png',
            title: 'Brand Identity',
            content:
              'We blend logic with creativity to create thoughtful, unforgettable brand identities, systems and experiences that flex and evlove with changing needs.'
          },
          {
            image: 'icons slicine-1 - visual style.png',
            title: 'Visual Style',
            content:
              'Driving strategic advantage and adding value by creating, reviving and reframing brands that are build on a spectrum of creative optimism.'
          },
          {
            image: 'icons slicine-7 - guidelines.png',
            title: 'Guidelines',
            content:
              'Make brand experiences for a more connected future by creating assets that make your brand stand out and add future value.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Brand Strategy Consulting | India, USA',
          description:
            "Our Brand strategy consulting reinforces brand to create a visual identity and experience that makes a difference.",
          keywords:
            'branding agency,branding services, company branding, brand strategy, brand guidelines',
          image: `${require('@/assets/images/socialsharing/doodleblue - Branding.png')}`,
          twitterImages: 'https://doodlebluebytes.com/social-share-images/services/uiuxdesign/doodleblue-Branding.png',
          schema: {
            name: 'Brand Strategy Services',
            description: 'Our brand strategy consulting reinforces brand to create a visual identity and experience that makes a difference. We build brands and drive business growth with a strategic plan that communicates and adheres to brand guidelines and philosophy.We blend logic with creativity to create thoughtful, unforgettable brand identities, systems and experiences that flex and evolve with changing needs.'
          }
        }
      },

      uxStrategy: {
        name: 'Ux Strategy',
        title: 'Rationale for foreseeable future',
        desc:
          'Great brands live at the intersection of clarity and surprise. Our ux strategy adapts functional features that are useful, intuitive and beautiful.',
        contents: [
          {
            image: 'icons slicine-3 - business strategy.png',
            title: 'Business Strategy',
            content:
              "UX strategy shapes effective and coherent digital brand experiences by developing a deeper understanding of the company's business strategy."
          },
          {
            image: 'icons slicine-2 competitive benchmarking.png',
            title: 'Competitive Benchmarking',
            content:
              "Benchmarking offers a way to inerpret your usability KPI's, gain market intelligence and develop new insights and inspirations."
          },
          {
            image: 'icons slicine-4 - web analytics.png',
            title: 'Web Analytics',
            content:
              'Analyzing trends and outliers in data can identify UX opportunities and evaluate favourable UX designs.'
          },
          {
            image: 'icons slicine-12 - behavioral segementation.png',
            title: 'Behavioral Segmentation, Personas and Usage Scenarios',
            content:
              'We manoeuvre user-centred design methods along with a framework for incorporating usablitiy, persuasion and emotion.'
          },
          {
            image: 'icons slicine-8 - interaction modeling.png',
            title: 'Interaction Modeling',
            content:
              'Interaction model binds an application together in a way that enhances user interaction by improving the usability and accessibility.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | UX Strategy Consulting | India, USA',
          description:
            "Our UX strategy adapts functional features that are useful, intuitive and beautiful by developing a deeper understanding of the company's business strategy.",
          keywords: 'ux consultant, UX Strategy, user experience strategy,ux strategy consultant, ux strategy consulting services, ux strategy consulting services in India, ux strategy consulting services in chennai',
          image: `${require('@/assets/images/socialsharing/doodleblue - Ux Strategy.png')}`,
          twitterImages: 'https://doodlebluebytes.com/social-share-images/services/uiuxdesign/doodleblue-UxStrategy.png',
          schema: {
            name: 'UX Strategy Services',
            description: "Our ux strategy adapts functional features that are useful, intuitive and beautiful. UX strategy shapes effective and coherent digital brand experiences by developing a deeper understanding of the company's business strategy."
          }
        }
      },

      mobileWeb: {
        name: 'mobile & web design',
        title: 'Craft an interactive experience',
        desc:
          'Our team of adept visual designers translate wireframes into powerful and intuitive user interface designs. Our wearable app development company creates new age designs with visual vocabulary which concords with brand identity, philosophy and objectives.',
        contents: [
          {
            image: 'icons slicine-11 - information architecture.png',
            title: 'Information Architecture',
            content:
              'Classify concepts and entities, plan a navigation system and design search functionality.'
          },
          {
            image: 'icons slicine-9 - visual design process.png',
            title: 'Visual design process',
            content:
              'Transform the brand ethos into visual language with intuitive, unambiguous and ergonomic designs.'
          },
          {
            image: 'icons slicine-5 - user flow.png',
            title: 'User flow',
            content:
              'Adopt user pathway that advocates design and development decision.'
          },
          {
            image: 'icons slicine-10 - usability testing.png',
            title: 'Usability testing',
            content:
              'User-centered interaction testing to evaluate and identify problem areas to enhance and improve designs.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Mobile, Web and Wearable Interface design | India, USA',
          description:
            'Our Mobile and Wearable app development company creates new age designs with visual vocabulary which concords with brand identity, philosophy and objectives.',
          keywords: 'wearable app development company,mobile app designing company, web development company, web development company in India, web development company in chennai',
          image: `${require('@/assets/images/socialsharing/doodleblue - Mobile and web.png')}`,
          twitterImages: 'https://doodlebluebytes.com/social-share-images/services/uiuxdesign/doodleblue-Mobileandweb.png',
          schema: {
            name: 'Mobile, Web & wearable Interface Design Services',
            description: 'Our team of adept visual designers translate wire frames into powerful and intuitive user interface designs. Our wearable app development company creates new age designs with visual vocabulary which concord with brand identity, philosophy and objectives.'
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
        case 'branding':
          return this.branding
          break
        case 'ux-strategy':
          return this.uxStrategy
          break
        case 'mobile-web-design':
          return this.mobileWeb
          break
        default:
          this.$router.push({ name: 'pagenotfound' })
          return this.uxStrategy
      }
    }
  }
}
</script>

<style scoped>
</style>
