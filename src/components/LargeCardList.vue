<template lang="pug">
.list-wrapper
  .title-wrapper
    Icon.icon(name="triTag")
    .title {{ title }}
  .item-wrapper
    LargeCard.item(v-for="item in list", :item="item", :id="item.id")
</template>

<script>
import LargeCard from "@/components/LargeCard"
import Icon from "@/components/Icon"
import "@/assets/svg/triTag.svg"
import "@/assets/svg/locate.svg"
export default {
  name: "LargeCardList",
  components: {
    LargeCard,
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
    padding: 0 15px
    margin-top: 18px
    display: flex
    gap: 15px
    flex-wrap: wrap
    .item
      width: 100%
  +rwdMin(768px)
    .title-wrapper
      .icon
        width: 20px
        margin-left: 0
    .item-wrapper
      padding: 0 12px
      gap: 17px
      .item
        width: calc(50% - 8.5px)
  +rwdMin(1280px)
    .title-wrapper
      .icon
        margin-right: 14px
      .title
        font-size: 1.25rem
        line-height: 28px
    .item-wrapper
      padding: 0
      gap: 30px
      .item
        width: calc(50% - 15px)
        height: 228px
</style>
