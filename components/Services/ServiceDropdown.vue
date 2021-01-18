<template>
  <div>
    <select name id @change="serviceChange">
      <option
        value="digitaltransformation"
        :selected="computeSelected('digitaltransformation')"
        :disabled="computeSelected('digitaltransformation')"
      >Digital Transformation</option>
      <option
        value="uiuxdesign"
        :selected="computeSelected('uiuxdesign')"
        :disabled="computeSelected('uiuxdesign')"
      >UI UX & Design Thinking</option>
      <option
        value="mobileengineering"
        :selected="computeSelected('mobileengineering')"
        :disabled="computeSelected('mobileengineering')"
      >Mobile Engineering</option>
      <option
        value="webtechnology"
        :selected="computeSelected('webtechnology')"
        :disabled="computeSelected('webtechnology')"
      >Web Technology</option>
      <option
        value="innovation"
        :selected="computeSelected('innovation')"
        :disabled="computeSelected('innovation')"
      >Innovation</option>
      <option
        value="enterpriseapplications"
        :selected="computeSelected('enterpriseapplications')"
        :disabled="computeSelected('enterpriseapplications')"
      >ENTERPRISE APPLICATION DEVELOPMENT</option>
    </select>


    <div class="dropDownWrapper" v-if="show" @click="emitCloseDropdown">
      <div class="dropDownOverlay"></div>
      <div class="sectionFadedLogo">
        <div data-relative-input="true" id="titleScene">
          <img data-depth="-0.1" src="@/assets/images/logo-opacity.svg" alt="doodlebluelogo" />
        </div>
      </div>
      <div class="serviceText animated fadeInRight">Services</div>
      <div>
        <h3
          class="animated fade-in-bottom"
          v-for="(item, i) in services"
          :key="i"
          :data-wow-delay="`${i*0.02}s`"
        >
          <nuxt-link
            class="link"
            :to="{name: 'services-service', params:{service:item.route}}"
          >{{ item.name }}</nuxt-link>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],

  data() {
    return {
      services: [
        {
          name: 'Digital Transformation',
          route: 'digitaltransformation',
          active: ''
        },
        {
          name: 'UI/UX & Design Thinking',
          route: 'uiuxdesign',
          active: ''
        },
        {
          name: 'Mobile Engineering',
          route: 'mobileengineering',
          active: ''
        },
        {
          name: 'Web Technology',
          route: 'webtechnology',
          active: ''
        },
        {
          name: 'Innovation',
          route: 'innovation',
          active: ''
        },
        {
          name: 'Enterprise Application Development',
          route: 'enterpriseapplications',
          active: ''
        }
      ]
    }
  },

  methods: {
    serviceChange(event) {
      this.$router.push({
        name: `services-service`,
        params: { service: event.target.value }
      })
    },
    computeSelected(service) {
      if (this.$route.params.service == service) {
        return true
      } else {
        return false
      }
    },

    emitCloseDropdown() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
select {
  border: 0;
  background: transparent;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  display: none;
}

.dropDownWrapper {
  /* padding-top: 100px; */
  padding-top: 0;
  padding-left: 110px;
  cursor: zoom-out;
}

.dropDownWrapper,
.dropDownOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 10;
  /* text-align: center; */
}

.dropDownWrapper {
  display: flex;
  align-items: center;
}

.dropDownOverlay {
  z-index: -1;
  background: rgba(255, 255, 255, 0.999);
}

.dropDownWrapper h3 {
  padding: 1rem;
  padding-left: 2.5rem;
  transition: all 0.5s;
}

h3 a:hover {
  color: #006ada !important;
}

.dropDownWrapper h3:hover:after {
  width: 50px;
  padding-left: 3.5rem;
}

.dropDownWrapper h3:hover {
  padding-left: 4rem;
}

.dropDownWrapper h3:before {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  background: #000;
  left: -15px;
  top: 28px;
  transform: rotate(45deg);
  /* transform: translateY(-50%); */
}

.sectionFadedLogo {
  position: absolute;
  width: 50%;
  right: 0;
  text-align: right;
  height: auto;
  transform: translateX(0%) translateY(-15%);
  opacity: 0.1 !important;
}

.serviceText {
  position: absolute;
  right: 0;
  top: 35%;
  transform: translateY(-50%) !important;
  letter-spacing: -15px;
  font-size: 12rem;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  width: 90%;
  word-break: break-all;
  word-wrap: break-word;
  line-height: 9rem;
  text-align: right;
  color: rgba(0, 106, 218, 0.1);
  color: rgba(238, 238, 238, 0.638);
  text-shadow: 0px 0px 50px #fff;
  opacity: 0.2;
}

.dropDownWrapper h3:after {
  position: absolute;
  left: -3px;
  content: '';
  width: 30px;
  height: 1px;
  background: #000;
  top: 33px;
  transition: all 0.5s;
}

@media (max-width: 560px) {
  .dropDownWrapper h3:after {
    position: absolute;
    top: 26px;
    left: -5px;
  }

  .dropDownWrapper {
    padding-left: 50px;
    padding-top: 0 !important;
  }

  .dropDownWrapper h3:before {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    background: black;
    left: -15px;
    top: 22px;
    transform: rotate(45deg);
    /* transform: translateY(-50%); */
  }

  .dropDownWrapper h3 {
    font-weight: 600 !important;
  }

  .serviceText {
    font-size: 7rem;
    width: 10rem;
    line-height: 5rem;
    letter-spacing: -10px;
    top: 100px;
    color: rgba(0, 106, 218, 0.1);
    color: #eee;
  }
}

@media (min-width: 1920px) {
  .dropDownWrapper {
    padding: 8rem;
  }
}
</style>
