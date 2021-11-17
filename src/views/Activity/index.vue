<template lang="pug">
.hot-container
  SubForm(
    :type="type",
    :county="county",
    :keyword="keyword",
    :typeList="typeList",
    @type="handleInput",
    @county="handleInput",
    @keyword="handleInput"
  )
  PopularCity(@search="handleSearch")
  LargeCardList.activity-list(title="熱門活動", :list="activityList")
  SmallCardList.activity-list(title="熱門餐飲", :list="restaurantList")
</template>

<script>
import { mapActions, mapState } from "vuex"
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
    return {
      type: "ScenicSpot",
      county: "",
      keyword: ""
    }
  },
  computed: {
    ...mapState("activity", ["activityList", "typeList"]),
    ...mapState("food", ["restaurantList"])
  },
  mounted() {
    this.getActivityList({ count: 4 })
    this.getRestaurantList({ count: 10 })
  },
  methods: {
    ...mapActions("activity", ["getActivityList"]),
    ...mapActions("food", ["getRestaurantList"]),
    handleInput({ event, value }) {
      this[event] = value
    },
    handleSearch(name) {
      this.$router
        .push({
          name: "ActivitySearch",
          query: {
            type: this.type,
            county: name,
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
