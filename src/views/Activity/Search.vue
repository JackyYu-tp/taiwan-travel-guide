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
    ...mapState("activity", ["searchList", "typeList", "search"]),
    ...mapState(["cityList"]),
    title() {
      let keyword = ""
      if (this.search.keyword) {
        keyword = `含有關鍵字『 ${this.search.keyword} 』的`
      }
      let countyName = "不分縣市"
      if (this.search.county) {
        countyName = `${
          this.cityList.find((item) => item.value === this.search.county)?.name
        }`
      }

      let typeName = this.typeList.find(
        (item) => item.value === this.search.type
      )?.name
      return keyword + countyName + typeName
    },
    nowCom() {
      switch (this.search.type) {
        case "ScenicSpot":
          return "SmallCardList"
        case "Activity":
          return "LargeCardList"
        default:
          return "SmallCardList"
      }
    }
  },
  mounted() {},
  methods: {
    ...mapActions("food", ["getRestaurantList"])
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
