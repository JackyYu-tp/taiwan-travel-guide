<template lang="pug">
.hot-container
  PopularCity
</template>

<script>
import PopularCity from "@/components/PopularCity.vue"
export default {
  name: "PopularActivity",
  components: {
    PopularCity
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.hot-container
  padding: 43px 16px 40px
  margin: 0 auto
  max-width: 1280px
</style>
