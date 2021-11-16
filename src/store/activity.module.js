import ApiService from "@/common/api.service"

const state = {
  activityList: [],
  activitySearchList: []
}

const getters = {}

const actions = {
  getActivityList(context, { count, keyword, search }) {
    return new Promise((resolve, reject) => {
      let filter = "Picture/PictureUrl1 ne null"
      if (keyword && search) {
        filter += ` and contains(Name,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`
      }
      let top = count
      if (search) {
        top = undefined
      }
      ApiService.get("/Tourism", "Activity", {
        $format: "JSON",
        $top: top,
        $filter: filter
      })
        .then(({ data }) => {
          if (search) {
            context.commit("setActivitySearchList", data)
          } else {
            context.commit("setActivityList", data)
          }
          resolve()
        })
        .catch((response) => {
          console.log(response)
          reject()
        })
    })
  },
  getActivityListByCounty(context, { county, keyword }) {
    return new Promise((resolve, reject) => {
      let filter = "Picture/PictureUrl1 ne null"
      if (keyword) {
        filter += ` and contains(Name,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`
      }
      ApiService.get("/Tourism/Activity", county, {
        $format: "JSON",
        $top: 50,
        $filter: filter
      })
        .then(({ data }) => {
          console.log(data)
          context.commit("setActivitySearchList", data)
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
  },
  setActivitySearchList(state, data) {
    state.activitySearchList = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
