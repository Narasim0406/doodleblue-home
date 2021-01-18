<template>
  <div>
    <section class="recentWorksSwiperWrapper">
      <b-container fluid>
        <h2 class="wow fade-in-bottom">Recent Work</h2>

        <div
          data-relative-input="true"
          id="titleScene3"
          class="sectionFadedTitle wow fade-in-bottom"
          data-wow-delay="0.5s"
          data-wow-offset="250"
        >
          <h3 class="h1" data-depth="-0.1">Work</h3>
        </div>

        <div class="view-section-container">
          <b-row>
            <b-col md="12">
              <div class="container case-studies-container">
                <b-row align-h="center" align-v="center">
                  <b-col md="7">
                    <div class="case-study-image-div" v-lazy-container="{ selector: 'img' }">
                      <img :data-src="$getImgUrl(caseStudyServices.image)" :alt="caseStudyServices.title">
                    </div>
                  </b-col>
                  <b-col md="5">
                    <div class="case-study-right-container wow fade-in-left">
                      <div class="media-blue-gradient"></div>
                      <p>{{ caseStudyServices.title }}</p>
                      <h2>{{ caseStudyServices.content }}</h2>
                      <nuxt-link
                        class="myLink"
                        :to="{ name: 'casestudy-id',params:{id:''+caseStudyServices.url.trim()+''}}"
                      >
                        <Button
                          class="wow fade-in-bottom"
                          data-wow-delay="0.1s"
                          buttonText="Case Study"
                          color="#006ada"
                        />
                      </nuxt-link>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  },

  data() {
    return {
      caseStudy: {
        digitalInformation: {
          title: 'Digital Transformation',
          content: 'Increased Customer Engagement For Fashion Houses',
          image: 'Increased customer engament for fashion houses.png',
          url: 'fashion'
        },
        uiUxDesign: {
          title: 'UI/UX & Design Thinking',
          content: 'Seamless & agile CRM Portal for Leisure Line',
          url: 'hospitality',
          image: 'Seamless and agile CRM.png'
        },
        mobileEngineering: {
          title: 'Mobile Engineering',
          content: 'One-touch application for transport facility',
          url: 'transport',
          image: 'One touch application for transport.png'
        },
        webTechnology: {
          title: 'Web Technology Development',
          content: 'Multiple Customizable Services For Finance Powerhouse',
          url: 'finance',
          image: 'Multiple customisable - thumbnail.png'
        },
        innovation: {
          title: 'Innovation',
          content: 'Riveting Shopping Experience With Chatbot',
          url: 'retail',
          image: 'Reviting shopping experience with chat bot-thumbnail.png'
        },
        enterpriseApplication: {
          title: 'Enterprise Application Development',
          content: 'Inception of Brand Establishment for Educational Institute',
          url: 'education',
          image: 'Multiple customisable - thumbnail.png'
        },
        healthCareDigitalTransformation: {
          title: 'Digital Transformation',
          content: 'Business Enhancement For Healthcare Systems',
          url: 'healthcare',
          image: 'business-enhancement-for-healthcare.jpg'
        },
        teleCommunicationEnterpriseApp: {
          title: 'Enterprise Application Development',
          content: 'Connecting millions with customer insights',
          url: 'telecom',
          image: 'Connection-millions-with.jpg'
        }
      }
    }
  },

  computed: {
    caseStudyServices() {
      if (this.$route.params.service == 'digitaltransformation') {
        return this.caseStudy.digitalInformation
      } else if (this.$route.params.service == 'uiuxdesign') {
        return this.caseStudy.uiUxDesign
      } else if (this.$route.params.service == 'mobileengineering') {
        return this.caseStudy.mobileEngineering
      } else if (this.$route.params.service == 'webtechnology') {
        return this.caseStudy.webTechnology
      } else if (this.$route.params.service == 'innovation') {
        return this.caseStudy.innovation
      } else if (this.$route.params.service == 'enterpriseapplications') {
        return this.caseStudy.enterpriseApplication
      } else if (this.$route.params.service == 'healthcare') {
        return this.caseStudy.healthCareDigitalTransformation
      } else if (this.$route.params.service == 'telecom') {
        return this.caseStudy.teleCommunicationEnterpriseApp
      } else {
      }
    }
  },
  mounted() {
    if (process.client) {
      setTimeout(() => {
        var titleScene3 = document.getElementById('titleScene3')
        var parallaxInstanceTitle = new Parallax(titleScene3)
      }, 100)
    }
  }
}
</script>

<style scoped>
.view-section-container {
  padding: 30px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.view-section-container .case-study-image-div {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  /* height: 400px; */
}
.view-section-container .case-study-image-div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* vertical-align: middle; */
}
.view-section-container .case-study-right-container {
  padding: 20px;
  position: relative;
}
.case-study-right-container p {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20px;
  font-weight: 600;
  color: #006ada;
}
.case-study-right-container h2 {
  text-transform: uppercase;
  font-size: 39px;
  letter-spacing: 7px;
  font-weight: 600;
  color: #000;
  margin-bottom: 26px;
  text-align: left;
}
.site_button_wrapper .text-div {
  display: inline-block;
}
.site_button_wrapper .text-div p {
  color: #000;
  font-size: 18px;
  margin: 0;
  transform: translateY(-5px);
}
.case-study-view-arrow {
  padding: 0px 15px;
  border: 1px solid #000;
}

.section_sub_title {
  font-size: 22px;
  color: #aaa;
}

/* .case-study-right-container:after {
    position: absolute;
    content: "";
    width: 200%;
    top: 0;
    height: 100%;
    border: 5px solid #006ada;
    left: 0;
    transform: translateX(-50%);
    opacity: 0.1;
  } */

@media (max-width: 560px) {
  .recentWorksSwiperWrapper {
    margin: 4rem 0 !important;
  }
}
</style>
