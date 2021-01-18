<template>
  <div>
    <!-- Banner -->
    <Banner :title="computeSubService.name"/>
    <!-- Banner -->

    <!-- Sub service content items -->
    <SubServiceContent :subService="computeSubService" color="rgb(47, 173, 206)"/>
    <!-- Sub service content items -->

    <!-- Recent Works Swiper -->
    <!-- <ServiceCaseStudy/> -->
    <!-- Recent Works Swiper -->
  </div>
</template>

<script>
import Banner from '@/components/Services/SubServices/enterpriseapplications/Banner/index.vue'
// // import ServiceCaseStudy from '@/components/Services/ServiceCaseStudy.vue'
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
          content: this.computeSubService.seo.twitterImage
        }
      ]
    }
  },
  components: {
    Banner,
    SubServiceContent,
    // ServiceCaseStudy
  },
  data() {
    return {
      erp: {
        name: 'ENTERPRISE RESOURCE PLANNING',
        title: 'Enhance market potential',
        desc:
          'A comprehensive enterprise app development software that provides a complete management suite in terms of production, management, distribution, inventory, finance and human resource that scales and supports application evolution.',
        contents: [
          {
            image: 'icons slicine-4 - web analytics.png',
            title: 'Integration',
            content:
              'Make the best of an integrated design-build-run model to streamline implementation.'
          },
          {
            image: 'icons dt-13 - comptetive intelligence.png',
            title: 'Data migration',
            content:
              'Perform programmatically to achieve an automated migration, freeing up human resources from tedious tasks.'
          },
          {
            image: 'icons dt-8 - marketing goal setting.png',
            title: 'Accessibility',
            content:
              'Provide centralized access to all information to accelerate decision making process.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Enterprise App Development | India,USA',
          description:
            "Our enterprise app development software provides a complete management suite in terms of production, management, distribution, inventory, finance and human resource.",
          keywords: 'enterprise resource planning software, enterprise resource planning system, erp software companies, erp agency, enterprise resource planning, enterprise resource planning solutions, enterprise resource planning solution provider, enterprise resource planning companies, enterprise resource planning company',
          image:`${require('@/assets/images/socialsharing/doodleblue - Enterprice Resource Planning.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/enterpriseapplications/doodleblue-EnterpriceResourcePlanning.png',
          schema: {
            name: 'Enterprise Resource Planning Services',
            description: 'A comprehensive enterprise app development software that provides a complete management suite in terms of production, management, distribution, inventory, finance and human resource that scales and supports application evolution.'
          }
        }
      },

      crm: {
        name: 'CUSTOMER RELATION MANAGEMENT',
        title: 'Strengthen and nurture experiences',
        desc:
          'Analyze interactions, manage processes and deliver efficient services with our customer management software. We provide end to end solution that runs on predictive modeling, gathering tangible insights through data forecasting and data mining.',
        contents: [
          {
            image: 'icons slicine-9 - visual design process.png',
            title: 'Centralize',
            content:
              'Streamline reporting with data centric storage for ease of access and smooth process by centralising every interaction.'
          },
          {
            image: 'icons-22.svg',
            title: 'Simplify',
            content:
              'Track activities, monitor performance, set goals and likelihood of interactions in real-time for enhanced business acumen.'
          },
          {
            image: 'icons-21.svg',
            title: 'Scale',
            content:
              'Pull consistently tracked data to serve as a comprehensive and strategic tool that identifies new opportunities and bottleneck areas.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | CRM Development Company | India,USA',
          description:
            "Our customer management software analyzes interactions, manage processes and delivers efficient services.",
          keywords:
            'customer management software, crm software for small business, best crm for small business, crm application, crm software development, best client management software, crm development company,crm software, crm system, customer relation management solutions, customer relation management services, customer relation management solution provider, customer relation management integration, customer relation management services companies in india, CRM integration services ',
          image:`${require('@/assets/images/socialsharing/doodleblue - Customer Relation Management.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/enterpriseapplications/doodleblue-CustomerRelationManagement.png',
          schema: {
            name: 'CRM Development Services',
            description: 'Analyze interactions, manage processes and deliver efficient services with our customer management software. We provide end to end solution that runs on predictive modeling, gathering tangible insights through data forecasting and data mining.'
          }
        }
      },

      pos: {
        name: 'point of sale',
        title: 'Digital system of operations',
        desc:
          'A true differentiator for business that customizes and tracks operations efiiciently and effectively.  We deliver end to end, integrated solutions that streamlines business system and expedites decision-making process with improved security measures.',
        contents: [
          {
            image: 'icons dt-13 - comptetive intelligence.png',
            title: 'Automatic',
            content:
              'Manage and analyze inventory by automating the process and providing real time alerts.'
          },
          {
            image: 'icons-16.svg',
            title: 'Analytics',
            content:
              'Analyze as well as keep track of operations efficiently and effectively.'
          },
          {
            image: 'icons-15.svg',
            title: 'Digital',
            content:
              'Calculate and display data digitally eliminating the need to maintain data in a traditional fashion.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | POS | India,USA',
          description:
            'Our Point of sales services delivers end to end, integrated solutions that streamlines business system and expedites decision-making process with improved security measures.',
          keywords: 'pos company in india, pos software for small business, point of sale services, point of sale sowtware for small business, point of sale services company, point of sale service companies in india',
          image:`${require('@/assets/images/socialsharing/doodleblue - Point of Sale.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/enterpriseapplications/doodleblue-PointofSale.png',
          schema: {
            name: 'POS Services',
            description: 'A true differentiation for business that customizes and tracks operations efficiently and effectively. We deliver end to end, integrated solutions that streamlines business system and expedites decision-making process with improved security measures.'
          }
        }
      },

      dataWarehousing: {
        name: 'DATA WAREHOUSING & WORKFLOW AUTOMATION',
        title: 'Data augmentation',
        desc:
          'Automate, control and accelerate data for accurate and informed decisions. We provide amalgamated view of data with advanced analysis and report that aids user-centric interface and business modeling.',
        contents: [
          {
            image: 'icons slicine-3 - business strategy.png',
            title: 'Agility',
            content:
              'Accelerate ETL(extract, transform, load) process time and achieve summarized data.'
          },
          {
            image: 'icons-32.svg',
            title: 'Flexibility',
            content:
              'Integrate both internal and external data sources, extensible and scalable to make alterations and maintain one version of the truth.'
          },
          {
            image: 'icons dt-4 - brand auditing.png',
            title: 'Operational efficiency',
            content:
              'Built to handle performance on large data volumes with a combination of application and database optimization processes and techniques.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Data Warehousing And Workflow Automation | India,USA',
          description:
            'Our data and workflow automation services provides an amalgamated view of data with advanced analysis and report that aids user-centric interface and business modeling.',
          keywords: 'workflow automation services,workflow automation, data warehousing, data warehousing solutions, workflow automation, business workflow automation, workflow automation services company, workflow automation companies in india, Business workflow automation services',
          image:`${require('@/assets/images/socialsharing/doodleblue - Data Warehousing and Workflow and Automation.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/enterpriseapplications/doodleblue-DataWarehousingandWorkflowandAutomation.png',
          schema: {
            name: 'Data Warehousing & Workflow Automation Services',
            description: 'Automate, control and accelerate data for accurate and informed decisions. We provide amalgamated view of data with advanced analysis and report that aids user-centric interface and business modeling.Built to handle performance on large data volumes with a combination of application and database optimization processes and techniques.'
          }
        }
      },

      businessIntelligence: {
        name: 'business Intelligence',
        title: 'Harness the power of data',
        desc:
          'Accelerate decision-making and optimize internal business process for faster data driven decisions. We create an interactive way to interpret data, identify new opportunities and share data driven insights in a closely guarded environment.',
        contents: [
          {
            image: 'icons-15.svg',
            title: 'Design models',
            content:
              'Design, develop and create multidimensional databases that integrates competing methodologies.'
          },
          {
            image: 'icons dt-2 - security.png',
            title: 'Data exploration and visualization',
            content:
              'Discover new patterns, identify key relations and visually explore relevant data backed by analytics.'
          },
          {
            image: 'icons-27.svg',
            title: 'Analyze',
            content:
              'Accelerate decision-making and optimize internal business process based on analysis of insights.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Business Intelligence Solutions | India,USA',
          description:
            "Our Business intelligence solutions creates an interactive way to interpret data, identify new opportunities and share data driven insights in a closely guarded environment.",
          keywords:
            'business intelligence solutions, business intelligence companies,business intelligence solutions, business intelligence companies, Business Intelligence, Reporting and Analytics Software, Business Intelligence Reporting and Analytics services, business intelligence solutions in India.',
          image:`${require('@/assets/images/socialsharing/doodleblue - Business Intelligence.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/enterpriseapplications/doodleblue-BusinessIntelligence.png',
          schema: {
            name: 'Business Intelligence Services',
            description: 'Accelerate decision-making and optimize internal business process for faster data driven decisions. We create an interactive way to interpret data, identify new opportunities and share data driven insights in a closely guarded environment.'
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
        case 'enterprise-resource-planning':
          return this.erp
          break
        case 'point-of-sale':
          return this.pos
          break
        case 'customer-relation-management':
          return this.crm
          break
        case 'data-workflow-automation':
          return this.dataWarehousing
          break
        case 'data-warehousing-workflow-automation':
          return this.dataWarehousing
          break
        case 'business-intelligence':
          return this.businessIntelligence
          break
        default:
          this.$router.push({ name: 'pagenotfound' })
          return this.erp
      }
    }
  }
}
</script>

<style scoped>
</style>
