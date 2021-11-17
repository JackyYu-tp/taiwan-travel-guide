<template lang="pug">
.container
  Header
    Form(
      :type="type",
      :county="county",
      :keyword="keyword",
      :typeList="typeList",
      @type="handleInput",
      @county="handleInput",
      @keyword="handleInput",
      @search="handelSearch"
    )
  router-view
</template>

<script>
import { mapState } from "vuex"
import Header from "@/components/Header"
import Form from "@/components/Form"
import Icon from "@/components/Icon"
import "@/assets/svg/search.svg"
import "@/assets/svg/slogan.svg"
export default {
  name: "Activity",
  components: {
    Header,
    Form,
    Icon
  },
  data() {
    return {
      type: "ScenicSpot",
      county: "",
      keyword: ""
    }
  },
  computed: {
    ...mapState("activity", ["typeList"])
  },
  methods: {
    handleInput({ event, value }) {
      this[event] = value
    },
    handelSearch() {
      this.$router
        .push({
          name: "ActivitySearch",
          query: {
            type: this.type,
            county: this.county,
            keyword: this.keyword
          }
        })
        .catch((error) => {
          error
        })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
</style>
