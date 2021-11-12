<template lang="pug">
.hot-container
  SubForm(
    :type="type",
    :county="county",
    :keyword="keyword",
    @type="handleInput",
    @county="handleInput",
    @keyword="handleInput"
  )
  PopularCity
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
      type: "",
      county: "",
      keyword: ""
    }
  },
  computed: {
    ...mapState("activity", ["activityList"]),
    ...mapState("food", ["restaurantList"])
  },
  mounted() {
    this.getList(4)
    this.getRestaurantList(10)
  },
  methods: {
    ...mapActions("activity", ["getList"]),
    ...mapActions("food", ["getRestaurantList"]),
    handleInput({ event, value }) {
      this[event] = value
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
