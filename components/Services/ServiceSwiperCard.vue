<template>
  <div class="w-100 h-100">
    <nuxt-link
      :to="{name: 'services-service',params:{service:service.route.toLowerCase()}}"
      class="serviceSwiperCardLink link w-100 h-100"
      tag="div"
    >
      <div class="serviceSwiperCard wow fadeInRight" v-lazy-container="{ selector: 'img' }">
        <img :data-src="$getImgUrl(service.icon)" alt="service"/>
        <h3 v-html="service.name"></h3>
        <ul>
          <li v-for="(subService, i2) in service.subServices" :key="i2">
            <nuxt-link
              class="link"
              :to="{ name: 'services-service-subservice', params: {service:service.route.toLowerCase(),subservice: subService.route.toLowerCase()} }"
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
@media (max-width: 575.98px) {
  .serviceSwiperCardLink.link {
    padding-top: 20px;
  }
}
</style>
