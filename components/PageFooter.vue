<template>
  <div style="width: 100%;">
    <div  class="page_footer_wrapper" v-bind:class="{  'scrolled': scrolled }" >
      <!-- <h1>footer</h1> -->

      <b-container class="reachOut" fluid>
        <b-row>
          <!-- <b-col md="6">
            <h5 class="font-italic">Reach out to us.</h5>
          </b-col> -->
          <b-col md="6" offset-md="6">
            <b-row>
              <!-- <b-col class="text-right">
                <a class="link">
                  <h5 class="point">Reach out to us,</h5>
                </a>
              </b-col> -->

              <b-col class="text-right">
                <a class="link" href="mailto:sales@doodleblue.com">
                  <h5 class="point">Reach out to us on<span class="ml-3">sales@doodleblue.com</span></h5>
                </a>
              </b-col>

              <!-- <b-col class="text-right">
                <a class="link" href="tel:+91 95-66-162753">
                  <h5 class="point">+91 95-66-162753</h5>
                </a>
              </b-col> -->
            </b-row>
          </b-col>
        </b-row>
      </b-container>

      <b-container fluid>
        <b-row align-h="between">
          <b-col md="2" v-if="false">
            <div class="footer_logo">
              <div class="footer_logo_wrapper" v-lazy-container="{ selector: 'img' }">
                <img
                  :data-src="require('@/assets/images/doodleblue-footer-logo.svg')"
                  alt="doodleblue"
                  style="width:200px"
                >
              </div>

              <div class="doodle_caption">
                <span>
                  We are a digital strategy consulting boutique that leads digital transformations for global brands,
                  leading consultancies, famous startups, fortune 500s and goverments
                </span>
              </div>
            </div>
          </b-col>

          <b-col md="2" sm="12">
            <div class="footer_column">
              <div class="footer_column_title">
                <nuxt-link class="link" :to="{name: 'industries'}">Industries</nuxt-link>
              </div>
              <div class="footer_column_content">
                <ul>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'industries-industry',params: {industry: 'education'}}"
                    >Education</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'industries-industry',params: {industry: 'fashion'}}"
                    >Fashion</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'industries-industry',params: {industry: 'finance'}}"
                    >Financial services</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'industries-industry',params: {industry: 'healthcare'}}"
                    >Healthcare</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'industries-industry',params: {industry: 'hospitality'}}"
                    >Hospitality and Leisure</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'industries-industry',params: {industry: 'retail'}}"
                    >Retail</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'industries-industry',params: {industry: 'telecom'}}"
                    >Telecommunication</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'industries-industry',params: {industry: 'transport'}}"
                    >Transport and Logistics</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col md="2" sm="12">
            <div class="footer_column">
              <div class="footer_column_title">
                <nuxt-link class="link" :to="{name: 'services'}">Services</nuxt-link>
              </div>
              <div class="footer_column_content">
                <ul>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'services-service',params:{service:'digitaltransformation'}}"
                    >Digital Transformation</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'services-service',params:{service:'uiuxdesign'}}"
                    >UI/UX & Design Thinking</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'services-service',params:{service:'mobileengineering'}}"
                    >Mobile Engineering</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'services-service',params:{service:'webtechnology'}}"
                    >Web Technology Development</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'services-service',params:{service:'innovation'}}"
                    >Innovation</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="link"
                      :to="{ name: 'services-service',params:{service:'enterpriseapplications'}}"
                    >Enterprise Application Development</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col md="2" sm="12">
            <div class="footer_column">
              <div class="footer_column_title">
                <nuxt-link class="link" :to="{name: 'aboutus'}">About</nuxt-link>
              </div>
              <div class="footer_column_content">
                <ul>
                  <li>
                    <!-- <nuxt-link class="link" :to="{ name: 'aboutus', params:{goTo: 'leadership'}}"> -->
                    <nuxt-link
                      class="link"
                      :to="{ name: 'aboutus', params:{goTo: 'leadership'}}"
                    >Leadership</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="link" :to="{ name: 'aboutus', params:{goTo: 'press'}}">Press</nuxt-link>
                  </li>
                  <!-- <li>
                    <nuxt-link class="link" :to="{ name: 'contactus', params:{goTo: 'contactus'}}">Contact Us</nuxt-link>
                  </li> -->
                  <li>
                    <nuxt-link class="link" :to="{ name: 'success-stories', params:{goTo: 'success-stories'}}">Success Stories</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="link" :to="{ name: 'blogs', params:{goTo: 'blogs'}}">Blogs</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="link" :to="{ name: 'terms-and-conditions', params:{goTo: 'terms-and-conditions'}}">Terms & Conditions</nuxt-link>
                  </li>
                 <!-- <li>
                   <a class="link" href='http://community.doodleblue.com/'>Community</a>
                  </li>-->
                </ul>
              </div>
            </div>
          </b-col>

          <b-col md="2" sm="12">
            <div class="footer_column">
              <div class="footer_column_title">
                <nuxt-link class="link" :to="{ name: 'careers'}">Careers</nuxt-link>
              </div>
              <div class="footer_column_content">
                <ul>
                  <li>
                    <nuxt-link class="link" :to="{ name: 'careers-openings'}">View Openings</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="link" :to="{ name: 'careers-interns'}">Internship</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>

          <b-col md="2" sm="12" v-if="false">
            <div class="footer_column">
              <div class="footer_column_title">
                <nuxt-link class="link" :to="{ name: 'contactus'}">Contact</nuxt-link>
              </div>
              <div class="footer_column_content">
                <ul>
                  <li>
                    <a class="link" href="mailto:sales@doodleblue.com">sales@doodleblue.com</a>
                  </li>
                  <li>
                    <a class="link" href="mailto:genius@doodleblue.com">genius@doodleblue.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <br>
      <br>

      <b-container fluid>
        <b-row align-v="end">
          <b-col>
            <div class="footer_logo_wrapper" v-lazy-container="{ selector: 'img' }">
              <img
                :data-src="require('@/assets/images/doodleblue-footer-logo.svg')"
                alt="doodleblue"
                style="width:200px"
              >
            </div>

            <!--<div class="doodle_tag">
              <span>Digital</span>
              <span>Strategy</span>
              <span>Consulting</span>
            </div>-->

            <div class="doodle_caption">
              <span>
                We are a digital strategy consulting boutique that leads digital transformations for global brands,
                leading consultancies, famous startups, fortune 500s and governments.
              </span>
            </div>
          </b-col>

          <b-col class="text-right">
            <div class="footer_social_icons"></div>

            <div class="social_media_wrapper">
              <a target="_blank" href="https://twitter.com/doodleblue7">
                <span>
                  <i class="fab fa-twitter"></i>
                </span>
              </a>

              <a target="_blank" href="https://www.facebook.com/doodleblue.Innovations/">
                <span>
                  <i class="fab fa-facebook-f"></i>
                </span>
              </a>

              <a target="_blank" href="https://www.instagram.com/doodleblue/">
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
              </a>

              <!-- <a target="_blank" href="https://plus.google.com/+doodleblue">
                <span>
                  <i class="fab fa-google-plus-g"></i>
                </span>
              </a> -->

              <a target="_blank" href="https://www.linkedin.com/company/doodleblue/">
                <span>
                  <i class="fab fa-linkedin-in"></i>
                </span>
              </a>
            </div>

            <!-- <div class="footer_subscribe_wrapper">
              <div class="subscribe_content">
                Subscribe to Our Insights
              </div>
              <div class="subscribe_form">
                <b-form >
                  <label class="sr-only" for="inlineFormInputGroupUsername2">Email Address</label>
                  <b-input-group left="@" class="m-auto">
                    <b-input id="inlineFormInputGroupUsername2" class="rounded-0" placeholder="Enter your email address" />
                    <b-button variant="primary" class="rounded-0">Subscribe Now</b-button>
                  </b-input-group>
                </b-form>
              </div>
            </div>-->

            <div class="footer_tc_wrapper">
              <span
                class="copyrights"
              >&copy; 2020 doodleblue Innovations Pvt. Ltd. | All rights reserved</span>
              <!--<span class="links">
                Terms | Privacy
              </span>-->
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- Responsive footer -->
    <b-container class="responsive_page_footer_wrapper" fluid>
      <b-row>
        <b-col sm="12">
          <div class="quick_links_wrapper">
            <div class="quick_link_header" @click="toggleQuickLinks">
              Quick Links
              <span class="quick_link_arrow">
                <i class="fas fa-angle-down"></i>
              </span>
            </div>
            <div class="quick_link_content">
              <br>
              <nuxt-link class="link" :to="{ name: 'aboutus'}">
                <div>About Us</div>
              </nuxt-link>
              <nuxt-link class="link" :to="{ name: 'services'}">
                <div>Services</div>
              </nuxt-link>
              <nuxt-link class="link" :to="{ name: 'industries' }">
                <div>Industries</div>
              </nuxt-link>
              <nuxt-link class="link" :to="{ name:'careers'}">
                <div>Careers</div>
              </nuxt-link>
              <nuxt-link class="link" :to="{ name:'contactus'}">
                <div>Contact Us</div>
              </nuxt-link>
              <a class="link" href="http://community.doodleblue.com/">
                <div>Community</div>
              </a>
              <br>
            </div>
            <!-- <div class="quick_link_footer" @click="toggleQuickLinks">
              <span class="quick_link_arrow">
                <i class="fas fa-angle-down"></i>
              </span>
            </div>-->
          </div>
        </b-col>

        <b-col sm="12">
          <!-- <div class="subscription_wrapper">
            <div class="footer_subscribe_wrapper">
              <div class="subscribe_content">
                Subscribe to Our Insights
              </div>
              <div class="responsive_subscribe_form">
                <b-form >
                  <b-input class="rounded-0" placeholder="Enter your email address" />
                  <b-button variant="primary" class="rounded-0">Subscribe Now</b-button>
                </b-form>
              </div>
            </div>

          </div>-->
        </b-col>

        <b-col sm="12">
          <div class="footer_logo">
            <div class="footer_logo_wrapper">
              <img
                src="@/assets/images/doodleblue-footer-logo.svg"
                alt="doodleblue"
                style="width:200px"
              >
            </div>

            <div class="doodle_caption">
              <span>
                We are a digital strategy consulting boutique that leads digital transformations for global brands,
                leading consultancies, famous startups, fortune 500s and governments.
              </span>
            </div>
          </div>
        </b-col>

        <b-col sm="12">
          <div class="social_media_wrapper">
            <a target="_blank" href="https://twitter.com/doodleblue7">
              <span>
                <i class="fab fa-twitter"></i>
              </span>
            </a>

            <a target="_blank" href="https://www.facebook.com/doodleblue.Innovations/">
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
            </a>

            <a target="_blank" href="https://www.instagram.com/doodleblue/">
              <span>
                <i class="fab fa-instagram"></i>
              </span>
            </a>

            <!-- <a target="_blank" href="https://plus.google.com/+doodleblue">
              <span>
                <i class="fab fa-google-plus-g"></i>
              </span>
            </a> -->
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ['scrolled'],
  data() {
    return {
      quickLinksContent: false
    }
  },

  methods: {
    // toggle quick links
    toggleQuickLinks() {
      this.quickLinksContent = !this.quickLinksContent
      if (this.quickLinksContent == true) {
        $('.quick_link_content').slideDown()
        $('.quick_link_arrow').css('transform', 'rotate(180deg)')
      } else {
        $('.quick_link_content').slideUp()
        $('.quick_link_arrow').css('transform', 'rotate(0deg)')
      }
    }
  },

  mounted() {
    $(document).ready(function() {
      var $magic = $('.magic'),
        magicWHalf = $magic.width() / 2
      $(document).on('mousemove', function(e) {
        $magic.css({ left: e.pageX - magicWHalf, top: e.pageY - magicWHalf })
      })
    })
  }
}
</script>

