<template lang="pug">
.city-wrapper
  .title-wrapper
    Icon.icon(name="triTag")
    .title 熱門城市
  .item-wrapper
    .item(v-for="item in cityList")
      img.img(:src="getImage(item.photo)")
      .content-wrapper
        Icon.icon(name="locate")
        p.name {{ item.name }}
</template>

<script>
import Icon from "@/components/Icon"
import "@/assets/svg/triTag.svg"
import "@/assets/svg/locate.svg"
export default {
  name: "PopularCity",
  components: {
    Icon
  },
  data() {
    return {
      cityList: [
        {
          name: "台北市",
          value: "taipei",
          photo: "taipei"
        },
        {
          name: "台北市",
          value: "taipei",
          photo: "taipei"
        },
        {
          name: "台北市",
          value: "taipei",
          photo: "taipei"
        }
      ]
    }
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
.city-wrapper
  .title-wrapper
    display: flex
    align-items: center
    .icon
      width: 16px
      height: 16px
      margin-right: 7px
      margin-left: 10px
    .title
      font-size: 14px
  .item-wrapper
    margin-top: 12px
    height: 192px
    display: flex
    gap: 4px
    flex-direction: column
    flex-wrap: wrap
    align-content: start
    overflow-y: scroll
    .item
      width: 159px
      height: calc(50% - 4.5px)
      border-width: 5.5px 7px
      border-style: solid
      border-color: $white
      position: relative
      overflow: hidden
      box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2)
      cursor: pointer
      &:nth-child(3n+1)
        height: calc(100% - 5px)
        border-width: 11px 10px
      &:after
        content: ''
        width: 100%
        height: 100%
        position: absolute
        top: 0
        left: 0
        background-color: rgba($black, .3)
      .content-wrapper
        text-align: center
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
        z-index: 1
        .icon
          width: 16px
          height: 19px
        .name
          margin-top: 4px
          font-size: 14px
          color: $white
</style>
