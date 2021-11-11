<template lang="pug">
.form
  .form-wrapper
    Icon.slogan(name="slogan")
    .input-bar
      .input
        input(
          type="text",
          :value="keyword",
          placeholder="搜尋關鍵字",
          @input="handleEmit('keyword', $event.target.value)"
        )
    .select-bar
      .select
        select(
          :value="type",
          @change="handleEmit('type', $event.target.value)"
        )
          option(value="", disabled) 類別
          option(value="view") 景點
          option(value="activity") 活動
      .select
        select(
          :value="county",
          @change="handleEmit('county', $event.target.value)"
        )
          option(value="", disabled) 不分縣市
          option(value="view") 景點
          option(value="view") 美食
      .search
        Icon(name="search")
</template>

<script>
import Icon from "@/components/Icon"
import "@/assets/svg/search.svg"
import "@/assets/svg/slogan.svg"
export default {
  name: "Form",
  components: {
    Icon
  },
  props: {
    type: String,
    county: String,
    keyword: String
  },
  data() {
    return {}
  },
  methods: {
    handleEmit(event, value) {
      this.$emit(event, { event, value })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
+form("../assets/img/activity.jpg")
</style>
