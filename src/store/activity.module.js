import ApiService from "@/common/api.service"

const state = {
  activityList: []
}

const getters = {}

const actions = {
  getList(context, count) {
    return new Promise((resolve, reject) => {
      ApiService.get("/Tourism", "Activity", {
        $format: "JSON",
        $top: count,
        $filter: "Picture/PictureUrl1 ne null"
      })
        .then(({ data }) => {
          console.log(data)
          context.commit("setActivityList", data)
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
  setActivityList(state, data) {
    state.activityList = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
