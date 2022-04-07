<template lang="pug">
.pagination
  .btn.prev-btn(
    :class="{ disabled: nowPage === 1 }",
    @click="setPage(nowPage - 1)"
  )
  | {{ nowPage }} / {{ totalPage }}
  .btn.next-btn(
    :class="{ disabled: nowPage === totalPage }",
    @click="setPage(nowPage + 1)"
  )
</template>

<script>
export default {
  name: "Pagination",
  components: {},
  props: {
    totalPage: Number,
    nowPage: Number
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    setPage(page) {
      this.$emit("setPage", page)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.pagination
  display: flex
  justify-content: center
  align-items: center
  .btn
    width: 32px
    height: 32px
    background-color: #FF1D6C
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
      margin-right: 20px
      &:after
        border-right: 7px solid #fff
    &.next-btn
      margin-left: 20px
      &:after
        border-left: 7px solid #fff
    &.disabled
      pointer-events: none
      background-color: #0D0B0C
</style>
