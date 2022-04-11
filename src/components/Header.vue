<template lang="pug">
.nav
  .header-wrapper
    .logo
      h1 台灣旅遊導覽
      icon(name="logo")
    nav.nav-wrapper
      h2 台灣旅遊導覽列
      .nav-item
        Icon.icon(name="viewTag")
        router-link.activity(
          to="/activity/popular",
          :class="{ active: page === 'ActivityIndex' }"
        ) 景點活動
      .nav-item
        Icon.icon(name="foodTag")
        router-link.food(
          to="/food/popular",
          :class="{ active: page === 'FoodIndex' }"
        ) 美食住宿
      //- .nav-item
      //-   Icon.icon(name="transportTag")
      //-   router-link.transport(
      //-     to="/transport",
      //-     :class="{ active: page === 'Transport' }"
      //-   ) 景點交通
  slot
  .shadow.left
  .shadow.right
</template>

<script>
import Icon from "@/components/Icon"
import "@/assets/svg/logo.svg"
import "@/assets/svg/viewTag.svg"
import "@/assets/svg/foodTag.svg"
import "@/assets/svg/transportTag.svg"
export default {
  name: "Header",
  components: {
    Icon
  },
  data() {
    return {}
  },
  computed: {
    page() {
      return this.$route.name
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.nav
  padding: 15px 18px 19px 16px
  position: relative
  background-color: $white
  .header-wrapper
    position: relative
    h1
      position: absolute
      top: 0
      left: 0
      width: 1px
      height: 1px
      overflow: hidden
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
      position: relative
      h2
        position: absolute
        top: 0
        left: 0
        width: 1px
        height: 1px
        overflow: hidden
      .nav-item
        .icon
          display: none
        .active
          color: $primary
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
    .header-wrapper
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
    .shadow
      width: 50%
      height: 52px
      top: 70%
      filter: blur(6px)
      &.left
        background: linear-gradient(-5deg, transparent 50%, $grey-001 50%)
      &.right
        background: linear-gradient(5deg, transparent 50%, $grey-001 50%)
+rwdMin(1280px)
  .nav
    .shadow
      top: 96%
</style>
