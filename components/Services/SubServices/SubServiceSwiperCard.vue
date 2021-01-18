<template>
  <div class="w-100 h-100">
    <nuxt-link
      target="_blank"
      :to="{name: 'services-service-subservice', params: {service:service.route.toLowerCase(),subservice: service.routeParam.toLowerCase()}}"
      class="link w-100 h-100"
    >
      <div class="subServiceCard" :class="service.code">
        <div v-lazy-container="{ selector: 'img' }">
          <div class="subServiceIcon animated animated-fast fade-in-bottom">
            <img :data-src="$getImgUrl(service.icon)" :alt="service.name">
          </div>
          <div class="subServiceTitle">
            <h3>{{ service.name }}</h3>
          </div>
          <div class="knowMore animated animated-fast fade-in-bottom">
            <Button
              classs="wow fade-in-bottom"
              data-wow-delay="0.1s"
              buttonText="Know More"
              color="#fff"
              :small="true"
              style="padding-left: 5rem;"
            />
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  props: ['service'],

  components: {
    Button
  }
}
</script>

<style scoped>
.subServiceCard {
  width: 350px;
  height: 230px;
  background: #fff;
  /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); */
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  transition: all 0.5s;
  border-radius: 3px;
  overflow: hidden;
}

.subServiceCard:hover {
  /* box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15); */
  /* box-shadow: 1px 10px 50px rgba(0,0,0,0.3); */
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.46);
}

.subServiceIcon {
  height: 50px;
  width: auto;
  margin-bottom: 1rem;
  transition: all 0.5s;
  opacity: 1;
  overflow: hidden;
}

.subServiceIcon img {
  height: 100%;
  width: auto;
  opacity: 1;
  /* transition: all 0.5s */
}
.subServiceTitle h3 {
  font-size: 1.5rem;
  margin: 1rem 0;
  color: #000;
  /* transition: all 0.5s; */
}

.knowMore {
  display: none;
  /* opacity: 0; */
  /* margin-top: 50px; */
}

.subServiceCard:hover .subServiceIcon img {
  /* display: none; */
  /* margin-top: -50px; */
  opacity: 0;
  /* transform: scale(0.2); */
}
.subServiceCard:hover .subServiceIcon {
  /* display: none; */
  margin-top: -50px;
  /* opacity: 0; */
}

.subServiceCard:hover h3 {
  /* margin-top: -50px; */
  color: #fff;
}

.subServiceCard:hover .knowMore {
  display: block;
}

.custom_btn_front {
  font-size: 1rem !important;
}

.subServiceCard.DT:hover {
  background: linear-gradient(45deg, #b02d6e, #f6704e);
}

.subServiceCard.UIUX:hover {
  background: linear-gradient(45deg, rgb(36, 10, 68) 0%, rgb(11, 53, 115) 100%);
}

.subServiceCard.ME:hover {
  background: linear-gradient(
    45deg,
    rgb(54, 205, 217) 0%,
    rgb(147, 232, 71) 100%
  );
}
.subServiceCard.WT:hover {
  background: linear-gradient(
    45deg,
    rgb(224, 182, 76) 0%,
    rgb(218, 112, 55) 100%
  );
}
.subServiceCard.IN:hover {
  background: linear-gradient(
    45deg,
    rgb(139, 77, 244) 0%,
    rgb(29, 135, 171) 100%
  );
}
.subServiceCard.EP:hover {
  background: linear-gradient(
    45deg,
    rgb(53, 198, 204) 0%,
    rgb(59, 71, 217) 100%
  );
}
</style>
