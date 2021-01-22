<template>
  <div id="app">
    <!-- 头部区域 -->
    <header>
      <!-- 具名路由视图 -->
      <mt-header title="">
        <router-link to="/" slot="left">
          <mt-button class="logo_icon"></mt-button>
        </router-link>
        <mt-button
          icon="search"
          slot="right"
          @touchstart.native="gotoSearch"
        ></mt-button>
      </mt-header>

      <router-view name="nav"></router-view>
    </header>

    <div class="container">
      <!-- 默认路由视图 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Header, Button } from "mint-ui";
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

export default {
  methods: {
    gotoSearch() {
      this.$router.push({ path: "/search" });
    },
  },
};
</script>

<style lang="less">
header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%;
  .mint-header {
    .mint-header-button {
      .logo_icon {
        width: 5.1rem;
        height: 1.2rem;
        background: url(./assets/img/logo.png) no-repeat;
        background-size: 100% 100%;
      }
    }
    .mintui-search {
      font-size: 0.9rem;
    }
  }
}
div.container {
  margin-top: 4.5rem;
}
</style>