<style scoped>
.page_footer_wrapper {
  padding: 80px 80px;
  padding-bottom: 30px;
  width: 100vw;
  /* height: calc(100vh - 80px); */
  position: fixed;
  bottom: 0;
  left: 0px;
  z-index: -1;
  background-color: #0a0a0a;
  color: #fff;

  /* padding: 100px; */
}
.scrolled{
  z-index:1 !important;
}
/*
.footer_column {
  padding-top: 50px;
} */

.footer_column_title {
  font-size: 20px;
  padding-bottom: 15px;
}

.footer_column_content ul {
  list-style-type: none;
  padding-left: 0px;
  color: #a5a5a5;
  font-size: 13px;
}

.footer_column_content ul li {
  padding: 3px 0px;
}

.footer_column_content ul li:hover {
  color: #fff;
}
.doodle_tag {
  font-size: 11px;
  text-transform: uppercase;
  padding: 10px 0;
}

.doodle_tag span {
  padding-right: 10px;
}

.doodle_caption {
  color: #a5a5a5;
  font-style: italic;
  padding: 5px 0;
  padding-right: 120px;
  font-size: 16px;
}

.footer_subscribe_wrapper {
  margin-bottom: 20px;
}

.subscribe_form {
  padding: 10px 0;
  padding-left: 150px;
}

