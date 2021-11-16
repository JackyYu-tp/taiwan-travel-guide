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
          option(
            v-for="item in typeList",
            :value="item.value",
            :id="item.value"
          ) {{ item.name }}
      .select
        select(
          :value="county",
          @change="handleEmit('county', $event.target.value)"
        )
          option(value="", disabled) 不分縣市
          option(
            v-for="item in cityList",
            :value="item.value",
            :id="item.value"
          ) {{ item.name }}
      .search
        Icon(name="search", @click="handleSearch")
</template>

<script>
import { mapState } from "vuex"
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
    keyword: String,
    typeList: Array
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(["cityList"])
  },
  methods: {
    handleEmit(event, value) {
      this.$emit(event, { event, value })
    },
    handleSearch() {
      this.$emit("search")
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
+form("../assets/img/activity.jpg")
</style>
