import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入基础样式
import "./assets/base.css"
// 导入axios
import axios from 'axios'
// 把当前的axios对象挂载到Vue的原型上，所有组件都可以通过this.$axios去访问
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
