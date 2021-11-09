import Vue from "vue"
import VueRouter from "vue-router"
import Activity from "@/views/Activity.vue"
import Food from "@/views/Food.vue"
import Transport from "@/views/Transport.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Activity
  },
  {
    path: "/activity",
    name: "Activity",
    component: Activity
  },
  {
    path: "/food",
    name: "Food",
    component: Food
  },
  {
    path: "/transport",
    name: "Transport",
    component: Transport
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
]

const router = new VueRouter({
  routes
})

export default router
