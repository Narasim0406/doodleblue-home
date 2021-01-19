<template>
  <!-- :style="{'background-image': 'url('+$getImgUrl('industry-bg.png')+')'}" -->
  <div class="industryListWrapper">
    <!-- Banner -->
    <IndustryListBanner/>
    <!-- Banner -->

    <main>
      <div class="content content--grid">
        <div
          class="item item--style-1"
          data-animation-path-duration="800"
          data-animation-path-easing="easeInOutCubic"
          data-path-elasticity="300"
          data-morph-path="M 189,80.37 C 232.6,46.67 352.5,67.06 350.9,124.1 349.5,173.4 311.7,168 312.4,248.1 312.9,301.1 382.5,319.2 368.5,379.1 349.4,460.6 137.7,467.5 117.6,386.3 98.68,309.7 171.5,292.2 183.6,240.1 195.7,188.2 123.8,130.7 189,80.37 Z"
          data-path-scale-x="0.8"
          data-path-scale-y="1.1"
          data-path-translate-x="0"
          data-path-translate-y="30"
          data-path-rotate="5"
          data-animation-image-duration="800"
          data-animation-image-easing="easeInOutQuart"
          data-image-elasticity="300"
          data-image-scale-x="1.2"
          data-image-scale-y="1.2"
          data-image-translate-x="-20"
          data-image-translate-y="-45"
          data-image-rotate="-5"
          data-animation-deco-duration="1300"
          data-animation-deco-easing="easeOutQuad"
          data-deco-elasticity="300"
          data-deco-scale-x="0.8"
          data-deco-scale-y="0.9"
          data-deco-translate-x="-5"
          data-deco-translate-y="-5"
          data-deco-rotate="2"
        >
          <nuxt-link :to="{name: 'industries-industry', params:{industry: 'fashion' }}">
            <svg class="item__svg" width="500px" height="500px" viewBox="0 0 500 500">
              <clipPath id="clipShape1">
                <path
                  class="item__clippath"
                  d="M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z"
                ></path>
              </clipPath>
              <g class="item__deco">
                <use xlink:href="#deco1"></use>
              </g>
              <g clip-path="url(#clipShape1)">
                <image
                  class="item__img"
                  :xlink:href="$getImgUrl('fash.jpg')"
                  x="0"
                  y="0"
                  height="500px"
                  width="500px"
                ></image>
              </g>
            </svg>
            <div class="item__meta">
              <div class="item__number">
                <span class="item__specimen">01</span>
                <span class="item__reference">FAS</span>
              </div>
              <h2 class="item__title">Fashion</h2>
              <h3 class="item__subtitle">Learn More</h3>
            </div>
            <h3 class="h1 fadedTitle left">Transmogrify fashion with great product experiences</h3>
          </nuxt-link>
        </div>

        <div
          class="item item--style-2"
          data-animation-path-duration="1500"
          data-animation-path-easing="easeOutElastic"
          data-morph-path="M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z"
          data-path-scale-y="1.1"
          data-image-scale-x="1.3"
          data-image-scale-y="1.3"
          data-animation-deco-duration="2000"
          data-animation-deco-delay="100"
          data-deco-rotate="-10"
        >
          <nuxt-link :to="{name: 'industries-industry', params:{industry: 'finance' }}">
            <svg class="item__svg" width="500px" height="500px" viewBox="0 0 500 500">
              <clipPath id="clipShape2">
                <path
                  class="item__clippath"
                  d="M 378.1,121.2 C 408.4,150 417.2,197.9 411,245.8 404.8,293.7 383.5,341.7 353.4,370.7 303.2,419.1 198.7,427.7 144.5,383.8 86.18,336.5 67.13,221.3 111.9,161 138.6,125 188.9,99.62 240.7,90.92 292.4,82.24 345.6,90.32 378.1,121.2 Z"
                ></path>
              </clipPath>
              <g class="item__deco">
                <use xlink:href="#deco2"></use>
              </g>
              <g clip-path="url(#clipShape2)">
                <image
                  class="item__img"
                  :xlink:href="$getImgUrl('fin11.jpg')"
                  x="0"
                  y="0"
                  height="500px"
                  width="500px"
                ></image>
              </g>
            </svg>
            <div class="item__meta">
              <div class="item__number">
                <span class="item__specimen">02</span>
                <span class="item__reference">FIN</span>
              </div>
              <h2 class="item__title">Finance</h2>
              <h3 class="item__subtitle">Learn More</h3>
            </div>
            <h3 class="h1 fadedTitle">CROSS CHANNEL OPTIMIZATION DRIVEN BY INNOVATION</h3>
          </nuxt-link>
        </div>

        <div
          class="item item--style-3"
          data-animation-path-duration="3500"
          data-path-elasticity="500"
          data-morph-path="M 193.7,217.3 C 236.4,228.3 279.7,242.7 320.9,231.8 362.6,220.9 446.8,197.1 457.6,241.5 469.3,289.8 378.7,308.3 330.2,319.2 278.5,330.8 222.3,319.2 172.1,302.2 125.2,286.4 33.08,273.2 45.14,225.2 57.22,177.1 145.7,204.8 193.7,217.3 Z"
          data-path-translate-y="-20"
          data-animation-image-duration="1000"
          data-animation-image-easing="easeOutQuint"
          data-image-rotate="45"
          data-image-scale-x="0.8"
          data-image-scale-y="0.8"
          data-animation-deco-duration="2000"
          data-animation-deco-easing="easeOutElastic"
          data-deco-scale-x="0.7"
          data-deco-rotate="-10"
        >
          <nuxt-link :to="{name: 'industries-industry', params:{industry: 'hospitality' }}">
            <svg class="item__svg" width="500px" height="500px" viewBox="0 0 500 500">
              <clipPath id="clipShape3">
                <path
                  class="item__clippath"
                  d="M 184,127.4 C 235.4,92.39 319.7,79.27 359.9,132.2 383.2,163 357.1,216.6 355.8,258.8 354.8,291.2 371.3,332.9 352.9,356 306.1,414.4 205.1,419.3 153.7,367.2 123.8,336.8 128.6,272.1 136.1,225.2 142.1,187.8 157,145.7 184,127.4 Z"
                ></path>
              </clipPath>
              <g class="item__deco">
                <use xlink:href="#deco3"></use>
              </g>
              <g clip-path="url(#clipShape3)">
                <image
                  class="item__img"
                  :xlink:href="$getImgUrl('ret1.jpg')"
                  x="0"
                  y="0"
                  height="500px"
                  width="500px"
                ></image>
              </g>
            </svg>
            <div class="item__meta">
              <div class="item__number">
                <span class="item__specimen">03</span>
                <span class="item__reference">HOS</span>
              </div>
              <h2 class="item__title">Hospitality</h2>
              <h3 class="item__subtitle">Learn More</h3>
            </div>
            <h3 class="h1 fadedTitle left">Care made digital for enhanced user experience</h3>
          </nuxt-link>
        </div>

        <div
          class="item item--style-4"
          data-animation-path-duration="1700"
          data-animation-path-easing="easeInOutBack"
          data-morph-path="M 440.9,118.5 C 486.5,189.8 499,297.9 458.3,371.8 422.2,437.2 335.8,475.1 261.5,477.3 181.4,479.6 83.9,445.4 43.22,376.1 -0.2483,302.1 13.51,189.9 61.98,119.1 104.5,56.88 190.6,20.5 265.7,22.71 332.2,24.67 405,62.28 440.9,118.5 Z"
          data-path-translate-y="-20"
          data-animation-image-duration="2000"
          data-animation-image-easing="easeInOutQuart"
          data-image-translate-y="40"
          data-image-scale-x="1.3"
          data-image-scale-y="1.3"
          data-deco-scale-x="0.8"
          data-deco-scale-y="1.3"
        >
          <nuxt-link :to="{name: 'industries-industry', params:{industry: 'healthcare' }}">
            <svg class="item__svg" width="500px" height="500px" viewBox="0 0 500 500">
              <clipPath id="clipShape4">
                <path
                  class="item__clippath"
                  d="M 402.7,215.5 C 433.9,280.4 488.1,367.2 447.7,426.8 410.1,482.2 316.7,460.2 249.7,460.6 182.8,461.1 88.08,485.5 51.26,429.5 10.29,367.3 73.19,279.4 106.9,213 141.8,144 176.6,33.65 253.9,33.7 332.2,33.75 368.8,144.9 402.7,215.5 Z"
                ></path>
              </clipPath>
              <g class="item__deco">
                <use xlink:href="#deco4"></use>
              </g>
              <g clip-path="url(#clipShape4)">
                <image
                  class="item__img"
                  :xlink:href="$getImgUrl('healt.jpg')"
                  x="0"
                  y="0"
                  height="500px"
                  width="500px"
                ></image>
              </g>
            </svg>
            <div class="item__meta">
              <div class="item__number">
                <span class="item__specimen">04</span>
                <span class="item__reference">HEA</span>
              </div>
              <h2 class="item__title">Healthcare</h2>
              <h3 class="item__subtitle">Learn More</h3>
            </div>
            <h3 class="h1 fadedTitle">Reinventing the healthcare industry one byte at a time</h3>
          </nuxt-link>
        </div>

        <div
          class="item item--style-5"
          data-animation-path-duration="3000"
          data-animation-path-easing="easeInOutQuint"
          data-path-rotate="90"
          data-morph-path="M 368.1,46.42 C 461,96.69 473.7,266.2 422.3,358.4 379.1,436 259.6,484.8 175,457.5 107.5,435.7 12.65,329.8 60.93,277.7 95.18,240.8 154,379.3 194.2,348.9 250.7,306 116,204.1 148.4,140.9 184.8,70.02 298,8.455 368.1,46.42 Z"
          data-animation-image-duration="3000"
          data-animation-image-easing="easeInOutQuint"
          data-image-rotate="-30"
          data-animation-deco-duration="3000"
          data-animation-deco-easing="easeOutQuint"
        >
          <nuxt-link :to="{name: 'industries-industry', params:{industry: 'retail' }}">
            <svg class="item__svg" width="500px" height="500px" viewBox="0 0 500 500">
              <clipPath id="clipShape5">
                <path
                  class="item__clippath"
                  d="M 451.5,185.8 C 441.5,266.2 339.6,305 272.3,350.2 207.7,393.6 226.7,444.7 182.6,447.9 132.8,451.4 83.97,399.9 66.37,353.1 34.6,268.4 41.16,141.8 112,85.44 186.1,26.33 313.8,54.1 396,101.4 425.2,118.2 455.6,152.4 451.5,185.8 Z"
                ></path>
              </clipPath>
              <g class="item__deco">
                <use xlink:href="#deco5"></use>
              </g>
              <g clip-path="url(#clipShape5)">
                <image
                  class="item__img"
                  :xlink:href="$getImgUrl('ret1.jpg')"
                  x="0"
                  y="0"
                  height="500px"
                  width="500px"
                ></image>
              </g>
            </svg>
            <div class="item__meta">
              <div class="item__number">
                <span class="item__specimen">05</span>
                <span class="item__reference">RET</span>
              </div>
              <h2 class="item__title">Retail</h2>
              <h3 class="item__subtitle">Learn More</h3>
            </div>
            <h3 class="h1 fadedTitle left">Using IoT to automate Inventory & Merchandising</h3>
          </nuxt-link>
        </div>

        <div
          class="item item--style-6"
          data-animation-path-duration="2000"
          data-path-scale-x="0.7"
          data-path-scale-y="0.7"
          data-path-rotate="25"
          data-morph-path="M 279.8,41.26 C 332.2,40.04 397.1,40.63 432.5,79.42 470.9,121.7 455.7,191.8 458.3,249 460.6,300.4 481.9,363.6 448.9,403.1 402.7,458.2 311.1,450.1 239.3,453.9 183.9,456.9 113.3,471.5 74.23,432.1 18.97,376.3 29.82,251.5 45.32,198.4 59.64,149.2 95.01,111.8 134.9,84.73 176.6,56.36 229.4,42.43 279.8,41.26 Z"
          data-animation-image-duration="2000"
          data-animation-image-easing="easeOutExpo"
          data-image-translate-y="-30"
          data-image-scale-x="0.9"
          data-image-scale-y="0.9"
        >
          <nuxt-link :to="{name: 'industries-industry', params:{industry: 'telecom' }}">
            <svg class="item__svg" width="500px" height="500px" viewBox="0 0 500 500">
              <clipPath id="clipShape6">
                <path
                  class="item__clippath"
                  d="M 274.4,32.13 C 328.5,36.28 249,139.7 287.7,192.8 326.3,245.9 483.3,248.4 459,295 434.9,341.2 341.4,267.6 298,297.5 247.4,332.3 296,461.4 233.9,467.8 177.2,473.8 214.2,326.3 176,268.3 137.8,210.5 24.39,242.4 39.89,189.3 54.21,140.1 142,158.9 184.6,129.2 221.1,103.9 229.3,28.68 274.4,32.13 Z"
                ></path>
              </clipPath>
              <g class="item__deco">
                <use xlink:href="#deco6"></use>
              </g>
              <g clip-path="url(#clipShape6)">
                <image
                  class="item__img"
                  :xlink:href="$getImgUrl('telecomm.jpg')"
                  x="0"
                  y="0"
                  height="500px"
                  width="500px"
                ></image>
              </g>
            </svg>
            <div class="item__meta">
              <div class="item__number">
                <span class="item__specimen">06</span>
                <span class="item__reference">TEL</span>
              </div>
              <h2 class="item__title">Telecom</h2>
              <h3 class="item__subtitle">Learn More</h3>
            </div>
            <h3 class="h1 fadedTitle">DIGITAL TRANSFORMATION TO SUPPORT UNPARALLELED COMMUNICATION</h3>
          </nuxt-link>
        </div>

        <div
          class="item item--style-7"
          data-animation-path-duration="2500"
          data-animation-path-easing="easeOutExpo"
          data-path-rotate="10"
          data-path-scale-x="0.5"
          data-morph-path="M 251.1,32.08 C 320.8,39.34 403.4,70.51 435.8,132.7 476.2,210.5 460.8,325.2 406.4,394 360.4,452.2 271,467.5 196.8,469.3 144.1,470.5 65.63,471.7 45.51,423 17.77,355.8 140.2,302.9 148.3,230.6 154.4,177.4 80.17,122.4 106.2,75.55 130.7,31.47 200.9,26.86 251.1,32.08 Z"
          data-animation-image-duration="1500"
          data-animation-image-easing="easeOutCubic"
          data-image-rotate="-30"
          data-animation-deco-duration="1500"
          data-animation-deco-easing="easeOutExpo"
          data-deco-scale-x="0.7"
          data-deco-translate-x="-100"
          data-deco-translate-y="-100"
          data-deco-rotate="50"
        >
          <nuxt-link :to="{name: 'industries-industry', params:{industry: 'transport' }}">
            <svg class="item__svg" width="500px" height="500px" viewBox="0 0 500 500">
              <clipPath id="clipShape7">
                <path
                  class="item__clippath"
                  d="M 280.1,34.42 C 465.8,29.89 514.6,354 417.3,392.3 318.9,423.2 332.3,114.7 233.3,143.6 134,172.6 294.3,390.5 212,453.2 174.8,481.6 106.3,459.6 74.54,425.3 21.22,367.7 30.13,244.7 45.63,191.6 59.95,142.4 95.32,105 135.2,77.89 176.9,49.52 229.9,29.96 280.1,34.42 Z"
                ></path>
              </clipPath>
              <g class="item__deco">
                <use xlink:href="#deco7"></use>
              </g>
              <g clip-path="url(#clipShape7)">
                <image
                  class="item__img"
                  :xlink:href="$getImgUrl('transport1.jpg')"
                  x="0"
                  y="0"
                  height="500px"
                  width="500px"
                ></image>
              </g>
            </svg>
            <div class="item__meta">
              <div class="item__number">
                <span class="item__specimen">07</span>
                <span class="item__reference">TRA</span>
              </div>
              <h2 class="item__title">Transport</h2>
              <h3 class="item__subtitle">Learn More</h3>
            </div>
            <h3 class="h1 fadedTitle left">Innovating logistics through digital transformation</h3>
          </nuxt-link>
        </div>

        <div
          class="item item--style-8"
          data-animation-path-duration="2000"
          data-animation-path-easing="easeInOutQuart"
          data-morph-path="M 30.03,240.4 C 31.35,186.2 39.67,120 85.95,86.14 162.5,30.12 302,3.296 378.7,59.08 413.1,84.14 383.6,140 395.1,178.8 411.6,234.4 477.8,280.7 469.5,337.7 462.6,384.1 420.9,429 373.8,447.7 286.1,482.5 161.8,482.4 87.79,427 33.04,386 28.46,305 30.03,240.4 Z"
          data-path-scale-x="1.1"
          data-path-scale-y="1.1"
          data-animation-image-duration="2300"
          data-animation-image-easing="easeInOutQuart"
          data-image-scale-x="1.3"
          data-image-scale-y="1.3"
          data-image-translate-y="-60"
          data-animation-deco-duration="2000"
          data-animation-deco-easing="easeInOutQuart"
          data-deco-scale-x="1.1"
          data-deco-scale-y="1.1"
          data-deco-rotate="-15"
        >
          <nuxt-link :to="{name: 'industries-industry', params:{industry: 'education' }}">
            <svg class="item__svg" width="500px" height="500px" viewBox="0 0 500 500">
              <clipPath id="clipShape8">
                <path
                  class="item__clippath"
                  d="M 47.99,295.7 C 44.25,252.9 72.33,195.7 110.4,167 169.6,122.4 259,106.1 329.6,128.8 381.3,145.4 428,193 443.7,245 453.3,277 464.9,322.4 424.6,343.5 369,372.7 304.2,310.1 239.1,319 190.9,325.5 153,380 107.6,373.4 64.97,367.3 50.68,326.4 47.99,295.7 Z"
                ></path>
              </clipPath>
              <g class="item__deco">
                <use xlink:href="#deco2"></use>
              </g>
              <g clip-path="url(#clipShape8)">
                <image
                  class="item__img"
                  :xlink:href="$getImgUrl('edddduuuu.jpg')"
                  x="0"
                  y="0"
                  height="500px"
                  width="500px"
                ></image>
              </g>
            </svg>
            <div class="item__meta">
              <div class="item__number">
                <span class="item__specimen">08</span>
                <span class="item__reference">EDU</span>
              </div>
              <h2 class="item__title">Education</h2>
              <h3 class="item__subtitle">Learn More</h3>
            </div>
            <h3 class="h1 fadedTitle">Leveraging technology to reinvent education</h3>
          </nuxt-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import IndustryListBanner from '@/components/Industries/IndustryListBanner.vue'

