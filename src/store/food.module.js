import ApiService from "@/common/api.service"

const state = {
  typeList: [
    { name: "美食", value: "Restaurant" },
    { name: "住宿", value: "Hotel" }
  ],
  restaurantList: [],
  hotelList: [],
  searchList: [],
  search: {
    type: "Restaurant",
    county: "",
    keyword: ""
  }
}

const getters = {}

const actions = {
  getRestaurantList(context, { count, keyword, search }) {
    return new Promise((resolve, reject) => {
      let filter = "Picture/PictureUrl1 ne null and Address ne null"
      if (keyword && search) {
        filter += ` and contains(RestaurantName,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`
      }
      let top = count
      if (search) {
        top = undefined
      }
      ApiService.get("/Tourism", "Restaurant", {
        $format: "JSON",
        $top: top,
        $filter: filter
      })
        .then(({ data }) => {
          if (search) {
            context.commit("setSearchList", data)
          } else {
            context.commit("setRestaurantList", data)
          }
          resolve()
        })
        .catch((response) => {
          console.log(response)
          reject()
        })
    })
  },
  getRestaurantListByCounty(context, { county, keyword }) {
    return new Promise((resolve, reject) => {
      let filter = "Picture/PictureUrl1 ne null"
      if (keyword) {
        filter += ` and contains(RestaurantName,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`
      }
      ApiService.get("/Tourism/Restaurant", county, {
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
  getHotelList(context, { count, keyword, search }) {
    return new Promise((resolve, reject) => {
      let filter = "Picture/PictureUrl1 ne null and Address ne null"
      if (keyword && search) {
        filter += ` and contains(HotelName,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`
      }
      let top = count
      if (search) {
        top = undefined
      }
      ApiService.get("/Tourism", "Hotel", {
        $format: "JSON",
        $top: top,
        $filter: filter
      })
        .then(({ data }) => {
          if (search) {
            context.commit("setSearchList", data)
          } else {
            context.commit("setHotelList", data)
          }
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
  },
  setHotelList(state, data) {
    data = data.map((item) => {
      item.name = item.HotelName
      item.id = item.HotelID
      return item
    })
    state.hotelList = data
  },
  setSearchParams(state, { event, value }) {
    state.search[event] = value
  },
  setSearchList(state, data) {
    switch (state.search.type) {
      case "Restaurant":
        data = data.map((item) => {
          item.name = item.RestaurantName
          item.id = item.RestaurantID
          return item
        })
        break
      case "Hotel":
        data = data.map((item) => {
          // item.name = item.ActivityName
          // item.id = item.ActivityID
          // let time = ""
          // if (item.StartTime) {
          //   let startTime = new Date(item.StartTime)
          //   time += `${startTime.getFullYear()}-${String(
          //     startTime.getMonth() + 1
          //   ).padStart(2, "0")}-${String(startTime.getDate()).padStart(2, "0")}`
          // }
          // if (item.EndTime) {
          //   let endTime = new Date(item.EndTime)
          //   time += ` ~ ${endTime.getFullYear()}-${String(
          //     endTime.getMonth() + 1
          //   ).padStart(2, "0")}-${String(endTime.getDate()).padStart(2, "0")}`
          // }
          // item.Time = time
          return item
        })
        break
    }
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
