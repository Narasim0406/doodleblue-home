<template>
  <div>
    <div class="w-100 menu menuItemsWrapper text-left">
      <b-container fluid style="position: relative">
        <b-row no-gutters style="position: fixed; top: 0px;">
          <b-col md="3">
            <div class="logo_wrapper animated animated-fast fadeInLeft">
              <img src="@/assets/images/logo-dark.svg" alt="logo">
            </div>
          </b-col>
        </b-row>

        <b-row class="woww fadeIn" data-wow-duration="0.3s" data-wow-delay="0.4s">
          <b-col style="margin: 20vh auto !important; background: #fff;">
            <b-card no-body class="mb-1" v-for="(item, index) in menus" :key="index">
              <b-card-header
                header-tag="header"
                class="p-1"
                role="tab"
                @click.stop="item.expanded = !item.expanded"
              >
                <b-btn
                  block
                  href="#"
                  v-b-toggle="'accordion'+(index+1)"
                  variant="link"
                  class="text-left menuTitle"
                >
                  <nuxt-link class="myLink" :to="{ name: item.route }">{{ item.title }}</nuxt-link>
                  <span
                    class="menuItemExpandable animated animated-fast fadeInRight"
                    v-if="item.children.length"
                  >
                    <!-- {{ item.expanded ? '-' : '+' }} -->
                    +
                  </span>
                  <span
                    class="menuItemShrinkable animated animated-fast fadeInRight"
                    v-if="item.children.length"
                  >-</span>
                  
                </b-btn>
              </b-card-header>
              <b-collapse
                :id="'accordion'+(index+1)"
                accordion="my-accordion"
                role="tabpanel"
                v-if="item.children.length"
                class="animated animated-fast fadeInUp"
              >
                <b-card-body>
                  <p class="card-text menuSubItem" v-for="(subItem, i) in item.children" :key="i">
                    <nuxt-link
                      class="myLink"
                      :to="{ name: item.url, params: subItem.params}"
                    >{{ subItem.title }}</nuxt-link>
                  </p>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-btn
                  block
                  href="http://community.doodleblue.com/" variant="link"
                  class="text-left menuTitle">
              <a class="myLink" href="http://community.doodleblue.com/">Community</a>
            </b-btn>
          </b-col>
        </b-row>
        <!-- </b-container>

        <b-container fluid>-->
        <div class="mobilMenuFooter">
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

            <a target="_blank" href="https://plus.google.com/+doodleblue">
              <span>
                <i class="fab fa-google-plus-g"></i>
              </span>
            </a>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          title: 'Services',
          route: 'services',
          children: [
            {
              title: 'Digital Transformation',
              url: 'digitaltransformation',
              params: { service: 'digitaltransformation' }
            },
            {
              title: 'UI/UX & Design Thinking',
              url: 'uiuxDesign',
              params: { service: 'uiuxdesign' }
            },
            {
              title: 'Mobile Engineering',
              url: 'mobileEngineering',
              params: { service: 'mobileengineering' }
            },
            {
              title: 'Web Technology Development',
              url: 'webTechnology',
              params: { service: 'webtechnology' }
            },
            {
              title: 'Innovation',
              url: 'innovation',
              params: { service: 'innovation' }
            },
            {
              title: 'Enterprise Application Development',
              url: 'enterpriseApplications',
              params: { service: 'enterpriseapplications' }
            }
          ],
          expanded: false,
          url: 'services-service'
        },
        {
          title: 'Industries',
          route: 'industries',
          children: [
            {
              title: 'Education',
              url: 'education',
              params: {
                industry: 'education'
              }
            },
            {
              title: 'Fashion',
              url: 'fashion',
              params: {
                industry: 'fashion'
              }
            },
            {
              title: 'Finance',
              url: 'finance',
              params: {
                industry: 'finance'
              }
            },
            {
              title: 'Hospitality & Leisure',
              url: 'hospitality',
              params: {
                industry: 'hospitality'
              }
            },
            {
              title: 'Healthcare',
              url: 'healthcare',
              params: {
                industry: 'healthcare'
              }
            },
            {
              title: 'Retail',
              url: 'retail',
              params: {
                industry: 'retail'
              }
            },
            {
              title: 'Telecommunication',
              url: 'telecom',
              params: {
                industry: 'telecom'
              }
            },
            {
              title: 'Transport & Logistics',
              url: 'transport',
              params: {
                industry: 'transport'
              }
            }
          ],
          expanded: false,
          url: 'industries-industry'
        },
        {
          title: 'About Us',
          route: 'aboutus',
          children: [
            {
              title: 'Leadership',
              url: 'aboutus',
              params: {}
            },
            {
              title: 'Press',
              url: 'aboutus',
              params: {}
            }
          ],
          expanded: false,
          url: 'aboutus'
        },
        {
          title: 'Success Stories',
          route: 'success-stories',

          children: [],
          expanded: false,
          url: 'success-stories'
        },
        {
          title: 'Careers',
          route: 'careers',

          children: [],
          expanded: false,
          url: 'careers'
        },
        // {
        //   title: 'Contact us',
        //   route: 'contactus',

        //   children: [],
        //   expanded: false,
        //   url: 'contactus'
        // },
        {
          title: 'Blogs',
          route: 'blogs',

          children: [],
          expanded: false,
          url: 'blogs'
        }
      ]
    }
  },

  mounted() {
    // $('body').animate({
    //   scrollTop: 0
    // }, 200);
  }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Open+Sans:800'); */

