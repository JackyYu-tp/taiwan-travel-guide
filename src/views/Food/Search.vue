<template lang="pug">
.search-container
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
  component.activity-list(
    v-if="!isLoading && filteredList.length > 0",
    :is="nowComponent",
    :title="nowTitle",
    :list="filteredList"
  )
  NoDataList(v-if="isShowNoData && !isLoading && filteredList.length === 0")
  Pagination.pagination(
    v-if="totalPage > 0",
    :totalPage="totalPage",
    :nowPage="page",
    @setPage="setPage"
  )
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  name: "FoodSearch",
  components: {
    SmallCardList: () => import("@/components/SmallCardList"),
    LargeCardList: () => import("@/components/LargeCardList"),
    SubForm: () => import("@/components/SubForm"),
    Pagination: () => import("@/components/Pagination"),
    NoDataList: () => import("@/components/NoDataList")
  },
  data() {
    return {
      page: 1,
      count: 20,
      nowComponent: "SmallCardList",
      nowTitle: "",
      isShowNoData: false
    }
  },
  computed: {
    ...mapState("food", ["searchList", "typeList", "search"]),
    ...mapState(["cityList", "isLoading"]),
    filteredList() {
      return this.searchList.slice(
        (this.page - 1) * this.count,
        this.page * this.count
      )
    },
    totalPage() {
      let last = 0
      if (this.searchList % this.count > 0) {
        last = 1
      }
      return Math.floor(this.searchList.length / this.count) + last
    }
  },
  mounted() {},
  methods: {
    ...mapMutations("food", ["setSearchParams"]),
    handleInput({ event, value }) {
      this.setSearchParams({ event, value })
    },
    handleSearch() {
      this.$emit("search")
    },
    setPage(page) {
      this.page = page
      window.scrollTo({
        behavior: "smooth",
        top: 0
      })
    },
    handleSetSearchInfo(type) {
      this.setNowListComponentType(type)
      this.setTitle()
      this.isShowNoData = true
    },
    setNowListComponentType(type) {
      this.nowComponent = type
    },
    setTitle() {
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
      this.nowTitle = keyword + countyName + typeName
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
  .pagination
    margin-top: 50px
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
