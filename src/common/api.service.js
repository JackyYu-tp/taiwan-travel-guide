import Vue from "vue"

const ApiService = {
  query(resource, params) {
    return Vue.axios.get(resource, { params: params })
  },

  get(resource, slug = "", params) {
    const route = slug ? `${resource}/${slug}` : `${resource}`
    return Vue.axios.get(route, { params: params })
  }

  //   post(resource, params) {
  //     return Vue.axios.post(`${resource}`, params)
  //   },

  //   update(resource, slug, params) {
  //     const route = slug ? `${resource}/${slug}` : `${resource}`
  //     return Vue.axios.put(route, params)
  //   },

  //   put(resource, params) {
  //     return Vue.axios.put(`${resource}`, params)
  //   },

  //   delete(resource, slug = "", params) {
  //     const route = slug ? `${resource}/${slug}` : `${resource}`
  //     return Vue.axios.delete(route, { params: params })
  //   }
}

export default ApiService
