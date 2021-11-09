<template lang="pug">
.app
  //- Header
  router-view
</template>

<script>
// import Header from "@/components/Header"
export default {
  components: {
    // Header
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
