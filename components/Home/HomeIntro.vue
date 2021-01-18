<template>
  <section class="homeIntroWrapper">
    <b-container>
      <h2 class="wow fade-in-bottom">
        We’ve worked with the top companies to
        transform and create a digital future
      </h2>

      <div
        data-relative-input="true"
        id="titleScene4"
        class="sectionFadedTitle wow fade-in-bottom"
        data-wow-delay="0.5s"
        data-wow-offset="250"
      >
        <h3 class="h1" data-depth="-0.1">About</h3>
      </div>

      <b-row align-v="center">
        <b-col md="6">
          <!-- <ClientsSwiper/>-->
        </b-col>
        <b-col md="6">
          <p
            class="wow fade-in-bottom"
            data-wow-delay="0.2s"
          >We are a digital strategy consulting boutique that loves to learn, collaborate and create all things digital. We are equipped to cater to a mix of global brands, leading consultancies, famous startups, fortune 500s and governments. With digital transformation being the need of the hour, we help clients make significant and lasting improvements in the digital space.</p>

          <!-- <nuxt-link class="link" to="/about-us"> -->
          <nuxt-link class="link" :to="{name:'aboutus'}">
            <!--<Button
              class="wow fade-in-bottom"
              data-wow-delay="0.1s"
              buttonText="About Us"
              color="#006ada"
            />-->
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
// import Button from '../components/Button.vue'
// import ClientsSwiper from '../components/ClientsSwiper.vue'

export default {
    jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Corporation',
      name: 'doodleblue Innovations Private Limited',
      alternateName: 'doodleblue Innovations',
      url: 'https://www.doodleblue.com',
      logo: `${require('../../assets/images/socialsharing/logo/logo.png')}`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+919551943000',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: 'en'
      },
      sameAs: [
        'https://www.facebook.com/doodleblue.Innovations/',
        'https://www.instagram.com/doodleblue/',
        'https://twitter.com/doodleblue7',
        'https://www.linkedin.com/company/doodleblue/',
        'https://www.youtube.com/user/doodleblue7',
        'https://www.doodleblue.com/'
      ]
    }
  },
  components: {
    // Button,
    // ClientsSwiper
  },

  mounted() {
    // if (process.client) {
    //   setTimeout(() => {
    //     var titleScene4 = document.getElementById('titleScene4')
    //     var parallaxInstanceTitle = new Parallax(titleScene4)
    //   }, 100)
    // }
  }
}
</script>
