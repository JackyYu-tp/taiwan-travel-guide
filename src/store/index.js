import Vue from "vue"
import Vuex from "vuex"

import activity from "./activity.module"
import food from "./food.module"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    isShowModal: false,
    nowModalComponent: "CardDetail",
    nowModalData: {},
    cityList: [
      { name: "桃園市", value: "Taoyuan" },
      { name: "金門縣", value: "KinmenCounty" },
      { name: "宜蘭縣", value: "YilanCounty" },
      { name: "基隆市", value: "Keelung" },
      { name: "苗栗縣", value: "MiaoliCounty" },
      { name: "嘉義縣", value: "ChiayiCounty" },
      { name: "南投縣", value: "NantouCounty" },
      { name: "臺東縣", value: "TaitungCounty" },
      { name: "高雄市", value: "Kaohsiung" },
      { name: "臺北市", value: "Taipei" },
      { name: "嘉義市", value: "Chiayi" },
      { name: "臺中市", value: "Taichung" },
      { name: "花蓮縣", value: "HualienCounty" },
      { name: "雲林縣", value: "YunlinCounty" },
      { name: "屏東縣", value: "PingtungCounty" },
      { name: "澎湖縣", value: "PenghuCounty" },
      { name: "連江縣", value: "LienchiangCounty" },
      { name: "新竹縣", value: "HsinchuCounty" },
      { name: "新北市", value: "NewTaipei" },
      { name: "新竹市", value: "Hsinchu" },
      { name: "彰化縣", value: "ChanghuaCounty" },
      { name: "臺南市", value: "Tainan" }
    ]
  },
  mutations: {
    setLoading(state, status) {
      state.isLoading = status
    },
    setModalStatus(state, { status, name, data }) {
      state.isShowModal = status
      state.nowModalComponent = name
      state.nowModalData = data
    }
  },
  actions: {},
  modules: {
    activity,
    food
  }
})
