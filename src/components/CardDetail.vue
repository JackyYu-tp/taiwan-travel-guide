<template lang="pug">
section.card-detail
  .close-btn(@click="handleModalStatus")
    Icon.icon(name="cross")
  h3.card-title {{ item.name }}
  .img-wrapper
    img(v-lazy="pictureList[pictureIndex]")
  .switch-btn-wrapper(v-if="pictureList.length > 1")
    .btn.prev-btn(
      :class="{ disabled: pictureIndex === 0 }",
      @click="setPictureIndex(pictureIndex - 1)"
    )
    .btn.next-btn(
      :class="{ disabled: pictureIndex === pictureList.length - 1 }",
      @click="setPictureIndex(pictureIndex + 1)"
    )
  p.card-content {{ item.Description }}
  ul.card-info
    li(v-if="item[info.key]", v-for="info in infoList", :key="info.key")
      Icon.icon(:name="info.icon")
      span {{ item[info.key] }}
</template>

<script>
import { mapMutations, mapState } from "vuex"
import Icon from "@/components/Icon"
import "@/assets/svg/cross.svg"
import "@/assets/svg/locate.svg"
import "@/assets/svg/fee.svg"
import "@/assets/svg/clock.svg"
import "@/assets/svg/phone.svg"
export default {
  name: "CardDetail",
  components: {
    Icon
  },
  props: {},
  data() {
    return {
      pictureIndex: 0
    }
  },
  computed: {
    ...mapState(["nowModalData"]),
    item() {
      return this.nowModalData
    },
    infoList() {
      if (this.item.ScenicSpotID) {
        return [
          { key: "TicketInfo", icon: "fee" },
          { key: "OpenTime", icon: "clock" },
          { key: "Phone", icon: "phone" },
          { key: "Address", icon: "locate" }
        ]
      }
      if (this.item.ActivityID) {
        return [
          { key: "Time", icon: "clock" },
          { key: "Address", icon: "locate" }
        ]
      }
      return []
    },
    pictureList() {
      let list = []
      if (this.item.Picture) {
        Object.keys(this.item.Picture)
          .filter((key) => key.indexOf("PictureUrl") >= 0)
          .map((key) => {
            list.push(this.item.Picture[key])
          })
      }
      return list
    }
  },
  methods: {
    ...mapMutations(["setModalStatus"]),
    handleModalStatus() {
      this.setModalStatus({ status: false, name: "", data: {} })
    },
    setPictureIndex(index) {
      this.pictureIndex = index
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.card-detail
  padding: 18px
  width: 80%
  max-height: 80%
  background-color: $white
  position: relative
  display: flex
  flex-direction: column
  .close-btn
    width: 40px
    height: 40px
    background-color: $primary
    position: absolute
    right: 0
    top: -56.5px
    border-radius: 8px
    cursor: pointer
    display: flex
    .icon
      margin: auto
      width: 12px
      height: 12px
  .card-title
    margin-bottom: 14px
    font-size: 18px
    font-weight: 400
    line-height: 26px
    color: $grey-001
  .img-wrapper
    order: -1
    margin-bottom: 14px
    height: 175px
    img
      width: 100%
      height: 100%
      object-fit: cover
  .switch-btn-wrapper
    order: -1
    margin-bottom: 14px
    display: flex
    .btn
      width: 32px
      height: 32px
      background-color: $black
      cursor: pointer
      border-radius: 6px
      box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2)
      display: flex
      transition: .3s
      &:after
        content: ''
        display: block
        width: 0
        height: 0
        margin: auto
        border-top: 5px solid transparent
        border-bottom: 5px solid transparent
      &.prev-btn
        margin-left: auto
        &:after
          border-right: 7px solid $white
        &.disabled:after
          border-right: 7px solid $black
      &.next-btn
        margin-left: 18px
        &:after
          border-left: 7px solid $white
        &.disabled:after
          border-left: 7px solid $black
      &.disabled
        pointer-events: none
        background-color: $white
  .card-content
    margin-bottom: 14px
    max-height: 105px
    overflow-y: scroll
    font-size: 14px
    font-weight: 400
    line-height: 21px
    color: $grey-001
  .card-info
    li
      font-size: 14px
      line-height: 21px
      display: flex
      align-items: center
      &:not(:first-child)
        margin-top: 20px
    .icon
      margin-right: 12px
      width: 19px
      height: 19px
      flex-shrink: 0
      color: $primary
</style>
