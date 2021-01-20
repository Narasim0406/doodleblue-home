<template>
  <div  class="baseLayoutWrapper">
    <!-- Header Menu Starts -->
    <Header/>
    <!-- Header Menu Ends -->

    <!-- Page Route -->
    <div class="pageRouter" ref="pagerouter">
      <nuxt/>
      <!--<TransformBusiness v-if="showTransformBusiness"/>-->
    </div>
    <!-- Page Route -->

      <!--<FloatingContact v-if="showContact"/>-->
    
    <!-- Footer Starts -->
    <!--<PageFooter :scrolled="reachedBottom" ref="pageFooter"/>-->
    <!-- Footer Ends -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
// import PageFooter from '@/components/PageFooter.vue'
// import TransformBusiness from '@/components/TransformBusiness.vue'
// import FloatingContact from '@/components/FloatingContact.vue'


export default {
  components: {
    Header,
    // PageFooter,
    // TransformBusiness,
    // FloatingContact
  },
  data() {
    return {
      reachedBottom:false,
    }
  },

  computed: {
    showTransformBusiness() {
      let routeName = this.$route.name
      if (
        routeName == 'aboutus' ||
        routeName == 'careers' ||
        routeName == 'consult-us' ||
        routeName == 'careers-interns' ||
        routeName == 'careers-openings' ||
        routeName == 'careers-interns-apply' ||
        routeName == 'careers-openings-apply' ||
        routeName == 'careers-openings-position' ||
        routeName == 'careers-openings-interns' ||
        routeName == 'blogs' ||
        routeName == 'blogs-details' ||
        routeName == 'university'
      ) {
        return false
      } else {
        return true
      }
    },
    showContact(){
      let routeName = this.$route.name
      if(routeName === 'contactus'){
        return false
      }
      return true
    },
   
  },
  methods:{
     onScroll(e) {
      var body = document.body;
      var html = document.documentElement; 
      var bodyH = Math.max(body.scrollHeight, body.offsetHeight, body.getBoundingClientRect().height, html.clientHeight, html.scrollHeight, html.offsetHeight);
      if(window.screen.width>1270){
        if(window.scrollY>=bodyH-820||window.scrollY==bodyH-820){
          this.reachedBottom=true;
          }
          else{
            this.reachedBottom=false;
          }
      }
      if(window.screen.width>1020&&window.screen.width<1260){
        if(window.scrollY>bodyH-820||window.scrollY==bodyH-820){
          this.reachedBottom=true;
          }
          else{
            this.reachedBottom=false;
          }
      }
      if(window.screen.width>760&&window.screen.width<1020){
       if(window.scrollY>bodyH-820||window.scrollY==bodyH-820){
          this.reachedBottom=true;
          }
          else{
            this.reachedBottom=false;
          }
      }
     },
  },
  
  // created () {
  //   var that=this
  //   window.addEventListener('scroll', that.showContact);

  // },
  // destroyed () {
  //   var that=this
  //   window.removeEventListener('scroll', that.showContact);
  // },
  mounted() {
    // Footer compatability check
    this.checkFooterCompatability()
    window.addEventListener("scroll", this.onScroll)

  }
}
</script>

<style>
.supportFooter {
  position: absolute;
  top: 4700px;
  left: 0;
  width: 100%;
  height: 100px;
  background: red;
}
</style>
