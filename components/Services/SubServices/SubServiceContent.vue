<template>
  <div>
    <section class="subServiceContent">
      <b-container class="subServiceContentHeader">
        <h2>{{ subService.title }}</h2>
        <h4>{{ subService.desc }}</h4>
      </b-container>

      <b-container>
        <section class="uiSubContentCardWrapper">
          <b-container>
            <b-row>
              <b-col md="12" v-for="(item, index) in subService.contents" :key="index">
                <b-container class="uiSubContentCard">
                  <b-row no-gutters>
                    <b-col md="8">
                      <div class="uiSubContentCardBody">
                        <div
                          class="uiSubContentCardTitle"
                          :style="{'color': color}"
                        >{{ item.title }}</div>
                        <div
                          class="uiSubContentCardText"
                          :class="{uiSubContentCardCaption: item.hasOwnProperty('points')}"
                        >
                          <p>{{ item.content }}</p>
                        </div>
                        <div
                          class="uiSubContentCardText uiSubContentCardDesc"
                          v-if="item.hasOwnProperty('desc')"
                          :style="{color: '#595959', paddingTop: '0'}"
                        >
                          <p>{{ item.desc }}</p>
                        </div>
                        <div class="uiSubContentCardPoints" v-if="item.hasOwnProperty('points')">
                          <b-row>
                            <b-col md="6" :class="{'col-md-12': item.points.col2.length <= 0}">
                              <div class="uiSubContentCardPointsColumn">
                                <div
                                  class="uiSubContentCardPoint"
                                  v-for="(point, i) in item.points.col1"
                                  :key="i"
                                >
                                  <span class="pointsCheck">
                                    <i class="fas fa-check"></i>
                                  </span>
                                  {{ point }}
                                </div>
                              </div>
                            </b-col>
                            <b-col md="6" v-if="item.points.col2.length">
                              <div class="uiSubContentCardPointsColumn">
                                <div
                                  class="uiSubContentCardPoint"
                                  v-for="(point, i) in item.points.col2"
                                  :key="i"
                                >
                                  <span class="pointsCheck">
                                    <i class="fas fa-check"></i>
                                  </span>
                                  {{ point }}
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </div>
                      </div>
                    </b-col>
                    <b-col md="4">
                      <div class="uiSubContentImg" v-lazy-container="{ selector: 'img'}">
                        <img :data-src="$getImgUrl(item.image)" alt="isometric">
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </section>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  props: ['color', 'subService'],

  data() {
    return {}
  }
}
</script>

<style scoped>
.subServiceContentHeader h2 {
  text-transform: capitalize;
  margin-bottom: 2rem;
}

.subServiceContentHeader h4 {
  color: #7c7c7c;
  width: 70%;
  margin: auto;
  margin-bottom: 3rem;
  font-size: 1.2rem;
}

.subServiceContentHeader {
  text-align: center;
}

.uiSubContentCardTitle {
  color: #006ada;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.5rem;
  /* text-transform: uppercase; */
  text-transform: capitalize;
}

.uiSubContentCardText {
  padding-top: 10px;
  font-size: 18px;
  color: black;
  font-weight: 500;
}

.uiSubContentImg {
  width: 100%;
  height: auto;
  text-align: center;
}

.uiSubContentImg img {
  width: 77%;
  height: auto;
}

.uiSubContentCard .row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  /* padding: 0px 40px; */
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.uiSubContentCardBody {
  padding: 4px 100px;
  /* padding-left: 0; */
  padding-right: 20px;
}

.uiSubContentCard:hover {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 560px) {
  .uiSubContentCardBody {
    padding-left: 20px;
    text-align: center;
  }

  .uiSubContentCard {
    margin-bottom: 1.5rem;
  }

  .subServiceContent {
    margin-top: 3rem;
  }

  .subServiceContentHeader h4 {
    width: 90%;
  }
}
</style>
