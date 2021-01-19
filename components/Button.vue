<template>
  <div class="customArrow">
    <b-button class="position-relative button-link buttonLink">
      <div class="custom_btn_front" :class="{'small': small, 'center': center}">
        <b-row align-v="center" align-h="center">
          <b-col>
            <div class="d-inline-block" :style="{'color': color}">{{ buttonText }}</div>
          </b-col>
          <b-col cols="auto" class="pl-0">
            <div class="d-inline-block" style="width: 100px; padding-top: 5px;">
              <div class="btn_arrow_wrapper">
                <div class="customArrow">
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
                    style="enable-background:new 0 -23 132.056 93.495;"
                    xml:space="preserve"
                  >
                    <line
                      class="st1 one"
                      x1="5.775"
                      y1="35.392"
                      x2="129.923"
                      y2="35.392"
                      :style="{'stroke': color}"
                    ></line>
                    <polyline
                      class="st1 two"
                      :style="{'stroke': color}"
                      points="130.695,35.748 129.923,34.942 97.085,0.711 97.447,0.358 85.099,12.462 61.345,35.748 "
                    ></polyline>
                    <polyline
                      class="st1 three"
                      :style="{'stroke': color}"
                      points="130.695,35.202 129.923,36.019 97.085,70.778 97.447,71.137 85.099,58.846 61.345,35.202 "
                    ></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <p v-if="subText" class="button-link-text">{{ subText }}</p>
    </b-button>
  </div>
</template>

<script>
export default {
  props: ['buttonText', 'subText', 'color', 'small', 'center']
}
</script>

<style scoped>
.customArrow,
.customArrowLeft {
  display: inline-block;
  cursor: pointer;
}

.customArrow:focus,
.customArrowLeft:focus {
  outline: 0;
}

.customArrow .st0 {
  display: none;
  fill: none;
  stroke: #000000;
  stroke-miterlimit: 12;
  transition: 0.3s stroke-dashoffset;
}
.customArrow .st1 {
  fill: none;
  stroke: #000000;
  stroke-miterlimit: 10;
  stroke-width: 3px;
  transition: 0.3s stroke-dashoffset;
}

.customArrow line.st1 {
  stroke-dashoffset: 0;
  stroke-dasharray: 95;
}
.customArrow .st1.three,
.customArrow .st1.two {
  stroke-dasharray: 125;
}

div.customArrow:hover line.st1.one {
  stroke-dasharray: 95;
  animation: dash 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  stroke-dashoffset: -45;
}

div.customArrow:hover .st1.three,
div.customArrow:hover .st1.two {
  stroke-dasharray: 125;
  animation: dash 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  stroke-dashoffset: 95;
}

@keyframes dash {
  from {
    stroke-dashoffset: 0;
  }
}

.customArrowLeft .st0 {
  display: none;
  fill: none;
  stroke: #000000;
  stroke-miterlimit: 12;
}
.customArrowLeft .st1 {
  fill: none;
  stroke: #000000;
  stroke-miterlimit: 10;
  stroke-width: 3px;
  transition: 0.3s stroke-dashoffset linear;
}

svg.left {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: 'FlipH';
}
.customArrowLeft line.st1 {
  stroke-dashoffset: 0;
  stroke-dasharray: 95;
}
.customArrowLeft .st1.three,
.customArrow .st1.two {
  stroke-dasharray: 125;
}

div.customArrowLeft:hover line.st1.one {
  stroke-dasharray: 95;
  animation: dash 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  stroke-dashoffset: -45;
}

div.customArrowLeft:hover .st1.three,
div.customArrowLeft:hover .st1.two {
  stroke-dasharray: 125;
  animation: dash 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  stroke-dashoffset: 95;
}

div.customArrowLeft:hover .st1.three,
div.customArrowLeft:hover .st1.two {
  stroke-dasharray: 125;
  animation: dash 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  stroke-dashoffset: 95;
}

/* arrow animation for custom button with blue color background */
.custom-button-white-arrow .customArrow .st1 {
  stroke: #fff;
}
.custom-button-blue-arrow .customArrow .st1 {
  stroke: #0068dc;
}
.customArrow {
  transform: translateY(-2px);
}
.address-details .customArrow svg {
  width: 30px;
}

/* Slider Arrow left and Right */

.btn-outline-warning {
  border-color: #fff;
}
.btn-outline-warning:hover {
  background-color: transparent !important;
  /* border-color: transparent !important; */
}
.button-link.btn {
  border: 0;
}
.button-link.btn-secondary:not(:disabled):not(.disabled):active:focus,
.button-link.btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: none;
}
.position-relative.button-link {
  background-color: #fff;
}
.position-relative.button-link .d-inline-block {
  color: #006ada;
}
.button-link.btn-secondary {
  border-color: transparent !important;
  background-color: transparent !important;
}
.button-link.btn-secondary:hover {
  border-color: #fff;
  background-color: #fff;
}
.button-link.btn-secondary:active {
  border-color: #fff;
  background-color: #fff;
}
.button-link.btn-secondary:not(:disabled):not(.disabled):active {
  border-color: #fff;
  background-color: #fff;
}
.button-link.btn-secondary .custom_btn_front {
  background: transparent;
  /* font-size: 20px; */
  font-size: 1.3rem;
  font-weight: 600;
}
.button-link .bg-blue {
  background: #006ada;
}
.button-link .border-blue {
  border-color: #006ada;
}
.button-link .btn_arrow_wrapper {
  left: -25px;
  text-align: left;
}
.button-link .button-link-text {
  color: #969292d9;
  color: #737373;
  font-size: 0.8rem;
  position: absolute;
  left: 0;
  margin-bottom: 0;
}
.button-link:focus {
  box-shadow: none;
}

.buttonLink {
  padding-left: 0;
}

.custom_btn_front.small {
  font-size: 1rem !important;
}
.custom_btn_front.center {
  transform: translateX(1.35rem);
}

svg {
  vertical-align: baseline !important;
}
</style>