body {
  background-color: #3c3c3c;
  padding: 50px 0;
  font-family: 'Noto Sans', sans-serif;
  text-align: center;
}

.container {
  /* background-color: #222222; */
  /* background-color: #006ada; */
  background-color: transparent;
  margin: 0 auto;
  width: 100%;
  /* max-width: 320px; */
  min-height: 568px;
  margin: 0 auto;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  -webkit-box-shadow: 0px 9px 13px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 9px 13px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 9px 13px 0px rgba(0, 0, 0, 0.3);
  -webkit-transform: scale(1);
  transform: scale(1);
  height: 100vh;
  border-radius: 0px;
}

.menu-trigger,
.close-trigger {
  position: absolute;
  top: 32px;
  right: 20px;
  display: block;
  width: 42px;
  height: 42px;
  cursor: pointer;
  z-index: 333;
}
.menu-trigger:hover .menu-trigger-bar:before,
.close-trigger:hover .menu-trigger-bar:before {
  width: 100%;
}
.menu-trigger:hover .close-trigger-bar:before,
.close-trigger:hover .close-trigger-bar:before {
  width: 100%;
}

.close-trigger {
  position: absolute;
  /* top: 35px !important; */
  top: 23px !important;
  right: 20px !important;
  z-index: 5;
  /* top: 42px; */
  width: 50px;
  height: 50px;
  transform: scale(0.5);
  /* background: rgba(0, 0, 0, 0.3); */
}

.menu-trigger-bar {
  display: block;
  width: 100%;
  height: 4px;
  background-color: white;
  margin-bottom: 6px;
  transform: rotate(-45deg);
  position: relative;
}
.menu-trigger-bar:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 0%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.menu-trigger-bar.top {
  width: 50%;
}
.menu-trigger-bar.middle:before {
  left: auto;
  right: 0;
}
.menu-trigger-bar.bottom {
  width: 50%;
  margin-left: 50%;
}

.close-trigger-bar {
  display: block;
  width: 100%;
  height: 4px;
  background-color: #222222;
  position: relative;
}
.close-trigger-bar:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 0%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.close-trigger-bar.left {
  transform: translateX(100px) translateY(-100px) rotate(-45deg);
}
.close-trigger-bar.right {
  transform: translateX(-100px) translateY(-100px) rotate(45deg);
  top: -3px;
}

.logo {
  display: block;
  width: 64px;
  height: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -52px;
  margin-left: -32px;
  text-align: center;
  z-index: 10;
}
.logo span {
  display: block;
  text-align: center;
  line-height: 62px;
  font-size: 72px;
  color: white;
}

.logo-title {
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  color: #222222;
  font-size: 32px;
  line-height: 82x;
}

.logo-badge {
  position: absolute;
  display: block;
  width: 24px;
  height: 24px;
  top: 6px;
  right: -6px;
  border-radius: 100%;
  /* background-color: #6295ca; */
  background-color: #fff;
  font-size: 12px;
  line-height: 2;
  text-align: center;
}

