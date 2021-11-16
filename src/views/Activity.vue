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
import { mapActions } from "vuex"
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
      keyword: "",
      typeList: [
        { name: "景點", value: "ScenicSpot" },
        { name: "活動", value: "Activity" }
      ]
    }
  },
  methods: {
    ...mapActions("activity", ["getActivityList", "getActivityListByCounty"]),
    ...mapActions("food", ["getRestaurantList"]),
    handleInput({ event, value }) {
      this[event] = value
    },
    handelSearch() {
      switch (this.type) {
        case "ScenicSpot":
          break
        case "Activity":
          if (this.county) {
            this.getActivityListByCounty({
              county: this.county,
              keyword: this.keyword,
              count: 20,
              search: true
            })
          } else {
            this.getActivityList({
              keyword: this.keyword,
              count: 20,
              search: true
            })
          }
          break
        default:
          break
      }
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
