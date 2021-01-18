<template>
  <div>
    <!-- Banner -->
    <Banner :title="computeSubService.name"/>
    <!-- Banner -->

    <!-- Sub service content items -->
    <SubServiceContent :subService="computeSubService" color="rgb(113, 88, 231)"/>
    <!-- Sub service content items -->

    <!-- Recent Works Swiper -->
    <!-- <ServiceCaseStudy/> -->
    <!-- Recent Works Swiper -->
  </div>
</template>

<script>
import Banner from '@/components/Services/SubServices/innovation/Banner/index.vue'
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
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.computeSubService.seo.title
        },
        {
        hid : "twitter:card",
        name : "twitter:card",
        content: "summary_large_image"
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
      machineLearning: {
        name: 'MACHINE LEARNING & AI',
        title: 'Intrinsic intelligence',
        desc:
          'Turn your business agile and smarter artifical intelligence and machine learning. We deliver advanced insights, power business alerts, and drive intelligent recommendations to users that help businesses make better decisions.',
        contents: [
          {
            image: 'icons innovation-3 -data science.png',
            title: 'Data science',
            content:
              'Security testing to check data leaks, modifications, authorisations and authentications.'
          },
          {
            image: 'icons innovation-10 - data model training.png',
            title: 'Data model training',
            content:
              'Input high quality training data based on algorithms that create supervised learning systems.'
          },
          {
            image: 'icons innovation-8 - efficiency.png',
            title: 'Efficiency',
            content:
              'Overcome time and resource constraints and enhance efficiency effectively.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Artificial Intelligence & Machine Learning | India,USA',
          keywords: 'AI & Machine learning consulting services, AI software development, Artificial Inteligence and machine learning services, Artificial Inteligence and machine learning services, Artificial Inteligence and machine learning consulting services, ai services company, Artificial Inteligence and machine learning services company',
          description:
            'Our AI and Machine learning capabilities deliver advanced insights, power business alerts, and drive intelligent recommendations to users.',
          image:`${require('@/assets/images/socialsharing/doodleblue - Machine Learning and AI.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/innovation/doodleblue-MachineLearningandAI.png',
          schema: {
            name: 'Artificial Intelligence & Machine Learning Services',
            description: 'Turn your business agile and smarter with artificial intelligence and machine learning. We deliver advanced insights, power business alerts, and drive intelligent recommendations to users that help businesses make better decisions.'
          }
        }
      },

      arvr: {
        name: 'AUGUMENTED & VIRTUAL REALITY',
        title: 'Visualize what matters',
        desc:
          'Brand experiences are built aroud ubiquity, seamlessness and personalization in a digital world. Our virtual reality development and augmented reality development teams  deliver an interactive and engaging experience with fascinating and unique ideas that add value, purpose and authenticiy to projects.',
        contents: [
          {
            image: 'icons innovation-12 - augumented reality.png',
            title: 'Augmented Reality',
            content: 'Create emotions with new perspectives and dimensions',
            desc:
              'Visualize limitless oppurtunities with rich and impressive content. We create compelling and life-like experiences with robust AR-based applications that are innovative and ccontribute to marketing campaigns by imbibing figments of AR.'
          },
          {
            image: 'icons innovation-11 - virtual reality.png',
            title: 'Virtual Reality',
            content: 'Blend the real with virtual',
            desc:
              'We provide virtual reality app development services for various VR platforms including Oculus Rift, HTC Vive, Samsung Gear VR and more. We leverage the raw potential of this powerful art form by creating immersive experiences from events to gaming.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Augmented & Virtual Reality Development | India,USA',
          description:
            'Our AR and VR Services deliver an interactive and engaging experience with fascinating and unique ideas that add value, purpose and authenticiy to projects.',
          keywords:
            'virtual reality applications,augmented reality apps, augmented reality development, augmented reality app development, virtual reality apps for android, virtual reality development,augmented reality apps for android, virtual reality apps for iOS ar and vr solutions, ar and vr companies,',
          image:`${require('@/assets/images/socialsharing/doodleblue - Augumented and Virtual Reality.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/innovation/doodleblue-AugumentedandVirtualReality.png',
          schema: {
            name: 'Augmented & Virtual Reality Development Services',
            description: 'Our virtual reality development and augmented reality development teams deliver an interactive and engaging experience with fascinating and unique ideas that add value, purpose and authenticity to projects.'
          }
        }
      },

      iot: {
        name: 'INTERNET OF THINGS',
        title: 'Connecting smart hardware ecosystem',
        desc:
          'Enhance everyday life with IoT technology and transform business needs to tangilbe solutions. We customize IoT application development to support multi-functional transformation through secure communication and data processing between devices.',
        contents: [
          {
            image: 'icons innovation-7 - integration.png',
            title: 'Integration',
            content:
              'Robust framework that enhances optimization between the platform and enterprise systems through communication modes like Wi-Fi, Bluetooth, iBeacon, NFC, RFID and Zigbee Wireless.'
          },
          {
            image: 'icons innovation-2 - data sync.png',
            title: 'Data sync',
            content:
              'Built on a platform that is embedded into applications for easy data transfer.'
          },
          {
            image: 'icons innovation-4 - control.png',
            title: 'Control',
            content:
              'Easy control of electronic devices using interrelated computing devices.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | IOT Application Development | India,USA',
          keywords:
            'Make your business agile and smarter with our IoT application development.,iot solution providers, iot companies, IOT services, Internet of things solutions company, Internet of things solution provider, Internet of things consulting companies',
          description: 'We customize IoT application development to support multi-functional transformation through secure communication and data processing between devices.',
          image:`${require('@/assets/images/socialsharing/doodleblue - Internet of Things.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/innovation/doodleblue-InternetofThings.png',
          schema: {
            name: 'IOT Application Development Services',
            description: 'Enhance everyday life with IoT technology and transform business needs to tangible solutions. We customize IoT application development to support multi-functional transformation through secure communication and data processing between devices.'
          }
        }
      },
      blockChain: {
        name: 'BLOCKCHAIN',
        title: 'Network of nodes',
        desc:
          'Our blockchain development services adopts a process that fits the digital ecosystem. Right from design-thinking driven assessments to customization ideas for solutions, we address vital aspects like security and privacy of shared data.',
        contents: [
          {
            image: 'icons innovation-7 - integration.png',
            title: 'Data management',
            content:
              'Ability to manage data which can be easily distributed in small fractions.'
          },
          {
            image: 'icons innovation-2 - data sync.png',
            title: 'Decentralized system ',
            content:
              'Network operates on a user-to-user basis which opens the door to direct interactions.'
          },
          {
            image: 'icons innovation-4 - control.png',
            title: 'Security',
            content:
              'Enables secure storage of arbitrary information within the network, simply by securing a set of private keys.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Blockchain Development Services | India,USA',
          description:
            "Our Blockchain services addresses vital aspects like security and privacy of shared data, right from design-thinking driven assessments to customization ideas for solution",
          keywords:
            'blockchain development company, blockchain development services,blockchain development company, blockchain development services, Blockchain Solutions & Technology Services, blockchain services, blockchain solutions, blockchain technology solutions',
          image:`${require('@/assets/images/socialsharing/doodleblue - Blockchain.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/innovation/doodleblue-Blockchain.png',
          schema: {
            name: 'Blockchain Development Services',
            description: 'Our blockchain development services adopts a process that fits the digital ecosystem. Right from design-thinking driven assessments to customization ideas for solutions, we address vital aspects like security and privacy of shared data.'
          }
        }
      },
      cyberSecurity: {
        name: 'CYBERSECURITY',
        title: 'Protect exploitation of data',
        desc:
          'Our cybersecurity as a service instills operational discipline in business and structural changes. We set foundational capabilities and define a comprehensive cybersecurity strategy. We define business driven enterprise security architecture for a secure and impenetrable data based transaction.',
        contents: [
          {
            image: 'icons innovation-7 - integration.png',
            title: 'Secure configuration',
            content:
              'Furnish cyber security assurance and remediation advice via firewall and host database configuration that defines a baseline by applying security patches.'
          },
          {
            image: 'icons innovation-2 - data sync.png',
            title: 'Malware Protection',
            content:
              'Prevent propagation of malicious software and protect connected users from unauthorized access with a system that detects malicious code.'
          },
          {
            image: 'icons innovation-4 - control.png',
            title: 'Network security',
            content:
              'Keep outside threat at bay via firewall system by monitoring and encrypting information and managing network perimeters.'
          }
        ],
        seo: {
          title: 'doodleblue innovations | Cybersecurity Company | India,USA',
          description:
            'Our cybersecurity service sets foundational capabilities, define a comprehensive cybersecurity strategy and define business driven enterprise security architecture.',
          keywords: 'cybersecurity as a service, cyber security companies,cyber security consulting services, cyber security service companies, Cybersecurity, Cyber attack, Cybersecurity strategy, Cybersecurity strategy implementation, Cybersecurity audit, Security analytics, Vulnerabilities, Digital transformation, Social, Mobility, Analytics, Cloud, Internet of Things, SMACT, Risk',
          image:`${require('@/assets/images/socialsharing/doodleblue-Cybersecurity.png')}`,
          twitterImage: 'https://doodlebluebytes.com/social-share-images/services/innovation/doodleblue-Cybersecurity.png',
          schema: {
            name: 'Cybersecurity Services',
            description: 'Our cybersecurity as a service instills operational discipline in business and structural changes. We set foundational capabilities and define a comprehensive cybersecurity strategy. We define business driven enterprise security architecture for a secure and impenetrable data based transaction.'
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
        case 'augumented-virtual-reality':
          return this.arvr
          break
        case 'machine-learning-ai':
          return this.machineLearning
          break
        case 'internet-of-things':
          return this.iot
          break
        case 'blockchain':
          return this.blockChain
          break
        case 'cybersecurity':
          return this.cyberSecurity
          break
        default:
          this.$router.push({ name: 'pagenotfound' })
          return this.arvr
      }
    }
  }
}
</script>

<style scoped>
</style>
