<template>
  <div>
    <div class="container">
      <div class="transformationJourney">
        <div class="circleLineDraw">
          <img
            class="animated zoomIn"
            v-show="cardActive === 1"
            src="@/assets/images/circle_inselect-02.svg"
            alt="Digital Transformation Journey"
          >
          <img
            class="animated zoomIn"
            v-show="cardActive === 2"
            src="@/assets/images/circle_inselect-01.svg"
            alt="Digital Transformation Journey"
          >
          <img
            class="animated zoomIn"
            v-show="cardActive === 4"
            src="@/assets/images/circle_inselect-03.svg"
            alt="Digital Transformation Journey"
          >
          <img
            class="animated zoomIn"
            v-show="cardActive === 3"
            src="@/assets/images/circle_inselect-04.svg"
            alt="Digital Transformation Journey"
          >
        </div>

        <div
          class="iconJourney one"
          :class="{'active' :cardActive === 1}"
          @mouseover="activeTheCardOnHover(1)"
        >
          <svg
            style="vertical-align:baseline"
            version="1.1"
            xmlns:x="&ns_extend;"
            xmlns:i="&ns_ai;"
            xmlns:graph="&ns_graphs;"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 150 150"
            enable-background="new 0 0 150 150"
            xml:space="preserve"
          >
            <metadata>
              <sfw xmlns="&ns_sfw;">
                <slices></slices>
                <sliceSourceBounds
                  width="258.922"
                  height="259.438"
                  x="20.078"
                  y="-282.001"
                  bottomLeftOrigin="true"
                ></sliceSourceBounds>
              </sfw>
            </metadata>
            <g>
              <path
                fill="#DC1D45"
                d="M79.957,107.152H124v9.045H79.957V107.152z M52.01,76.401H124v-9.045H52.01V76.401z M26,42.848h98v-9.045
                        H26V42.848z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="contentForTheJourney one" :class="{'active' :cardActive === 1}">
          <div class="innerWrapper">
            <h4>{{ digitalTransformation.expand.title }}</h4>
            <p
              style="width: 150%; position: absolute; right: 85px;"
            >{{ digitalTransformation.expand.content }}</p>
          </div>
        </div>
        <div
          class="iconJourney four"
          :class="{'active' :cardActive === 4}"
          @mouseover="activeTheCardOnHover(4)"
        >
          <svg
            style="vertical-align:baseline"
            version="1.1"
            xmlns:x="&ns_extend;"
            xmlns:i="&ns_ai;"
            xmlns:graph="&ns_graphs;"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 150 150"
            enable-background="new 0 0 150 150"
            xml:space="preserve"
          >
            <metadata>
              <sfw xmlns="&ns_sfw;">
                <slices></slices>
                <sliceSourceBounds
                  width="258.922"
                  height="259.438"
                  x="20.078"
                  y="-282.001"
                  bottomLeftOrigin="true"
                ></sliceSourceBounds>
              </sfw>
            </metadata>
            <path
              fill="#DC1D45"
              d="M114.042,117.122H33.533V32.878h80.508l12.959-9.879H22.999v104.002h104.002L114.042,117.122z
                    M114.042,117.122 M54.787,58.252h33.496v33.496H54.787V58.252z"
            ></path>
          </svg>
        </div>
        <div class="contentForTheJourney four" :class="{'active' :cardActive === 4}">
          <div class="innerWrapper" style="width: 150%; padding-left: 20px;">
            <h4>{{ digitalTransformation.measure.title }}</h4>
            <p>{{ digitalTransformation.measure.content }}</p>
          </div>
        </div>
        <div
          class="iconJourney two"
          :class="{'active' :cardActive === 2}"
          @mouseover="activeTheCardOnHover(2)"
        >
          <svg
            style="vertical-align:baseline"
            version="1.1"
            xmlns:x="&ns_extend;"
            xmlns:i="&ns_ai;"
            xmlns:graph="&ns_graphs;"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 150 150"
            enable-background="new 0 0 150 150"
            xml:space="preserve"
          >
            <metadata>
              <sfw xmlns="&ns_sfw;">
                <slices></slices>
                <sliceSourceBounds
                  width="258.922"
                  height="259.438"
                  x="20.078"
                  y="-282.001"
                  bottomLeftOrigin="true"
                ></sliceSourceBounds>
              </sfw>
            </metadata>
            <g>
              <path
                fill="#DC1D45"
                d="M76.839,127.225l53.083-52.623L76.839,22.563v12.75l39.846,39.541l-39.846,39.437V127.225z M76.839,127.225
                        "
              ></path>
              <path
                fill="#DC1D45"
                d="M73.16,114.503L33.313,75.068L73.16,35.525v-12.75L20.078,74.814l53.082,52.623V114.503z M73.16,127.437"
              ></path>
            </g>
          </svg>
        </div>
        <div class="contentForTheJourney two" :class="{'active' :cardActive === 2}">
          <div class="innerWrapper">
            <h4>{{ digitalTransformation.innovate.title }}</h4>
            <p style="width: 160%;">{{ digitalTransformation.innovate.content }}</p>
          </div>
        </div>
        <div
          class="iconJourney three"
          :class="{'active' :cardActive === 3}"
          @mouseover="activeTheCardOnHover(3)"
        >
          <svg
            style="vertical-align:baseline"
            version="1.1"
            xmlns:x="&ns_extend;"
            xmlns:i="&ns_ai;"
            xmlns:graph="&ns_graphs;"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 150 150"
            enable-background="new 0 0 150 150"
            xml:space="preserve"
          >
            <metadata>
              <sfw xmlns="&ns_sfw;">
                <slices></slices>
                <sliceSourceBounds
                  width="258.922"
                  height="259.438"
                  x="20.078"
                  y="-282.001"
                  bottomLeftOrigin="true"
                ></sliceSourceBounds>
              </sfw>
            </metadata>
            <path
              fill="#DC1D45"
              d="M97.391,63.721l-5.691,5.4L55.357,32.635l5.838-5.254l13.768,13.963l14.108-13.963l5.399,5.254
                    L80.705,46.939L97.391,63.721z M103.096,80.746l14.346,13.723l5.236-5.416l-14.004-14.064l13.92-13.811l-5.273-5.822L80.945,91.807
                    l5.418,5.676L103.096,80.746z M46.92,69.322L32.548,55.629l-5.227,5.426l14.034,14.037L27.463,88.93l5.283,5.813l36.302-36.525
                    l-5.429-5.664L46.92,69.322z M69.334,102.977l-13.62,14.443l5.161,5.199l13.965-14.107l14.202,13.82l5.784-5.314L58.113,80.906
                    l-5.637,5.459L69.334,102.977z"
            ></path>
          </svg>
        </div>
        <div class="contentForTheJourney three" :class="{'active' :cardActive === 3}">
          <div class="innerWrapper">
            <h4
              style="position: relative; right: -16px;"
            >{{ digitalTransformation.transform.title }}</h4>
            <p
              style="position: relative; right: -20px; width: 150%;"
            >{{ digitalTransformation.transform.content }}</p>
          </div>
        </div>
      </div>
      <div class="mobile-transformationJourney">
        <div class="transformation-container text-center">
          <div class="transformation-wrapper">
            <div class="innerWrapper">
              <h4>{{ digitalTransformation.expand.title }}</h4>
              <img
                class="animated zoomIn"
                src="@/assets/images/circle_inselect-02.svg"
                alt="Digital Transformation Journey"
              >
              <p>{{ digitalTransformation.expand.content }}</p>
            </div>
          </div>
          <div class="transformation-wrapper">
            <div class="innerWrapper">
              <h4>{{ digitalTransformation.innovate.title }}</h4>
              <img
                class="animated zoomIn"
                src="@/assets/images/circle_inselect-01.svg"
                alt="Digital Transformation Journey"
              >
              <p>{{ digitalTransformation.innovate.content }}</p>
            </div>
          </div>
          <div class="transformation-wrapper">
            <div class="innerWrapper">
              <h4>{{ digitalTransformation.transform.title }}</h4>
              <img
                class="animated zoomIn"
                src="@/assets/images/circle_inselect-04.svg"
                alt="Digital Transformation Journey"
              >
              <p>{{ digitalTransformation.transform.content }}</p>
            </div>
          </div>
          <div class="transformation-wrapper">
            <div class="innerWrapper">
              <h4>{{ digitalTransformation.measure.title }}</h4>
              <img
                class="animated zoomIn"
                src="@/assets/images/circle_inselect-03.svg"
                alt="Digital Transformation Journey"
              >
              <p>{{ digitalTransformation.measure.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorRed: 'red',
      cardActive: 2,
      digitalTransformation: {
        expand: {
          title: 'Expand',
          content:
            'Innovation and economic growth drives expansion and development which has the power to transform society.'
        },
        innovate: {
          title: 'Innovate',
          content:
            'Execute digital innovation initiatives and foster new business models that cater to changing business needs.'
        },
        transform: {
          title: 'Transform',
          content:
            'Leverage on technology to sculpt new opportunities and experiences to collectively accelerate global and societal transformation process.'
        },
        measure: {
          title: 'Measure',
          content:
            'Integrate numerical KPIs through quantitative digital metrics and study impact on transformation campaigns.'
        }
      }
    }
  },

  methods: {
    activeTheCardOnHover(a) {
      this.cardActive = a
    }
  },

  mounted() {}
}
</script>


