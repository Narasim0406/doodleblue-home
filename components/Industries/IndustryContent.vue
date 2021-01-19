<template>
  <div>
    <!-- Industry Introduction -->
    <section class="industryIntro">
      <b-container>
        <b-row align-v="center">
          <b-col md="7">
            <h2 class="wow fade-in-bottom">Overview</h2>
            <p class="wow fade-in-bottom">
              {{ industry.overview.content }}
            </p>
          </b-col>
          <b-col md="5">
            <div class="industryImage" v-lazy-container="{ selector: 'img' }">
              <img
                class="responsiveImg"
                :data-src="$getImgUrl(industry.overview.image)"
                alt="industry">
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- Industry Introduction -->

    <!-- Solutions -->
    <section class="solutionsWrapper">
      <b-container>
        <b-row align-v="stretch">
          <b-col md="5" class="solutionTitle"
            >
            <!-- :style="{'background-image': 'url('+$getImgUrl('bigstock-People-Celebration-Success-Wor-114884792.jpg')+')'}" -->
            <h2>
              Solutions
            </h2>
            <!-- <h4>
              The Challenge for us
            </h4> -->
            <!-- <img src="@/assets/images/logo-opacity.svg" alt="logo" > -->

          </b-col>
          <b-col md="7">

            <b-row class="pointsWrapper">
              <b-col md="12"
                class="point"
                v-for="(item, i) in industry.solutions.cards" :key="i"
                >
                <h3>
                  {{ item.title }}
                  <span class="pointNumber">
                    0{{ i+1 }}
                  </span>
                </h3>
                <p class="wow fade-in-bottom"> {{ item.content }} </p>
              </b-col>
            </b-row>

          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- Solutions -->

  </div>
</template>

<script>
export default {
  props: ['industry'],

}
</script>

<style scoped>

.industryIntro h2 {
  margin-bottom: 2rem;
  color: #006ada;
}

.industryIntro p {
  padding-right: 2rem;
}


.solutionTitle {
  background: #006ada;
  color: #fff;
  padding: 3rem;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
  text-align: left;
}

.solutionTitle h2 {
  font-weight: 900;
  font-size: 3rem;
  position: relative;
}

.solutionTitle h2:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 25px;
    height: 3px;
    background: #fff;
}

.solutionTitle h4 {
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.3);
    font-weight: 900;
    position: absolute;
    bottom: 3rem;
    padding-right: 3rem;
    line-height: 3.3rem;
    text-transform: capitalize;
}

.solutionsWrapper h3 {
  font-size: 1.5rem;
  text-transform: capitalize;
}

.solutionsWrapper p {
  font-size: 1rem;
}


.pointsWrapper {
  padding: 3rem;
}

.point {
  margin-bottom: 1rem;
}

span.pointNumber {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1.2rem;
    color: #006ada;
    transform: translateX(-100%);
}


</style>
