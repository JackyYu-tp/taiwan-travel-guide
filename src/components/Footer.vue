<template lang="pug">
.footer
  | Taiwan Tourguide © Code: Jacky / Design: KT
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.footer
  padding: 9px
  width: 100%
  background-color: $white
  text-align: center
  color: $grey-002
  font-size: 12px
  line-height: 14px
</style>
