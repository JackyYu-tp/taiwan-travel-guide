import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/activity",
    name: "Activity",
    component: () => import("@/views/Activity.vue"),
    children: [
      {
        path: "hot",
        name: "HotActivity",
        component: () => import("@/views/Activity/HotActivity.vue")
      }
    ]
  },
  {
    path: "/food",
    name: "Food",
    component: () => import("@/views/Food.vue")
  },
  {
    path: "/transport",
    name: "Transport",
    component: () => import("@/views/Transport.vue")
  },
  {
    path: "*",
    redirect: { name: "HotActivity" }
  }
]

const router = new VueRouter({
  routes
})

export default router
