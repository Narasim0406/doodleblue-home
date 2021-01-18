<template>
  <div class="customArrow">
    <b-button  class="position-relative button-link" style="font-size: 18px;">
      <b-container class="custom_btn_front">
        <b-row align-v="center">
          <b-col>
            <div class="d-inline-block" :style="{'color': color}">
              {{ buttonText }}
            </div>
          </b-col>

          <b-col class="pl-0">
            <div class="d-inline-block" style="width: 100px; padding-top: 5px;">
              <div class="btn_arrow_wrapper animated animated-fast fadeInDown">
                 <div class="customArrow">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="51.056px" height="32.495px" viewBox="0 -23 132.056 93.495" style="enable-background:new 0 -23 132.056 93.495;" xml:space="preserve">
                      <line class="st1 one" x1="5.775" y1="35.392" x2="129.923" y2="35.392"
                        :style="{'stroke': color}"></line>
                      <polyline class="st1 two" :style="{'stroke': color}" points="130.695,35.748 129.923,34.942 97.085,0.711 97.447,0.358 85.099,12.462 61.345,35.748 "></polyline>
                      <polyline class="st1 three" :style="{'stroke': color}" points="130.695,35.202 129.923,36.019 97.085,70.778 97.447,71.137 85.099,58.846 61.345,35.202 "></polyline>
                    </svg>
                  </div>
                <!-- <div class="btn_arrow_line bg-blue"></div>
                <div class="btn_arrow  border-blue"></div> -->
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <p class="button-link-text">{{ subText }}</p>
    </b-button>

      <!-- <b-container class="custom_btn_back">
        a
      </b-container> -->


  </div>
</template>

<script>
  export default {
    props: ['buttonText','subText', 'color'],
    name:'myCutomButtonLink',
    data () {
      return {

      }
    },

    methods: {

    },

    created () {

    },

    mounted () {

    },
  }
</script>

<style scoped>
.btn-outline-warning{
  border-color:#fff;
}
  .btn-outline-warning:hover {
    background-color: transparent !important;
    /* border-color: transparent !important; */
  }
.button-link.btn{
    border:0
}
.button-link.btn-secondary:not(:disabled):not(.disabled):active:focus, .button-link.btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus{
    box-shadow: none;
}
.position-relative.button-link{
    background-color: #fff;
}
.position-relative.button-link .d-inline-block{
    color:#006ada
}
.button-link.btn-secondary{
    border-color:transparent !important;
    background-color: transparent !important;
}
.button-link.btn-secondary:hover{
    border-color:#fff;
    background-color: #fff;
}
.button-link.btn-secondary:active{
    border-color:#fff;
    background-color: #fff;
}
.button-link.btn-secondary:not(:disabled):not(.disabled):active{
    border-color:#fff;
    background-color: #fff;
}
.button-link.btn-secondary .custom_btn_front{
    background: transparent;
    font-size: 20px;
}
.button-link .bg-blue{
    background: #006ada
}
.button-link .border-blue{
    border-color:#006ada
}
.button-link  .btn_arrow_wrapper{
    left: -25px;
}
.button-link .button-link-text{
    color: #969292d9;
    font-size: 12px;
    position: relative;
    left: -59px;
    margin-bottom: 0;
}
.button-link:focus{
    box-shadow: none;
}
</style>
