<template lang="pug">
.search-container
  SmallCardList.activity-list(:title="title", :list="activitySearchList")
</template>

<script>
import { mapActions, mapState } from "vuex"
import SmallCardList from "@/components/SmallCardList.vue"
export default {
  name: "Search",
  components: {
    SmallCardList
  },
  data() {
    return {}
  },
  computed: {
    ...mapState("activity", ["activitySearchList"]),
    title() {
      return "熱門餐飲"
    }
  },
  methods: {
    ...mapActions("activity", ["getActivityList"]),
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
