<template lang="pug">
.no-data-wrapper
  Icon.icon(name="noData")
  p.message
    span.oops Oops！
    span.sorry 很抱歉，
    span.msg 找不到符合此搜尋相關的內容。
</template>

<script>
import SmallCard from "@/components/SmallCard"
import Icon from "@/components/Icon"
import "@/assets/svg/noData.svg"
export default {
  name: "NoDataList",
  components: {
    SmallCard,
    Icon
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    getImage(photo) {
      return require(`../assets/img/${photo}.jpg`)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.no-data-wrapper
  text-align: center
  .icon
    margin-bottom: 15.5px
    width: 53.5px
    height: 53.5px
  .message
    font-size: 14px
    line-height: 21px
    color: $grey-002
    .oops
      display: inline
      font-size: 18px
      font-weight: 500
      color: $secondary
    .sorry
      display: inline
    .msg
      display: block
+rwdMin(1280px)
  .no-data-wrapper
    text-align: left
    display: flex
    justify-content: center
    align-items: center
    .icon
      margin-right: 13px
      margin-bottom: 0
    .message
      font-size: 18px
      line-height: 26px
      color: $grey-002
      .oops
        display: block
        font-size: 20px
      .msg
        display: inline
</style>
