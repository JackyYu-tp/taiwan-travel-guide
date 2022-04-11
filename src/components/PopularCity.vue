<template lang="pug">
.city-wrapper
  .title-wrapper
    Icon.icon(name="triTag")
    h2.title 熱門城市
  .item-wrapper
    .item(v-for="item in cityList", @click="handleSearch(item.value)")
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
          value: "Taipei",
          photo: "taipei"
        },
        {
          name: "新北市",
          value: "NewTaipei",
          photo: "new-taipei"
        },
        {
          name: "桃園市",
          value: "Taoyuan",
          photo: "taoyuan"
        },
        {
          name: "新竹市",
          value: "Hsinchu",
          photo: "hsinchu"
        },
        {
          name: "台中",
          value: "Taichung",
          photo: "taichung"
        },
        {
          name: "南投",
          value: "NantouCounty",
          photo: "nantou"
        },
        {
          name: "嘉義",
          value: "ChiayiCounty",
          photo: "chiayi"
        },
        {
          name: "高雄",
          value: "Kaohsiung",
          photo: "kaohsiung"
        },
        {
          name: "屏東",
          value: "PingtungCounty",
          photo: "pingtung"
        },
        {
          name: "宜蘭",
          value: "YilanCounty",
          photo: "yilan"
        },
        {
          name: "花蓮",
          value: "HualienCounty",
          photo: "hualien"
        },
        {
          name: "台東",
          value: "TaitungCounty",
          photo: "taitung"
        },
        {
          name: "澎湖",
          value: "PenghuCounty",
          photo: "penghu"
        }
      ]
    }
  },
  computed: {},
  methods: {
    getImage(photo) {
      return require(`../assets/img/${photo}.jpg`)
    },
    handleSearch(name) {
      this.$emit("search", name)
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
      line-height: 21px
  .item-wrapper
    margin-top: 12px
    height: 192px
    display: flex
    gap: 4px
    flex-direction: column
    flex-wrap: wrap
    align-content: flex-start
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
        width: 100%
        text-align: center
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
        z-index: 1
        .icon
          width: 16px
          height: 19px
          color: $white
        .name
          margin-top: 4px
          font-size: 14px
          line-height: 21px
          color: $white
  +rwdMin(768px)
    .title-wrapper
      .icon
        width: 20px
        margin-left: 0
  +rwdMin(1280px)
    .title-wrapper
      .icon
        margin-right: 14px
      .title
        font-size: 1.25rem
        line-height: 28px
    .item-wrapper
      height: 245px
      gap: 13px
      .item
        width: 202px
        height: calc(50% - 9px)
        border-width: 7px 9px
        &:nth-child(3n+1)
          height: calc(100% - 5px)
          border-width: 14px 13px
        .content-wrapper
          .name
            margin-top: 7px
            font-size: 1.25rem
            line-height: 28px
</style>