export default {
  components: {
    IndustryListBanner
  },

  mounted() {
    // Anim is impoted in INDEX.HTML
    // Main
    {
      class ImgItem {
        constructor(el) {
          this.DOM = {}
          this.DOM.el = el
          this.DOM.svg = this.DOM.el.querySelector('.item__svg')
          this.DOM.path = this.DOM.svg.querySelector('path')
          this.paths = {}
          this.paths.start = this.DOM.path.getAttribute('d')
          this.paths.end = this.DOM.el.dataset.morphPath
          this.DOM.deco = this.DOM.svg.querySelector('.item__deco')
          this.DOM.image = this.DOM.svg.querySelector('image')
          this.DOM.title = this.DOM.el.querySelector(
            '.item__meta > .item__title'
          )
          this.DOM.subtitle = this.DOM.el.querySelector(
            '.item__meta > .item__subtitle'
          )
          this.CONFIG = {
            // Defaults:
            animation: {
              path: {
                duration: this.DOM.el.dataset.animationPathDuration || 1500,
                delay: this.DOM.el.dataset.animationPathDelay || 0,
                easing:
                  this.DOM.el.dataset.animationPathEasing || 'easeOutElastic',
                elasticity: this.DOM.el.dataset.pathElasticity || 400,
                scaleX: this.DOM.el.dataset.pathScalex || 1,
                scaleY: this.DOM.el.dataset.pathScaley || 1,
                translateX: this.DOM.el.dataset.pathTranslatex || 0,
                translateY: this.DOM.el.dataset.pathTranslatey || 0,
                rotate: this.DOM.el.dataset.pathRotate || 0
              },
              image: {
                duration: this.DOM.el.dataset.animationImageDuration || 2000,
                delay: this.DOM.el.dataset.animationImageDelay || 0,
                easing:
                  this.DOM.el.dataset.animationImageEasing || 'easeOutElastic',
                elasticity: this.DOM.el.dataset.imageElasticity || 400,
                scaleX: this.DOM.el.dataset.imageScalex || 1.1,
                scaleY: this.DOM.el.dataset.imageScaley || 1.1,
                translateX: this.DOM.el.dataset.imageTranslatex || 0,
                translateY: this.DOM.el.dataset.imageTranslatey || 0,
                rotate: this.DOM.el.dataset.imageRotate || 0
              },
              deco: {
                duration: this.DOM.el.dataset.animationDecoDuration || 2500,
                delay: this.DOM.el.dataset.animationDecoDelay || 0,
                easing:
                  this.DOM.el.dataset.animationDecoEasing || 'easeOutQuad',
                elasticity: this.DOM.el.dataset.decoElasticity || 400,
                scaleX: this.DOM.el.dataset.decoScalex || 0.9,
                scaleY: this.DOM.el.dataset.decoScaley || 0.9,
                translateX: this.DOM.el.dataset.decoTranslatex || 0,
                translateY: this.DOM.el.dataset.decoTranslatey || 0,
                rotate: this.DOM.el.dataset.decoRotate || 0
              }
            }
          }
          this.initEvents()
        }
        initEvents() {
          this.mouseenterFn = () => {
            this.mouseTimeout = setTimeout(() => {
              this.isActive = true
              this.animate()
            }, 75)
          }
          this.mouseleaveFn = () => {
            clearTimeout(this.mouseTimeout)
            if (this.isActive) {
              this.isActive = false
              this.animate()
            }
          }
          this.DOM.el.addEventListener('mouseenter', this.mouseenterFn)
          this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn)
          this.DOM.el.addEventListener('touchstart', this.mouseenterFn)
          this.DOM.el.addEventListener('touchend', this.mouseleaveFn)
        }
        getAnimeObj(targetStr) {
          const target = this.DOM[targetStr]
          let animeOpts = {
            targets: target,
            duration: this.CONFIG.animation[targetStr].duration,
            delay: this.CONFIG.animation[targetStr].delay,
            easing: this.CONFIG.animation[targetStr].easing,
            elasticity: this.CONFIG.animation[targetStr].elasticity,
            scaleX: this.isActive ? this.CONFIG.animation[targetStr].scaleX : 1,
            scaleY: this.isActive ? this.CONFIG.animation[targetStr].scaleY : 1,
            translateX: this.isActive
              ? this.CONFIG.animation[targetStr].translateX
              : 0,
            translateY: this.isActive
              ? this.CONFIG.animation[targetStr].translateY
              : 0,
            rotate: this.isActive ? this.CONFIG.animation[targetStr].rotate : 0
          }
          if (targetStr === 'path') {
            animeOpts.d = this.isActive ? this.paths.end : this.paths.start
          }
          anime.remove(target)
          return animeOpts
        }
        animate() {
          // Animate the path, the image and deco.
          anime(this.getAnimeObj('path'))
          anime(this.getAnimeObj('image'))
          anime(this.getAnimeObj('deco'))
          // Title and Subtitle animation
          anime.remove(this.DOM.title)
          anime({
            targets: this.DOM.title,
            easing: 'easeOutQuad',
            translateY: this.isActive
              ? [
                  { value: '-50%', duration: 200 },
                  { value: ['50%', '0%'], duration: 200 }
                ]
              : [
                  { value: '50%', duration: 200 },
                  { value: ['-50%', '0%'], duration: 200 }
                ],
            opacity: [{ value: 0, duration: 200 }, { value: 1, duration: 200 }]
          })
          anime.remove(this.DOM.subtitle)
          anime({
            targets: this.DOM.subtitle,
            easing: 'easeOutQuad',
            translateY: this.isActive
              ? { value: ['50%', '0%'], duration: 200, delay: 250 }
              : { value: '0%', duration: 1 },
            opacity: this.isActive
              ? { value: [0, 1], duration: 200, delay: 250 }
              : { value: 0, duration: 1 }
          })
        }
      }

      const items = Array.from(document.querySelectorAll('.item'))
      const init = (() => items.forEach(item => new ImgItem(item)))()
      setTimeout(() => document.body.classList.remove('loading'), 2000)
    }
  }
}
</script>

