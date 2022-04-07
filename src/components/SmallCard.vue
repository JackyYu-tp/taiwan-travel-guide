<template lang="pug">
.small-card
  .img
    img(v-lazy="item.Picture.PictureUrl1")
  .content-wrapper
    .name {{ item.name }}
    .locate
      Icon.icon(name="locate")
      .locate-name {{ item.Address || item.City }}
  .shadow.left
  .shadow.right
</template>

<script>
import Icon from "@/components/Icon"
import "@/assets/svg/locate.svg"
export default {
  name: "SmallCard",
  components: {
    Icon
  },
  props: {
    item: Object
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.small-card
  padding: 12px
  background-color: $white
  display: flex
  flex-direction: column
  position: relative
  .img
    width: 100%
    height: 96px
    img
      width: 100%
      height: 100%
  .content-wrapper
    margin-top: 10px
    display: flex
    flex-direction: column
    justify-content: space-between
    .name
      height: 42px
      font-size: 14px
      line-height: 21px
      display: -webkit-box
      -webkit-box-orient: vertical
      -webkit-line-clamp: 2
      overflow: hidden
    .locate
      display: flex
      align-items: center
      .icon
        flex-shrink: 0
        margin-right: 5px
        width: 11px
        height: 13px
        color: $primary
      .locate-name
        font-size: 12px
        line-height: 17px
        color: $third
        font-weight: 300
  .shadow
    width: 28%
    height: 37px
    position: absolute
    top: 93%
    opacity: 0.3
    filter: blur(8px)
    z-index: -1
    &.left
      left: 6px
      background: linear-gradient(-10deg, transparent 50%, $grey-001 50%)
    &.right
      right: 6px
      background: linear-gradient(10deg, transparent 50%, $grey-001 50%)
  +rwdMin(1280px)
    .img
      height: 137px
    .shadow
      height: 24px
      width: 40%
      top: 97%
      filter: blur(5px)
      &.left
        left: 8px
        background: linear-gradient(-15deg, transparent 50%, $grey-001 50%)
      &.right
        right: 8px
        background: linear-gradient(15deg, transparent 50%, $grey-001 50%)
</style>
