<template lang="pug">
.large-card
  .img(:style="`background-image: url(${item.Picture.PictureUrl1})`")
  .content-wrapper
    .name {{ item.Name }}
    .locate
      Icon.icon(name="locate")
      .locate-name {{ item.Location }}
  .shadow.left
  .shadow.right
</template>

<script>
import Icon from "@/components/Icon"
import "@/assets/svg/locate.svg"
export default {
  name: "LargeCard",
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
.large-card
  padding: 12px
  min-height: 120px
  background-color: $white
  display: flex
  position: relative
  .img
    margin-right: 17px
    flex-grow: 1
    width: 30%
    height: 100%
    background-size: cover
  .content-wrapper
    flex-grow: 1
    display: flex
    flex-direction: column
    justify-content: space-between
    .name
      font-size: 14px
    .locate
      display: flex
      align-items: center
      .icon
        margin-right: 8px
        width: 16px
        height: 19px
        color: $primary
      .locate-name
        font-size: 14px
  .shadow
    width: 28%
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
</style>