.inner-container,
.menu-container {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.inner-container {
  z-index: 20;
}

.menu-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* padding-top: 80px; */
}

.menu {
  /* display: block; */
  display: flex;
  /* align-items: flex-start; */
  width: 100%;
  /* padding: 20%; */
}
.menu li {
  text-align: left;
  display: block;
  padding: 15px 0;
}
.menu a {
  text-decoration: none;
  color: #222222;
  display: inline-block;
  padding: 10px 0;
  padding: 0px;
  position: relative;
}
.menu a:hover:before {
  opacity: 1;
  transform: translateX(0px);
}
.menu a:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 18px;
  height: 4px;
  opacity: 0;
  background-color: #222222;
  transform: translateX(100px);
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.menu-bg {
  position: absolute;
  display: block;
  width: 260%;
  left: -53%;
  top: -25%;
  height: 51%;
  background-color: white;
}
.menu-bg.middle {
  top: 29%;
  left: -53%;
  transform: rotate(-45deg) scaleY(0);
}
.menu-bg.top {
  left: -34%;
  top: 0;
  transform: rotate(-45deg) translateY(-152%);
}
.menu-bg.bottom {
  top: 105%;
  transform: rotate(-45deg) translateY(25%);
  left: -20%;
}

#links {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  /* height: 50px; */
  font-size: 13px;
  font-family: tahoma;
  color: #fff;
}

#links a {
  text-decoration: none;
  font-size: 2.3em;
  color: #fff;
}

#twitter {
  position: absolute;
  bottom: 15px;
  right: 20px;
}

#pens {
  position: absolute;
  bottom: 15px;
  left: 20px;
}

.menuItemsWrapper {
  padding: 15px;
  padding-top: 0;
  position: absolute;
  top: 0;
  height: 100vh;
  overflow: auto;
}

.card {
  box-shadow: none;
  border: 0;
  margin: 0 !important;
}

.card-header {
  border: 0;
  background: transparent;
  padding: 0 !important;
}

.menuTitle {
  font-size: 2.2rem;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
}

.menuItemExpandable,
.menuItemShrinkable {
  position: relative;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  padding: 0 20px;
  padding: 0;
  vertical-align: text-top;
}

.menuItemExpandable,
.menuItemShrinkable {
  color: #000;
  position: relative;
  display: inline-block;
  font-size: 2rem;
  font-weight: 600;
  padding: 0 20px;
  border: 3px solid black;
  padding: 0;
  width: 30px;
  text-align: center;
  line-height: 22px;
  height: 30px;
  /* vertical-align: text-top; */
  margin-top: 13px;
  /* display: none !important; */
}

.menuItemShrinkable {
  line-height: 18px;
}

.menuItemExpandable:after,
.menuItemShrinkable:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 0px;
  height: 1px;
  background: #000;
  transition: all 0.3s;
  display: none;
}

.menuItemShrinkable:after {
  margin-top: -10px;
}

.collapsed > .menuItemShrinkable,
:not(.collapsed) > .menuItemExpandable {
  display: none;
}

.collapsed > .menuItemExpandable:after {
  width: 0%;
}

:not(.collapsed) .menuItemShrinkable:after {
  width: 100px;
  transform: translateX(100%);
}

.menuSubItem {
  font-size: 1.2rem;
}

.menu a[aria-expanded='true'] a {
  color: #006ada !important;
}

.logo_wrapper {
  width: 170px;
  padding: 2rem 0;
}

.logo_wrapper img {
  width: 100%;
  height: auto;
}

.social_media_wrapper {
  margin: 30px auto;
  margin-bottom: 10px;
}

.social_media_wrapper span {
  font-size: 20px;
  padding: 5px 10px;
}

.menuFadedText {
  display: none;
  position: absolute;
  /* top: 0; */
  right: 30px;
  bottom: 0rem;
  font-size: 8rem;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 6rem;
  text-align: right;
  /* width: 100%; */
  /* height: 100%; */
  color: #eee;
  /* text-shadow: 0px 0px 1px gray; */
  /* filter: blur(3px); */
  z-index: 1;
}
</style>
