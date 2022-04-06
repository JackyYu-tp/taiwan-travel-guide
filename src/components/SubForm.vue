<template lang="pug">
.form
  .form-wrapper
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
export default {
  name: "SubForm",
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
.form
  display: none
+rwdMin(768px)
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
          cursor: pointer
+rwdMin(1280px)
  .form
    display: none
</style>
