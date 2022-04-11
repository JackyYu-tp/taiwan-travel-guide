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
        path: "popular",
        name: "ActivityIndex",
        component: () => import("@/views/Activity/Index.vue")
      },
      {
        path: "search",
        name: "ActivitySearch",
        component: () => import("@/views/Activity/Search.vue")
      }
    ]
  },
  {
    path: "/food",
    name: "Food",
    component: () => import("@/views/Food.vue"),
    children: [
      {
        path: "popular",
        name: "FoodIndex",
        component: () => import("@/views/Food/Index.vue")
      },
      {
        path: "search",
        name: "FoodSearch",
        component: () => import("@/views/Food/Search.vue")
      }
    ]
  },
  {
    path: "/transport",
    name: "Transport",
    component: () => import("@/views/Transport.vue")
  },
  {
    path: "*",
    redirect: { name: "ActivityIndex" }
  }
]

const router = new VueRouter({
  routes
})

export default router
