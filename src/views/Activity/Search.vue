<template lang="pug">
.search-container
  component.activity-list(:is="nowCom", :title="title", :list="searchList")
</template>

<script>
import { mapActions, mapState } from "vuex"
import SmallCardList from "@/components/SmallCardList.vue"
import LargeCardList from "@/components/LargeCardList.vue"
export default {
  name: "Search",
  components: {
    SmallCardList,
    LargeCardList
  },
  data() {
    return {}
  },
  computed: {
    ...mapState("activity", ["searchList", "typeList"]),
    ...mapState(["cityList"]),
    title() {
      let keyword = ""
      if (this.keyword) {
        keyword = `含有關鍵字『 ${this.keyword} 』的`
      }
      let countyName = "不分縣市"
      if (this.county) {
        countyName = `${
          this.cityList.find((item) => item.value === this.county)?.name
        }`
      }

      let typeName = this.typeList.find(
        (item) => item.value === this.type
      )?.name
      return keyword + countyName + typeName
    },
    type() {
      return this.$route.query.type
    },
    county() {
      return this.$route.query.county
    },
    keyword() {
      return this.$route.query.keyword
    },
    nowCom() {
      switch (this.type) {
        case "ScenicSpot":
          return "SmallCardList"
        case "Activity":
          return "LargeCardList"
        default:
          return "SmallCardList"
      }
    }
  },
  mounted() {
    this.handelSearch()
  },
  updated() {
    this.handelSearch()
  },
  methods: {
    ...mapActions("activity", [
      "getActivityList",
      "getActivityListByCounty",
      "getScenicSpotList",
      "getScenicSpotListByCounty"
    ]),
    ...mapActions("food", ["getRestaurantList"]),
    handelSearch() {
      switch (this.type) {
        case "ScenicSpot":
          if (this.county) {
            this.getScenicSpotListByCounty({
              county: this.county,
              keyword: this.keyword,
              search: true
            })
          } else {
            this.getScenicSpotList({
              keyword: this.keyword,
              search: true
            })
          }
          break
        case "Activity":
          if (this.county) {
            this.getActivityListByCounty({
              county: this.county,
              keyword: this.keyword,
              search: true
            })
          } else {
            this.getActivityList({
              keyword: this.keyword,
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
.search-container
  padding: 43px 16px 40px
  margin: 0 auto
  max-width: 1280px
  .activity-list
    margin-top: 40px
+rwdMin(768px)
  .search-container
    padding: 41px 65px 55px
    .activity-list
      margin-top: 46px
+rwdMin(1280px)
  .search-container
    padding: 90px 109px 85px
    .activity-list
      margin-top: 46px
</style>
