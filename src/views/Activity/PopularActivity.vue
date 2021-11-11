<template lang="pug">
.hot-container
  .form
    .form-wrapper
      .input-bar
        .input
          input(type="text", v-model="keyword", placeholder="搜尋關鍵字")
      .select-bar
        .select
          select(v-model="type")
            option(value="", disabled) 類別
            option(value="view") 景點
            option(value="activity") 活動
        .select
          select(v-model="county")
            option(value="", disabled) 不分縣市
            option(value="view") 景點
            option(value="view") 美食
        .search
          Icon(name="search")
  PopularCity
</template>

<script>
import PopularCity from "@/components/PopularCity.vue"
import Icon from "@/components/Icon"
import "@/assets/svg/search.svg"
export default {
  name: "PopularActivity",
  components: {
    Form: () => import("@/components/Form"),
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
  methods: {}
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.hot-container
  padding: 43px 16px 40px
  margin: 0 auto
  max-width: 1280px
  .form
    display: none
+rwdMin(768px)
  .hot-container
    padding: 41px 65px 55px
    .form
      display: block
      max-width: 430px
      margin: 0 auto
      margin-bottom: 38px
      .form-wrapper
        .select-bar
          margin-top: 9px
          display: flex
          gap: 8px
          .select
            height: 40px
            flex-grow: 1
          .search
            width: 40px
            height: 40px
            background-color: $primary
            border-radius: 6px
            box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2)
+rwdMin(1280px)
  .hot-container
    .form
      display: none
</style>
