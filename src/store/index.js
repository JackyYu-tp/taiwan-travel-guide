import Vue from "vue"
import Vuex from "vuex"

import activity from "./activity.module"
import food from "./food.module"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    activity,
    food
  }
})
