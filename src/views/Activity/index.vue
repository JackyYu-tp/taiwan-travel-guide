<template lang="pug">
.hot-container
  SubForm(
    :type="type",
    :county="county",
    :keyword="keyword",
    @type="handleInput",
    @county="handleInput",
    @keyword="handleInput"
  )
  PopularCity
</template>

<script>
import PopularCity from "@/components/PopularCity.vue"
import Icon from "@/components/Icon"
import "@/assets/svg/search.svg"
export default {
  name: "PopularActivity",
  components: {
    SubForm: () => import("@/components/SubForm"),
    PopularCity,
    Icon
  },
  data() {
    return {
      type: "",
      county: "",
      keyword: ""
    }
  },
  methods: {
    handleInput({ event, value }) {
      this[event] = value
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.hot-container
  padding: 43px 16px 40px
  margin: 0 auto
  max-width: 1280px
+rwdMin(768px)
  .hot-container
    padding: 41px 65px 55px
</style>
