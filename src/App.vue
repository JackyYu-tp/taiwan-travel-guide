<template lang="pug">
.app
  .nav
    .logo
      icon(name="logo")
    .nav-wrapper
      router-link(
        to="/activity",
        :class="{ active: page === undefined || page === 'activity' }"
      ) 景點活動
      router-link(to="/food", :class="{ active: page === 'food' }") 美食住宿
      router-link(to="/transport", :class="{ active: page === 'transport' }") 景點交通
    .form
      .select
        select(v-model="type")
          option(value="", disabled) 類別
          option(value="view") 景點
          option(value="food") 美食
      .select
        select(v-model="county")
          option(value="", disabled) 不分縣市
          option(value="view") 景點
          option(value="view") 美食
      Icon.search(name="location")
    .shadow.left
    .shadow.right
  router-view
</template>

<script>
import Icon from "@/components/Icon"
import "@/assets/svg/logo.svg"
import "@/assets/svg/location.svg"
export default {
  components: {
    Icon
  },
  data() {
    return {
      type: "",
      county: ""
    }
  },
  computed: {
    page() {
      return this.$route.params.type
    }
  }
}
</script>

<style lang="sass">
@import "@/assets/sass/_reset.sass"
.app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.app
  .nav
    padding: 15px 18px 19px 16px
    position: relative
    background-color: #fff
    .logo
      margin: 0 auto
      width: 90px
      height: 52px
    .nav-wrapper
      padding: 9.5px 31px
      margin-top: 13px
      border-radius: 6px
      box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2)
      display: flex
      justify-content: space-between
      align-items: center
      font-size: 14px
      line-height: 21px
      .active
        color: $primary
    .form
      margin-top: 12px
      display: flex
      gap: 8px
      .select
        height: 40px
        flex-grow: 1
      .search
        width: 40px
        height: 40px
    .shadow
      width: 47.5%
      height: 37px
      position: absolute
      top: 90%
      opacity: 0.3
      filter: blur(8px)
      z-index: -1
      &.left
        left: 16px
        background: linear-gradient(-10deg, transparent 50%, #0D0B0C 50%)
      &.right
        right: 16px
        background: linear-gradient(10deg, transparent 50%, #0D0B0C 50%)
</style>
