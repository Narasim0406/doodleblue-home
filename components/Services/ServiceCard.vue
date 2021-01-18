<template>
  <div class="w-100 h-100">
    <!-- v-scroll="{animationIn: 'mainCardScrollActive', animationOut:'mainCardScrollNotActive'}" -->
    <nuxt-link
      :to="{ name: 'services-service',params:{service:service.route.toLowerCase()} }"
      class="serviceSwiperCardLink link w-100 h-100"
    >
      <div class="serviceSwiperCard" v-lazy-container="{ selector: 'img' }">
        <img class="wow fade-in-bottom" :data-src="$getImgUrl(service.icon)" :alt="service.name_sub">
        <h3 class="wow fade-in-bottom" v-html="service.name">{{ service.name }}</h3>
        <ul>
          <li v-for="(subService, i2) in service.subServices" :key="i2">
            <nuxt-link
              class="link"
              :to="{name: 'services-service-subservice', params: {service:service.route.toLowerCase(),subservice: subService.route.toLowerCase()}}"
            >
              <span class="listStyle"></span>
              {{ subService.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['service']
}
</script>

<style scoped>
.servicesSwiperWrapper {
  text-align: center;
}

.servicesSwiperWrapper ul {
  /* display: none; */
  /* text-align: left; */
  opacity: 0;
  transition: all 0.5s;
}

.servicesSwiperWrapper span.listStyle {
  display: none;
}

.servicesSwiperWrapper h3 {
  font-size: 1.3rem;
  position: relative;
}

.servicesSwiperWrapper h3:after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0;
  right: 0;
  margin: auto;
  height: 2px;
  width: 0%;
  transition: all 0.5s;
  background: #006ada;
}

.serviceSwiperCardLink.link {
  position: relative;
  text-align: center;
  padding: 30px 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03);
  z-index: 4;
  background: #fff;
  /* margin-bottom: 1rem; */
  min-height: 375px;
  border-radius: 3px;
  overflow: hidden;
  /* box-shadow: 1px 5px 50px rgba(0,0,0,0.1); */
  display: block;
}

.serviceSwiperCardLink.link:hover {
  box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.107);
}

.serviceSwiperCardLink.link:hover h3:after {
  width: 25%;
}

.serviceSwiperCard {
  transform: translateY(22%);
  transition: all 0.5s;
}

.serviceSwiperCardLink.link:hover .serviceSwiperCard {
  transform: translateY(0);
}

.serviceSwiperCardLink.link li:hover span.listStyle {
  /* display: inline-block; */
}

.serviceSwiperCardLink:hover ul {
  opacity: 1;
}

@media (max-width: 575.98px) {
  .serviceSwiperCardLink.link {
    padding-top: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08) !important;
  }

  .mainCardScrollActive {
    box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.107);
  }

  .mainCardScrollActive.link h3:after {
    width: 25%;
  }

  .mainCardScrollActive.link .serviceSwiperCard {
    transform: translateY(0);
  }

  .mainCardScrollActive ul {
    opacity: 1;
  }
}
</style>
