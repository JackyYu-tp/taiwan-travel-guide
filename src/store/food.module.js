import ApiService from "@/common/api.service"

const state = {
  restaurantList: []
}

const getters = {}

const actions = {
  getRestaurantList(context, count) {
    return new Promise((resolve, reject) => {
      ApiService.get("/Tourism", "Restaurant", {
        $format: "JSON",
        $top: count,
        $filter: "Picture/PictureUrl1 ne null and Address ne null"
      })
        .then(({ data }) => {
          console.log(data)
          context.commit("setRestaurantList", data)
          resolve()
        })
        .catch((response) => {
          console.log(response)
          reject()
        })
    })
  }
}

const mutations = {
  setRestaurantList(state, data) {
    state.restaurantList = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
