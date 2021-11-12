<template lang="pug">
.container
  Header
    Form(
      :type="type",
      :county="county",
      :keyword="keyword",
      :typeList="typeList",
      @type="handleInput",
      @county="handleInput",
      @keyword="handleInput"
    )
  router-view
</template>

<script>
import Header from "@/components/Header"
import Form from "@/components/Form"
import Icon from "@/components/Icon"
import "@/assets/svg/search.svg"
import "@/assets/svg/slogan.svg"
export default {
  name: "Food",
  components: {
    Header,
    Form,
    Icon
  },
  data() {
    return {
      type: "",
      county: "",
      keyword: "",
      typeList: [
        { name: "美食", value: "Restaurant" },
        { name: "住宿", value: "Hotel" }
      ]
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
