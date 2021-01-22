<template>
  <div class="nav">
    <mt-navbar v-model="selected">
      <mt-tab-item
        :id="i"
        v-for="(item, i) in NavRoutes"
        :key="i"
        @touchstart.native="gotoCom(item.name)"
        >{{ item.meta.title }}</mt-tab-item
      >
    </mt-navbar>
  </div>
</template>

<script>
import Vue from "vue";
//导入UI组件
import { Navbar, TabItem } from "mint-ui";
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
// 引入Nav导航组件
import NavRoutes from "../../router/nav";
export default {
  data() {
    return {
      NavRoutes,
      selected: 0,
    };
  },
  methods: {
    gotoCom(name) {
      //  <!-- 在某个组件的根元素上监听一个原生事件。可以使用 v-on 的修饰符 .native  -->
      // api发起跳转 是什么路由名称就相应的跳转到什么位置
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="less">
.nav {
  .mint-navbar {
    .mint-tab-item {
      .mint-tab-item-label {
        font-size: 0.6rem;
      }
    }
  }
}
</style>