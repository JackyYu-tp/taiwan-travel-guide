<template lang="pug">
svg(@click="handleClick")
  use(:xlink:href="`#${name}`")
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: String
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$emit("click")
    }
  }
}
</script>

<style lang="sass" scoped></style>
