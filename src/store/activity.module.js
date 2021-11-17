import ApiService from "@/common/api.service"

const state = {
  typeList: [
    { name: "景點", value: "ScenicSpot" },
    { name: "活動", value: "Activity" }
  ],
  activityList: [],
  searchList: []
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
            context.commit("setSearchList", data)
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
        $filter: filter
      })
        .then(({ data }) => {
          context.commit("setSearchList", data)
          resolve()
        })
        .catch((response) => {
          console.log(response)
          reject()
        })
    })
  },
  getScenicSpotList(context, { keyword, search }) {
    return new Promise((resolve, reject) => {
      let filter = "Picture/PictureUrl1 ne null"
      if (keyword && search) {
        filter += ` and contains(Name,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`
      }
      ApiService.get("/Tourism", "ScenicSpot", {
        $format: "JSON",
        $filter: filter
      })
        .then(({ data }) => {
          context.commit("setSearchList", data)
          resolve()
        })
        .catch((response) => {
          console.log(response)
          reject()
        })
    })
  },
  getScenicSpotListByCounty(context, { county, keyword }) {
    return new Promise((resolve, reject) => {
      let filter = "Picture/PictureUrl1 ne null"
      if (keyword) {
        filter += ` and contains(Name,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`
      }
      ApiService.get("/Tourism/ScenicSpot", county, {
        $format: "JSON",
        $filter: filter
      })
        .then(({ data }) => {
          context.commit("setSearchList", data)
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
  setSearchList(state, data) {
    state.searchList = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
