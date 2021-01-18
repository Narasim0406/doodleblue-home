<template>
  <div>
    <!-- Banner -->
    <Banner :title="computeSubService.name" />
    <!-- Banner -->

    <!-- Sub service content items -->
    <SubServiceContent :subService="computeSubService" color="rgb(221, 29, 69)" />
    <!-- Sub service content items -->

    <!-- Recent Works Swiper -->
    <ServiceCaseStudy />
    <!-- Recent Works Swiper -->
  </div>
</template>

<script>
import Banner from '@/components/Services/SubServices/digitaltransformation/Banner/index.vue'
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
    ServiceCaseStudy,
    SubServiceContent
  },
  data() {
    return {
      techEcosystem: {
        name: 'technology & ecosystem audit',
        title: 'Unify your approach',
        desc:
          'Audit technology strategy promotes greater consisency and repeatability, which are part of the fabric in delivering a digital audit. We uncover insights and observations that can add value for a seamless integration of suites to enrich experiences.',
        contents: [
          {
            image: 'icons dt-5 - dmaic.png',
            title: 'DMAIC',
            content:
              'Formalize and implement 6 sigma methodology for expert acquaintance.'
          },
          {
            image: 'icons dt-2 - security.png',
            title: 'Security',
            content:
              'Systematic examination and verification of network security for potent control and testing.'
          },
          {
            image: 'icons dt-3 - infrastructure scalability.png',
            title: 'Infrastructure Scalability',
            content: 'Handle changing environment and ecosystem advancements.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Technology & ecosystem audit Services | India, USA',
          description:
            'doodleblue offers a digital audit to uncover insights and observations that can add value for a seamless integration of suites to enrich experiments',
          keywords: 'digital transformation technologies, technology audit services, technology eco system audit',
          image:`${require('@/assets/images/socialsharing/doodleblue - Tech and eco System.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/digitaltransformation/doodleblue-TechandecoSystem.png',
          schema: {
            name: 'Technology & Ecosystem Audit Services',
            description: 'We uncover insights and observations that can add value for a seamless integration of suites to enrich experiences.Audit technology strategy promotes greater consistency and repeatability , which are part of the fabric in delivering a digital audit.Systematic examination and verification of network security for potent control and testing.'
          }
        }
      },

      digitalStrategy: {
        name: 'digital strategy',
        title: 'Leverage digital assets for optimization',
        desc:
          'Achieve visibility and sustain with comprehensive and innovative methods to reach your business goals. Our digital strategy team takes a customized approach to create a detailed strategy that delivers desired results.',
        contents: [
          {
            image: 'icons dt-13 - comptetive intelligence.png',
            title: 'Competitive Intelligence',
            content:
              'Validate digital strategy by choosing right metrics, tools and expertise to develop new initiatives to enhance competitive position.'
          },
          {
            image: 'icons dt-4 - brand auditing.png',
            title: 'Brand Auditing',
            content:
              'Examine and investigate company’s intangible asset by comprehensive approach, bespoke methods and actionable recommendations.'
          },
          {
            image: 'icons dt-8 - marketing goal setting.png',
            title: 'Marketing Goal Setting',
            content:
              'Take current trends into account built on unyielding market research to harness complete digital potential.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Digital-strategy Services | India, USA',
          description:
            'Our Digital strategy team takes a customized approach to create a detailed strategy that delivers desired results.',
          keywords: 'digital strategy, digital advertising, digital transformation strategy, digital strategy company, digital strategy consulting companies',
          image:`${require('@/assets/images/socialsharing/doodleblue - Digital Strategy.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/digitaltransformation/doodleblue-DigitalStrategy.png',
          schema: {
            name: 'Digital Strategy Services',
            description: 'Achieve visibility and sustain with comprehensive and innovative methods to reach your business goals.Validate digital strategy by choosing the right metrics, tools and expertise to develop new initiatives to enhance competitive position. Our digital strategy team takes a customized approach to create a detailed strategy that delivers desired results.'
          }
        }
      },

      digitalMarketing: {
        name: 'digital marketing',
        title: 'A conglomerate digital landscape to bring ROI',
        desc:
          'Our digital marketing services provides compelling startegies that build a strong connection between brands and their potential customers which is uniquely optimized by our adroit professionals such that it provides greater brand loyalty.',
        contents: [
          {
            image: 'icons dt-11 - seo.png',
            title: 'SEO',
            content: 'Enhance optimization organically',
            points: {
              col1: [
                'Website Audit',
                'Competitor Analysis',
                'Keyword Analysis'
              ],
              col2: [
                'On-page Optimization',
                'Off-page Optimization',
                'Reporting'
              ]
            }
          },
          {
            image: 'icons dt-12 - sem.png',
            title: 'SEM',
            content: 'Amplify your brand',
            points: {
              col1: [
                'Google Adwords',
                'Youtube Ads',
                'Flipkart Ads',
                'Amazon Ads'
              ],
              col2: ['Yahoo Ads', 'Facebook Ads']
            }
          },
          {
            image: 'icons dt-15 - smm.png',
            title: 'SMM',
            content: 'Build relationships',
            points: {
              col1: ['Paid Media ', 'Owned Media', 'Earned Media'],
              col2: ['Engagement', 'Analytics', 'Reporting']
            }
          },
          {
            image: 'icons dt-14 - orm.png',
            title: 'ORM',
            content: 'Protect your digital identity',
            points: {
              col1: [
                'Build online presence',
                'Promote and generate positive reviews',
                'Gives strong search engine rankings'
              ],
              col2: []
            }
          },
          {
            image: 'icons dt-10 - campaign outreach.png',
            title: 'Campaign Outreach',
            content: 'Comprehensive digital strategy',
            points: {
              col1: [
                'Email Strategy',
                'Newsletter Marketing',
                'Retargeting Mechanism'
              ],
              col2: []
            }
          },
          {
            image: 'icons dt-7 - content strategy.png',
            title: 'Content Strategy',
            content: 'Fuel your brand and drive results',
            points: {
              col1: [
                'Tone of voice',
                'Evaluation of framework',
                'Keyword Analysis'
              ],
              col2: ['Content pillars', 'Content calendar']
            }
          }
        ],
        seo: {
          title: 'doodleblue innovations | Digital marketing services | India, USA',
          description:
            'Our Digital marketing services provide compelling strategies that build a strong connection between brands and their potential customers through up to date market techniques',
          keywords:
            'digital marketing agency, internet marketing company, digital marketing company, internet marketing service, top digital marketing agencies, digital marketing services, online digital marketing company, online marketing companies, online marketing agency, digital marketing companies in india, digital marketing companies in chennai',
          image:`${require('@/assets/images/socialsharing/doodleblue - Digital-Marketing.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/digitaltransformation/doodleblue-Digital-Marketing.png',
          schema: {
            name: 'Digital Marketing Services',
            description: 'Our digital marketing services provides compelling strategies that build a strong connection between brands and their potential customers which is uniquely optimized by our adroit professionals such that it provides greater brand loyalty.'
          }
        }
      },

      dataAnalytics: {
        name: 'data analytics',
        title: 'Decision science to optimize operation',
        desc:
          'Uncover relevant insights by reducing redundancies in data assets through our industry-specific and customizable ontology detection. We help optimize operations, guide empirical data-driven decisions and exploit data opportunities to maximize impact.',
        contents: [
          {
            image: 'icons dt-13 - comptetive intelligence.png',
            title: 'Data visualization',
            content:
              'Capacitate better insights and trends that help in identification of areas that need attention.'
          },
          {
            image: 'icons dt-4 - brand auditing.png',
            title: 'Business Intelligence',
            content:
              'Enable data driven decision-making for better outcomes and enhanced efficiency.'
          },
          {
            image: 'icons dt-8 - marketing goal setting.png',
            title: 'Big data',
            content:
              'Harness big data analytics to drive better business decisions, and understand customer behaviour and preference.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Digital Analytics services | India, USA',
          description:
            'Our Digital Analytics services uncover relevant insights to optimize operations, guide empirical data-driven decisions and exploit data opportunities to maximize impact.',
          keywords: 'data analysis, data analytics services, data visualization services, data analytics services in india, data analytics services in chennai',
          image:`${require('@/assets/images/socialsharing/doodleblue - Data.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/digitaltransformation/doodleblue-Data.png',
          schema: {
            name: 'Data Analytics Services',
            description: 'Uncover relevant insights by reducing redundancies in data assets through our industry-specific and customizable ontology detection.Harness big data analytics to drive better business decisions, and understand customer behavior and preference. We help optimize operations, guide empirical data-driven decisions and exploit data opportunities to maximize impact.'
          }
        }
      }
    }
  },
  computed: {
    computeSubService() {
      let route = this.$route.params.subservice
      switch (route) {
        case 'technology-ecosystem-audit':
          return this.techEcosystem
          break
        case 'digital-strategy':
          return this.digitalStrategy
          break
        case 'digital-marketing':
          return this.digitalMarketing
          break
        case 'data-analytics':
          return this.dataAnalytics
          break
        case 'digital-analytics':
          return this.dataAnalytics
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
