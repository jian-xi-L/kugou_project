import Vue from 'vue'
import VueRouter from 'vue-router'
import NavRoutes from './nav'


// 导入搜索组件
import NavSearch from "../components/Nav/NavSearch.vue"
import Search from "../views/Search/Search.vue"

Vue.use(VueRouter)

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch((err) => err)
}

const routes = [
  ...NavRoutes,
  {
    path: "/search",
    name: "Search",
    components: {
      default: Search,
      nav: NavSearch
    }
  }
]


const router = new VueRouter({
  routes
})

export default router
