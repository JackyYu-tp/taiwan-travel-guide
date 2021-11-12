<template lang="pug">
.list-wrapper
  .title-wrapper
    Icon.icon(name="recTag")
    .title {{ title }}
  .item-wrapper
    SmallCard.item(v-for="item in list", :item="item")
</template>

<script>
import SmallCard from "@/components/SmallCard"
import Icon from "@/components/Icon"
import "@/assets/svg/recTag.svg"
import "@/assets/svg/locate.svg"
export default {
  name: "SmallCardList",
  components: {
    SmallCard,
    Icon
  },
  props: {
    title: String,
    list: Array
  },
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
.list-wrapper
  .title-wrapper
    display: flex
    align-items: center
    .icon
      width: 20px
      height: 20px
      margin-right: 7px
      margin-left: 10px
    .title
      font-size: 14px
      line-height: 21px
  .item-wrapper
    padding: 0 10px
    display: flex
    gap: 4px
    flex-wrap: wrap
    .item
      margin-top: 15px
      width: calc(50% - 2px)
  +rwdMin(768px)
    .title-wrapper
      .icon
        margin-left: 0
    .item-wrapper
      gap: 12px
      .item
        margin-top: 14px
        width: calc(25% - 9px)
  +rwdMin(1280px)
    .title-wrapper
      .icon
        margin-right: 13px
      .title
        font-size: 1.25rem
        line-height: 28px
    .item-wrapper
      padding: 0
      gap: 9px
      .item
        margin-top: 26px
        width: calc(20% - 4.5px)
</style>
