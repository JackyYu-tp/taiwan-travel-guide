<template lang="pug">
Header
  Form(
    :type="type",
    :county="county",
    :keyword="keyword",
    @type="handleInput",
    @county="handleInput",
    @keyword="handleInput"
  )
</template>

<script>
import Header from "@/components/Header"
import Form from "@/components/Form"
import Icon from "@/components/Icon"
import "@/assets/svg/search.svg"
import "@/assets/svg/slogan.svg"
export default {
  name: "Transport",
  components: {
    Header,
    Form,
    Icon
  },
  data() {
    return {
      type: "",
      county: "",
      keyword: ""
    }
  },
  methods: {
    handleInput({ event, value }) {
      console.log(event, value)
      this[event] = value
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
+form("../assets/img/food.jpg")
</style>
