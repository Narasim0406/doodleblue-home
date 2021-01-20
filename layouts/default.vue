<template>
  <div class="baseLayoutWrapper">
    <!-- SecondaryHeader Menu Starts -->
    <SecondaryHeader/>
    <!-- SecondaryHeader Menu Ends -->

    <!-- Page Route -->
    <div class="pageRouter" ref="pagerouter">
      <nuxt/>
      <!--<TransformBusiness/>-->
    </div>
    <!-- Page Route -->

    <!--<FloatingContact/>-->

    <!-- Footer Starts -->
    <!--<PageFooter :scrolled="reachedBottom" ref="pageFooter"/>-->
    <!-- Footer Ends -->
  </div>
</template>

<script>
import SecondaryHeader from '@/components/SecondaryHeader.vue'
// import PageFooter from '@/components/PageFooter.vue'
// import TransformBusiness from '@/components/TransformBusiness.vue'
// import FloatingContact from '@/components/FloatingContact.vue'

// import CaseStudyPage from '@/views/CaseStudyPage.vue'

export default {
  components: {
    SecondaryHeader,
    // PageFooter,
    // TransformBusiness,
    // FloatingContact,
    // CaseStudyPage,
  },

  data() {
    return {
      reachedBottom:false,
    }
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
  mounted() {
    // Footer compatability check
    this.checkFooterCompatability();
    window.addEventListener("scroll", this.onScroll)

  }
}
</script>

<style>
</style>
