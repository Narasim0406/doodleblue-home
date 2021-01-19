<template>
  <div>
    <div class="sliderArrowWrapper">
      <div class="customArrowLeft" :id="`${navigateID}Left`" style="margin-right: 10px">
        <span class="arrowText">Prev</span>
        <svg
          class="left"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="51.056px"
          height="32.495px"
          viewBox="0 -23 132.056 93.495"
          style="enable-background:new 0 -23 132.056 93.495;    vertical-align: baseline;"
          xml:space="preserve"
        >
          <line class="st1 one" x1="5.775" y1="35.392" x2="129.923" y2="35.392"></line>
          <polyline
            class="st1 two"
            points="130.695,35.748 129.923,34.942 97.085,0.711 97.447,0.358 85.099,12.462 61.345,35.748 "
          ></polyline>
          <polyline
            class="st1 three"
            points="130.695,35.202 129.923,36.019 97.085,70.778 97.447,71.137 85.099,58.846 61.345,35.202 "
          ></polyline>
        </svg>
      </div>

      <div class="customArrow" :id="`${navigateID}Right`" style="margin-left: 10px">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="51.056px"
          height="32.495px"
          viewBox="0 -23 132.056 93.495"
          style="enable-background:new 0 -23 132.056 93.495;    vertical-align: baseline;"
          xml:space="preserve"
        >
          <line class="st1 one" x1="5.775" y1="35.392" x2="129.923" y2="35.392"></line>
          <polyline
            class="st1 two"
            points="130.695,35.748 129.923,34.942 97.085,0.711 97.447,0.358 85.099,12.462 61.345,35.748 "
          ></polyline>
          <polyline
            class="st1 three"
            points="130.695,35.202 129.923,36.019 97.085,70.778 97.447,71.137 85.099,58.846 61.345,35.202 "
          ></polyline>
        </svg>
        <span class="arrowText">Next</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['navigateID']
}
</script>

<style scoped>
</style>
