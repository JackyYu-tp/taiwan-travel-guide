import ApiService from "@/common/api.service"

const state = {
  restaurantList: []
}

const getters = {}

const actions = {
  getRestaurantList(context, { count }) {
    return new Promise((resolve, reject) => {
      ApiService.get("/Tourism", "Restaurant", {
        $format: "JSON",
        $top: count,
        $filter: "Picture/PictureUrl1 ne null and Address ne null"
      })
        .then(({ data }) => {
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
    data = data.map((item) => {
      item.name = item.RestaurantName
      item.id = item.RestaurantID
      return item
    })
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
