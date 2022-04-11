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
  router-view(ref="com", @search="handleSearch")
</template>

<script>
import Header from "@/components/Header"
import Form from "@/components/Form"
import Icon from "@/components/Icon"
import "@/assets/svg/search.svg"
import "@/assets/svg/slogan.svg"
import { mapActions, mapMutations, mapState } from "vuex"
export default {
  name: "Food",
  components: {
    Header,
    Form,
    Icon
  },
  data() {
    return {}
  },
  computed: {
    ...mapState("food", ["typeList", "search"])
  },
  methods: {
    ...mapActions("food", [
      "getRestaurantList",
      "getRestaurantListByCounty",
      "getHotelList",
      "getHotelListByCounty"
    ]),
    ...mapMutations(["setLoading"]),
    ...mapMutations("food", ["setSearchParams"]),
    handleInput({ event, value }) {
      this.setSearchParams({ event, value })
    },
    handleSearch() {
      this.setLoading(true)
      if (this.$route.name !== "FoodSearch") {
        this.$router
          .push({
            name: "FoodSearch"
          })
          .catch((error) => {
            console.log(error)
          })
      }
      switch (this.search.type) {
        case "Restaurant":
          if (this.search.county) {
            this.getRestaurantListByCounty({
              county: this.search.county,
              keyword: this.search.keyword,
              search: true
            })
              .then(() => {
                this.$refs.com.handleSetSearchInfo("SmallCardList")
                this.$refs.com.setPage(1)
                this.setLoading(false)
              })
              .catch((error) => {
                console.log(error)
                this.setLoading(false)
              })
          } else {
            this.getRestaurantList({
              keyword: this.search.keyword,
              search: true
            })
              .then(() => {
                this.$refs.com.handleSetSearchInfo("SmallCardList")
                this.$refs.com.setPage(1)
                this.setLoading(false)
              })
              .catch((error) => {
                console.log(error)
                this.setLoading(false)
              })
          }
          break
        case "Hotel":
          if (this.search.county) {
            this.getHotelListByCounty({
              county: this.search.county,
              keyword: this.search.keyword,
              search: true
            })
              .then(() => {
                this.$refs.com.handleSetSearchInfo("SmallCardList")
                this.$refs.com.setPage(1)
                this.setLoading(false)
              })
              .catch((error) => {
                console.log(error)
                this.setLoading(false)
              })
          } else {
            this.getHotelList({
              keyword: this.search.keyword,
              search: true
            })
              .then(() => {
                this.$refs.com.handleSetSearchInfo("SmallCardList")
                this.$refs.com.setPage(1)
                this.setLoading(false)
              })
              .catch((error) => {
                console.log(error)
                this.setLoading(false)
              })
          }
          break
        default:
          this.setLoading(false)
          break
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
+form("../assets/img/food.jpg")
</style>
