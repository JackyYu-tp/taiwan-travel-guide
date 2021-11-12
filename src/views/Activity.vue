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
  name: "Activity",
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
        { name: "景點", value: "ScenicSpot" },
        { name: "活動", value: "Activity" }
      ]
    }
  },
  methods: {
    handleInput({ event, value }) {
      this[event] = value
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/index.sass"
</style>
