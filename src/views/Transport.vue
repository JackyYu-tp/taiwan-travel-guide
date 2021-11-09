<template lang="pug">
Header
  .form
    .form-wrapper
      Icon.slogan(name="slogan")
      .input-bar
        .input
          input(type="text", v-model="keyword", placeholder="搜尋關鍵字")
      .select-bar
        .select
          select(v-model="type")
            option(value="", disabled) 類別
            option(value="view") 景點
            option(value="food") 美食
        .select
          select(v-model="county")
            option(value="", disabled) 不分縣市
            option(value="view") 景點
            option(value="view") 美食
        .search
          Icon(name="search")
</template>

<script>
import Header from "@/components/Header"
import Icon from "@/components/Icon"
import "@/assets/svg/search.svg"
import "@/assets/svg/slogan.svg"
export default {
  name: "Transport",
  components: {
    Header,
    Icon
  },
  data() {
    return {
      type: "",
      county: "",
      keyword: ""
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
+form
</style>
