<template>
  <div v-lazy-container="{ selector: 'img' }">
    <img class="img-fluid h-100" :class="{'w-100':w_100}" :data-src="require(`@/assets/images/${src}`)" :alt="alt" />
    <div class="subtitle mt-2" v-if="subTitle">
      <b>{{subTitle}}</b>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    subTitle: {
      type: String
    },
    w_100:{
      type:Boolean,
      default: false
    },
    alt: ""
  }
}
</script>

<style>
.subtitle{
  text-align: center;
  font-size: 0.8rem;
  color: gray;
}
</style>
