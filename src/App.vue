<template lang="pug">
.app
  router-view
  Footer
</template>

<script>
import Footer from "@/components/Footer"
export default {
  components: {
    Footer
  },
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="sass">
@import "@/assets/sass/_reset.sass"
.app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>

<style lang="sass" scoped></style>
