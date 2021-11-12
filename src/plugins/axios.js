import Vue from "vue"
import axios from "axios"
import jsSHA from "jssha"
// import store from "@/store"
const baseDomain = "https://ptx.transportdata.tw/MOTC/v2"

let config = {
  baseURL: baseDomain || "",
  timeout: 60 * 1000 // Timeout
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    let info = getAuthorizationHeader()
    config.headers.common["Authorization"] = info.Authorization
    config.headers.common["X-Date"] = info["X-Date"]
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // permission deny
    if (error.response && error.response.status === 401) {
      console.log(error.response)
    }
    // Do something with response error
    return Promise.reject(error)
  }
)

function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
  let AppID = "6d7a8117f34c47f78152947825ce9e0e"
  let AppKey = "W8yh6SXtDCjdBFrGQ1YIH3-E79k"
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString()
  let ShaObj = new jsSHA("SHA-1", "TEXT")
  ShaObj.setHMACKey(AppKey, "TEXT")
  ShaObj.update("x-date: " + GMTString)
  let HMAC = ShaObj.getHMAC("B64")
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'
  return { Authorization: Authorization, "X-Date": GMTString }
}

Plugin.install = function (Vue) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios
      }
    },
    $axios: {
      get() {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
