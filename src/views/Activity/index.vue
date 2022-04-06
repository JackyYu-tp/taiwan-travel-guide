<template lang="pug">
.hot-container
  SubForm(
    :type="search.type",
    :county="search.county",
    :keyword="search.keyword",
    :typeList="typeList",
    @type="handleInput",
    @county="handleInput",
    @keyword="handleInput",
    @search="handleSearch"
  )
  PopularCity(@search="handlePopularCitySearch")
  LargeCardList.activity-list(title="熱門活動", :list="activityList")
  SmallCardList.activity-list(title="熱門餐飲", :list="restaurantList")
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex"
import PopularCity from "@/components/PopularCity.vue"
import LargeCardList from "@/components/LargeCardList.vue"
import SmallCardList from "@/components/SmallCardList.vue"
export default {
  name: "PopularActivity",
  components: {
    SubForm: () => import("@/components/SubForm"),
    PopularCity,
    LargeCardList,
    SmallCardList
  },
  data() {
    return {}
  },
  computed: {
    ...mapState("activity", ["activityList", "typeList", "search"]),
    ...mapState("food", ["restaurantList"])
  },
  mounted() {
    this.getActivityList({ count: 4 })
    this.getRestaurantList({ count: 10 })
  },
  methods: {
    ...mapActions("activity", ["getActivityList"]),
    ...mapActions("food", ["getRestaurantList"]),
    ...mapMutations("activity", ["setSearchParams"]),
    handleInput({ event, value }) {
      this.setSearchParams({ event, value })
    },
    handlePopularCitySearch(name) {
      this.handleInput({ event: "county", value: name })
      this.handleSearch()
    },
    handleSearch() {
      this.$emit("search")
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.hot-container
  padding: 43px 16px 40px
  margin: 0 auto
  max-width: 1280px
  .activity-list
    margin-top: 40px
+rwdMin(768px)
  .hot-container
    padding: 41px 65px 55px
    .activity-list
      margin-top: 46px
+rwdMin(1280px)
  .hot-container
    padding: 90px 109px 85px
    .activity-list
      margin-top: 46px
</style>
