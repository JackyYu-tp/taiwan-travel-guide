import ApiService from "@/common/api.service"

const state = {
  typeList: [
    { name: "景點", value: "ScenicSpot" },
    { name: "活動", value: "Activity" }
  ],
  activityList: [],
  searchList: [],
  search: {
    type: "ScenicSpot",
    county: "",
    keyword: ""
  }
}

const getters = {}

const actions = {
  getActivityList(context, { count, keyword, search }) {
    return new Promise((resolve, reject) => {
      let filter = "Picture/PictureUrl1 ne null"
      if (keyword && search) {
        filter += ` and contains(ActivityName,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`
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
        filter += ` and contains(ActivityName,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`
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
        filter += ` and contains(ScenicSpotName,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`
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
        filter += ` and contains(ScenicSpotName,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`
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
    state.activityList = data.map((item) => {
      item.name = item.ActivityName
      item.id = item.ActivityID
      let time = ""
      if (item.StartTime) {
        let startTime = new Date(item.StartTime)
        time += `${startTime.getFullYear()}-${String(
          startTime.getMonth() + 1
        ).padStart(2, "0")}-${String(startTime.getDate()).padStart(2, "0")}`
      }
      if (item.EndTime) {
        let endTime = new Date(item.EndTime)
        time += ` ~ ${endTime.getFullYear()}-${String(
          endTime.getMonth() + 1
        ).padStart(2, "0")}-${String(endTime.getDate()).padStart(2, "0")}`
      }
      item.Time = time

      return item
    })
  },
  setSearchList(state, data) {
    switch (state.search.type) {
      case "ScenicSpot":
        data = data.map((item) => {
          item.name = item.ScenicSpotName
          item.id = item.ScenicSpotID
          return item
        })
        break
      case "Activity":
        data = data.map((item) => {
          item.name = item.ActivityName
          item.id = item.ActivityID
          let time = ""
          if (item.StartTime) {
            let startTime = new Date(item.StartTime)
            time += `${startTime.getFullYear()}-${String(
              startTime.getMonth() + 1
            ).padStart(2, "0")}-${String(startTime.getDate()).padStart(2, "0")}`
          }
          if (item.EndTime) {
            let endTime = new Date(item.EndTime)
            time += ` ~ ${endTime.getFullYear()}-${String(
              endTime.getMonth() + 1
            ).padStart(2, "0")}-${String(endTime.getDate()).padStart(2, "0")}`
          }
          item.Time = time
          return item
        })
        break
    }
    state.searchList = data
  },
  setSearchParams(state, { event, value }) {
    state.search[event] = value
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
