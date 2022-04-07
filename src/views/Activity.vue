<template lang="pug">
.container
  Header
    Form(
      :type="search.type",
      :county="search.county",
      :keyword="search.keyword",
      :typeList="typeList",
      @type="handleInput",
      @county="handleInput",
      @keyword="handleInput",
      @search="handleSearch"
    )
  router-view(@search="handleSearch")
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex"
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
    return {}
  },
  computed: {
    ...mapState("activity", ["typeList", "search"])
  },
  methods: {
    ...mapActions("activity", [
      "getActivityList",
      "getActivityListByCounty",
      "getScenicSpotList",
      "getScenicSpotListByCounty"
    ]),
    ...mapMutations("activity", ["setSearchParams"]),
    handleInput({ event, value }) {
      this.setSearchParams({ event, value })
    },
    handleSearch() {
      if (this.$route.name !== "ActivitySearch") {
        this.$router
          .push({
            name: "ActivitySearch"
          })
          .catch((error) => {
            console.log(error)
          })
      }
      switch (this.search.type) {
        case "ScenicSpot":
          if (this.search.county) {
            this.getScenicSpotListByCounty({
              county: this.search.county,
              keyword: this.search.keyword,
              search: true
            })
          } else {
            this.getScenicSpotList({
              keyword: this.search.keyword,
              search: true
            })
          }
          break
        case "Activity":
          if (this.search.county) {
            this.getActivityListByCounty({
              county: this.search.county,
              keyword: this.search.keyword,
              search: true
            })
          } else {
            this.getActivityList({
              keyword: this.search.keyword,
              search: true
            })
          }
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
</style>
