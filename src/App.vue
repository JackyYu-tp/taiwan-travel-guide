<template lang="pug">
.app
  .nav
    .logo
      icon(name="logo")
    .nav-wrapper
      .nav-item
        Icon.icon(name="viewTag")
        router-link.activity(
          to="/activity",
          :class="{ active: page === undefined || page === 'activity' }"
        ) 景點活動
      .nav-item
        Icon.icon(name="foodTag")
        router-link.food(to="/food", :class="{ active: page === 'food' }") 美食住宿
      .nav-item
        Icon.icon(name="transportTag")
        router-link.transport(
          to="/transport",
          :class="{ active: page === 'transport' }"
        ) 景點交通
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
import "@/assets/svg/viewTag.svg"
import "@/assets/svg/foodTag.svg"
import "@/assets/svg/transportTag.svg"
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
    background-color: $white
    .logo
      margin: 0 auto
      width: 90px
      height: 52px
    .nav-wrapper
      padding: 9.5px 0
      margin-top: 13px
      border-radius: 6px
      box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2)
      display: flex
      justify-content: space-evenly
      align-items: center
      font-size: 14px
      line-height: 21px
      .nav-item
        .icon
          display: none
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
        background: linear-gradient(-10deg, transparent 50%, $grey-001 50%)
      &.right
        right: 16px
        background: linear-gradient(10deg, transparent 50%, $grey-001 50%)
  +rwdMin(768px)
    .nav
      display: flex
      justify-content: space-between
      .logo
        margin: 0
        width: 86px
        height: 50px
      .nav-wrapper
        box-shadow: none
        .nav-item
          display: flex
          align-items: flex-end
          text-decoration: underline
          &:not(:last-child)
            margin-right: 27px
          .icon
            margin-right: 8px
            display: inline-block
            width: 34px
            height: 34px
          .activity
            color: $primary
          .food
            color: $secondary
          .transport
            color: $third
      .form
        display: none
      .shadow
        width: 50%
        height: 52px
        top: 70%
        filter: blur(6px)
        &.left
          background: linear-gradient(-5deg, transparent 50%, $grey-001 50%)
        &.right
          background: linear-gradient(5deg, transparent 50%, $grey-001 50%)
</style>
