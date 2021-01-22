<template>
  <div class="search">
    <mt-header title="搜索">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
import Vue from "vue";
import { Header } from "mint-ui";
Vue.component(Header.name, Header);
export default {};
</script>

<style lang="less">
.search {
  .mint-header {
    background-color: #fff;
    .mint-header-title {
      color: #000;
      font-size: 0.8rem;
      height: 3rem;
      line-height: 3rem;
    }
    .mint-header-button {
      .mint-button-icon {
        .mintui-back {
          color: gray;
          font-size: 1rem;
          font-weight: bolder;
        }
      }
    }
  }
}
</style>