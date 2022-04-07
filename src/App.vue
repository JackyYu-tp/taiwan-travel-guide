<template lang="pug">
.app
  router-view
  Footer
  Loading(v-if="isLoading")
</template>

<script>
import { mapState } from "vuex"
import Footer from "@/components/Footer"
import Loading from "@/components/Loading"
export default {
  components: {
    Footer,
    Loading
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(["isLoading"])
  }
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
