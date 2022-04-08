<template lang="pug">
.modal
  component(:is="nowModalComponent")
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "Modal",
  components: {
    CardDetail: () => import("@/components/CardDetail")
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState(["nowModalComponent"])
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
.modal
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background: rgba(210, 210, 210, 0.75)
  backdrop-filter: blur(28px)
  z-index: 4
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
</style>