<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
}

.industryListWrapper {
  /* font-family: 'Rubik', sans-serif; */
  color: #131314;
  background: #fff repeat-y 50% 500px;
  background-size: 70%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.industryListWrapper h3 {
  font-size: 3.3rem;
  font-weight: 900;
  text-transform: uppercase;
}

.industryListWrapper h3 {
  font-size: 1.5rem;
  text-transform: uppercase;
}

a {
  text-decoration: none;
  color: #a6a9ac;
  outline: none;
}

a:hover,
a:focus {
  color: #131314;
}

.hidden {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  pointer-events: none;
}

.js .loading::before {
  content: '';
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #efeff2;
}

.js .loading::after {
  content: '';
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin: -25px 0 0 -25px;
  pointer-events: none;
  border-radius: 50%;
  background: #dcdcde;
  animation: loaderAnim 0.8s ease-out infinite alternate forwards;
}

@keyframes loaderAnim {
  to {
    transform: scale3d(0.5, 0.5, 1);
  }
}

/* Icons */
.icon {
  display: block;
  width: 1.5em;
  height: 1.5em;
  margin: 0 auto;
  fill: currentColor;
}

main {
  overflow: hidden;
}

.github {
  position: absolute;
  top: 0;
  right: 0;
  width: 6em;
  height: 6em;
}

.github__deco {
  position: absolute;
  z-index: -1;
  fill: #e6e6e6;
}

.icon--github {
  font-size: 1.15em;
  margin: 1em 0 0 2.5em;
}

/* Content */
.content {
  padding: 3em 0;
}

.content--grid {
  /* display: grid; */
  padding: 10vh 8vw;
  padding-top: 0;

  grid-template-columns: 50% 50%;
}

.content--related {
  font-size: 0.85em;
  display: grid;
  justify-content: center;
  align-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2em;
  padding: 10em 0;
  text-align: center;
  letter-spacing: 0.05em;

  grid-template-columns: repeat(auto-fill, 260px);
  grid-gap: 4em;
}

.content--related > p {
  grid-column: 1 / -1;
}

/* Header */
.codrops-header {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 5vw;
}

.codrops-header__title {
  font-size: 1.625em;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  padding: 0.5em 0;
  letter-spacing: 0.5em;
  text-transform: uppercase;
}

/* Top Navigation Style */
.codrops-links {
  position: relative;
  display: flex;
  margin: 0 1em 0 0;
  text-align: center;
  white-space: nowrap;
}

.codrops-icon {
  display: inline-block;
  margin: 0.5em;
}

.codrops-icon:first-child {
  margin-left: 0;
}
/* Related post item */
.media-item {
  display: block;
  transition: color 0.3s;
}

.media-item__img {
  max-width: 100%;
  opacity: 0.8;
  border-radius: 60px/100px;
  transition: opacity 0.3s;
}

.media-item:hover .media-item__img,
.media-item:focus .media-item__img {
  opacity: 1;
}

.media-item__title {
  font-weight: normal;
  margin: 0;
  padding: 0.5em;
}

/* items */
.item {
  position: relative;
  width: 500px;
  max-width: 100%;
  margin: 0 0 0 auto;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  grid-column: span 2;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.item:nth-of-type(even) {
  margin: 0 auto 0 0;
}

.item:first-of-type {
  grid-column: span 1;
}

.item__svg {
  position: relative;
  display: block;
  width: 80%;
  height: auto;
  /* min-height: 500px; */
  min-height: 380px;
  margin: 0 auto;
}

.item__clippath,
.item__deco,
.item__img {
  transform-origin: 50% 50%;
}

.item__meta {
  position: absolute;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.item__number {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 12.5% 0 0 3em;
  letter-spacing: 0.5em;
  text-transform: uppercase;
}

.item__specimen {
  font-size: 5em;
  font-weight: 500;
  line-height: 0.9;
  vertical-align: text-bottom;
  letter-spacing: -0.025em;
}

.item__reference {
  font-size: 1.25em;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}

.item__title {
  /* font-size: 1.165em; */
  font-size: 2.5em;
  font-weight: 600;
  width: 100%;
  margin: 1em 0 0 0;
  text-align: center;
  letter-spacing: 0.125em;
  color: #000;
}

.item__subtitle {
  font-size: 1rem !important;
  font-weight: 500;
  margin: 0.5em 0 0;
  text-align: center;
  letter-spacing: 0.15em;
  opacity: 0;
}

/* Individual styles */
.item--style-1 .item__deco {
  fill: #dcdcde;
}

.item--style-2 .item__deco {
  fill: #404040;
}

.item--style-3 .item__deco {
  fill: #fff;
}

.item--style-3 .item__title {
  color: #131314;
}

.item--style-4 .item__deco {
  fill: #dcdcde;
}

.item--style-5 .item__deco {
  fill: #404040;
}

.item--style-6 .item__deco {
  fill: #dcdcde;
}

.item--style-7 .item__deco {
  fill: #fff;
}

.item--style-7 .item__title {
  color: #131314;
}

.item--style-8 .item__deco {
  fill: #404040;
}

.item--style-9 .item__deco {
  fill: #dcdcde;
}

@media screen and (max-width: 60em) {
  .item:first-of-type {
    grid-column: span 2;
  }
  .content--grid {
    grid-row-gap: 25vh;
  }
}

@media screen and (max-width: 40em) {
  .codrops-header__title {
    font-size: 1em;
  }
  .content--grid {
    padding: 2vh 8vw;
  }
  .item__number {
    font-size: 0.75em;
  }
  .item__svg {
    min-height: 360px;
  }
}

.fadedTitle {
  position: absolute;
  top: 0px;
  /* right: 0px; */
  bottom: 0;
  /* left: 0; */
  margin: auto;
  font-weight: 900;
  width: 100%;
  height: auto;
  /* font-size: 6rem !important; */
  font-size: 2rem !important;
  /* color: #e1e1e2; */
  transform: translate(100%, 40%);
  transition: all 0.5s;
}

.fadedTitle:hover {
  color: #006ada;
}

.item:hover .fadedTitle {
  color: #006ada;
}

.fadedTitle.right {
  right: 0;
  transform: translate(100%, 40%);
}

.fadedTitle.left {
  left: 0;
  transform: translate(-100%, 40%);
}

.codrops-header {
  width: 60%;
  margin-top: 2rem;
  padding: 0;
  top: 50px;
}

@media screen and (max-width: 560px) {
  .fadedTitle {
    display: none;
  }

  .codrops-header {
    width: 100%;
    margin-bottom: 7rem;
  }

  .industryListWrapper h3 {
    font-size: 2rem;
  }
}
</style>