<style scope>
.transformationJourney {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  padding: 20px;
}
.mobile-transformationJourney {
  display: none;
}
.transformationJourney i {
  color: #dc1d45;
}

.iconJourney {
  position: absolute;
  background-color: #fff;
  text-align: center;
  border-radius: 50%;
  line-height: 50px;
  width: 75px;
  height: 75px;
  font-size: 30px;
  z-index: 2;
}

.iconJourney.one {
  top: -16px;
  right: 0;
  left: 0;
  margin: 0 auto;
}
.iconJourney.two {
  top: 50%;
  transform: translatey(-50%);
  left: -18px;
}

.iconJourney.three {
  bottom: -16px;
  right: 0;
  left: 0;
  margin: 0 auto;
}
.iconJourney.four {
  top: 50%;
  transform: translatey(-50%);
  right: -18px;
}

.circleLineDraw {
  position: absolute;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  border-radius: 50%;
  border: 2px solid #dc1d45;
  top: 20px;
  right: 20px;
  line-height: 450px;
  text-align: center;
}

.iconJourney {
  transition: background-color 0.5s;
}

.iconJourney path {
  transition: all 0.5s;
}

.iconJourney.active path {
  fill: #fff;
}

.iconJourney.active {
  background-color: #dc1d45;
}
.iconJourney.active svg {
  width: 50px;
}
.iconJourney.one.active {
  background-color: #dc1d45;
  line-height: 87px;
  width: 60px;
  height: 60px;
}
.iconJourney.two.active {
  background-color: #dc1d45;
  line-height: 87px;
  width: 60px;
  height: 60px;
  left: -9px;
}
.iconJourney.three.active {
  background-color: #dc1d45;
  line-height: 87px;
  width: 60px;
  height: 60px;
}
.iconJourney.four.active {
  background-color: #dc1d45;
  line-height: 87px;
  width: 60px;
  height: 60px;
  right: -7px;
}

