<template lang="pug">
.large-card(@click="handleModalStatus(true)")
  .img
    img(v-lazy="item.Picture.PictureUrl1")
  .content-wrapper
    .name {{ item.name }}
    .description {{ item.Description }}
    .locate
      Icon.icon(name="locate")
      .locate-name {{ item.Location }}
  .shadow.left
  .shadow.right
</template>

<script>
import Icon from "@/components/Icon"
import "@/assets/svg/locate.svg"
import { mapMutations } from "vuex"
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
  methods: {
    ...mapMutations(["setModalStatus"]),
    handleModalStatus(status) {
      this.setModalStatus({ status, name: "CardDetail", data: this.item })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.large-card
  padding: 12px
  min-height: 120px
  background-color: $white
  cursor: pointer
  display: flex
  justify-content: center
  position: relative
  .img
    margin-right: 17px
    flex-grow: 0
    flex-shrink: 0
    width: 92px
    height: 100%
    img
      height: 100%
      width: 100%
  .content-wrapper
    flex-grow: 1
    flex-shrink: 1
    display: flex
    flex-direction: column
    justify-content: space-between
    .name
      font-size: 14px
      line-height: 21px
    .description
      display: none
      word-break: break-all
    .locate
      display: flex
      align-items: center
      .icon
        flex-shrink: 0
        margin-right: 8px
        width: 16px
        height: 19px
        color: $primary
      .locate-name
        font-size: 14px
        line-height: 21px
  .shadow
    width: 28%
    height: 37px
    position: absolute
    top: 90%
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
      width: 187px
    .content-wrapper
      .name
        font-size: 1rem
        line-height: 23px
      .description
        margin: 14px 0
        display: block
        color: $grey-002
        line-height: 21px
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 5
        overflow: hidden
    .shadow
      top: 94%
      filter: blur(5px)
      &.left
        left: 9px
        background: linear-gradient(-9deg, transparent 50%, $grey-001 50%)
      &.right
        right: 9px
        background: linear-gradient(9deg, transparent 50%, $grey-001 50%)
</style>