.subscribe_form input {
  background-color: transparent;
  border: 0.5px solid;
  border-right: 0;
  font-size: 12px;
}

.subscribe_form button {
  text-transform: uppercase;
  font-size: 12px;
  padding-left: 20px;
  padding-right: 20px;
}

.subscribe_content {
  font-size: 22px;
  font-weight: 100;
  padding: 5px 0;
}

.footer_tc_wrapper {
  font-size: 0.8rem;
  font-weight: 100;
}

.footer_tc_wrapper .links {
  font-weight: 100;
  margin-left: 10px;
  color: #006ada;
}
/* Page Footer */

/* Responsive Page Footer */

.responsive_page_footer_wrapper {
  display: none;
  margin-top: -50px;
  background-color: #0a0a0a;
  color: #eee;
  padding: 30px 10px;
  text-align: center;
  position: fixed;
  bottom: 0px;
  z-index: -1;
}

.quick_link_arrow {
  display: inline-block;
}

.quick_link_content {
  display: none;
}

.quick_link_footer {
  padding-bottom: 5px;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
}

.subscription_wrapper {
  margin: 15px auto;
  margin-bottom: 30px;
}

.responsive_subscribe_form input {
  background-color: transparent;
  border: 0.5px solid;
  padding: 15px;
  text-align: center;
  width: 60%;
  margin: 10px auto;
}

.responsive_subscribe_form button {
  margin: 10px auto;
}

.social_media_wrapper {
  margin: 30px auto;
  margin-bottom: 10px;
}

.social_media_wrapper span {
  /* font-size: 20px;
  padding: 5px 10px; */
  font-size: 2rem;
  padding: 1rem;
}

.responsive_page_footer_wrapper .social_media_wrapper span {
  font-size: 1.5rem;
}

.quick_link_content a {
  padding: 2px 5px;
}

.footer_logo {
  margin-top: 5rem;
}

/* Responsive Page Footer */

.reachOut.container-fluid {
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  /* border-bottom: 2px solid rgba(0, 105, 218, 0.562); */
}

.reachOut.container-fluid:after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 98%;
  height: 2px;
  background-color: rgba(0, 105, 218, 0.562);
}

h5.point {
  position: relative;
  /* text-align: right; */
  float: right;
}

h5.point:after {
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translate(-170%, -30%);
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 105, 218, 1);
}

@media screen and (max-width: 560px) {
  .quick_link_header {
    margin: 30px 0 0 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #fff;
  }
  .quick_link_arrow {
    padding-left: 15px;
    padding-right: 15px;
    position: absolute;
  }
}
</style>