.contentForTheJourney.two.active p {
  position: relative;
  float: right;
}

.contentForTheJourney h4 {
  color: #dc1d45;
}

.circleLineDraw img {
  position: relative;
  z-index: 9;
  max-width: 195px;
}

.contentForTheJourney {
  width: 50%;
  height: 250px;
  float: left;
  /* overflow: hidden; */
}

.contentForTheJourney .innerWrapper {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: top 0.3s linear;
}
.contentForTheJourney.active .innerWrapper {
  opacity: 1;
}

.caseStudyTitle.active {
  position: relative;
  z-index: 0;
  left: 0px;
  top: -30px;
}

.contentForTheJourney.two .innerWrapper {
  position: relative;
  top: 100%;
  text-align: right;
  padding-top: 26px;
  padding-right: 40px;
}
.contentForTheJourney.two.active .innerWrapper {
  top: 0;
}

.contentForTheJourney.one .innerWrapper {
  position: relative;
  top: 100%;
  transition: top 0.3s linear;
  text-align: right;
  padding-top: 20px;
  padding-right: 85px;
}
.contentForTheJourney.one.active .innerWrapper {
  top: 0;
}
.contentForTheJourney.four .innerWrapper {
  position: relative;
  top: -100%;
  transition: top 0.3s linear;
  text-align: left;
  padding-top: 33px;
  padding-right: 0;
}
.contentForTheJourney.four.active .innerWrapper {
  top: -20px;
  left: 37px;
}

.contentForTheJourney.three .innerWrapper {
  position: relative;
  top: -100%;
  transition: top 0.3s linear;
  text-align: left;
  padding-top: 64px;
  padding-right: 0;
}
.contentForTheJourney.three.active .innerWrapper {
  top: -19px;
  left: 29px;
}

@media (max-width: 767px) {
  .iconJourney {
    position: relative;
    left: inherit !important;
    top: inherit !important;
    right: inherit !important;
    width: 100%;
    height: auto;
    text-align: center;
    -webkit-transform: inherit !important;
    transform: inherit !important;
    bottom: inherit !important;
  }
  .iconJourney svg {
    width: 100px;
  }
  .transformationJourney {
    width: auto;
    height: auto;
  }
  .circleLineDraw {
    display: none;
  }
  .contentForTheJourney {
    width: 100%;
    height: auto;
  }
  .contentForTheJourney .innerWrapper {
    opacity: 1 !important;
  }
  .contentForTheJourney.one .innerWrapper,
  .contentForTheJourney.one .innerWrapper,
  .contentForTheJourney.one .innerWrapper,
  .contentForTheJourney.one .innerWrapper {
    position: relative;
    top: 0 !important;
    -webkit-transition: top 0.3s linear;
    transition: top 0.3s linear;
    text-align: center;
    padding-top: 0;
    padding-right: 0;
  }
  .iconJourney.active {
    background-color: transparent !important;
    width: auto !important;
    height: auto !important;
    line-height: inherit !important;
  }
}
/* @media screen and (max-width: 991px) and (min-width: 768px)
@media screen and (max-width: 1199px) and (min-width: 992px)
@media(max-width:480px) */
@media (max-width: 560px) {
  .transformationJourney {
    display: none;
  }
  .mobile-transformationJourney {
    display: block;
    position: relative;
    padding: 20px;
  }
  .transformation-container .transformation-wrapper {
    margin: 40px 0;
  }
  .transformation-container .transformation-wrapper h4 {
    color: #dc1d45;
  }
  .transformation-container .transformation-wrapper img {
    width: 115px;
  }
}
</style>
