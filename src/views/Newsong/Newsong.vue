<template>
  <div class="newsong">
    <div class="banner">
      <!-- 轮播图组件 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, i) in bannerlists" :key="i">
          <img :src="item.imgurl" :alt="item.title" :title="item.title" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="songlist">
      <!-- 歌曲列表 -->
      <mt-cell v-for="(item, i) in songlists" :key="i" :title="item.filename">
        <img
          slot="icon"
          src="../../assets/img/download_icon.png"
          width="15"
          height="15"
          class="fr"
          @touchstart.prevent="popUpFn"
        />
      </mt-cell>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// 引入轮播图组件
import { Swipe, SwipeItem, Cell, MessageBox } from "mint-ui";
Vue.component(Swipe.name, Swipe); //轮播图
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell); //歌曲列表
export default {
  data() {
    return {
      // 轮播图图片数组
      bannerlists: [],
      // 歌曲数组
      songlists: [],
    };
  },
  async created() {
    // 解构拿到axios返回的数据
    let { data } = await this.$axios.get("./api?json=true");
    this.bannerlists = data.banner;
    this.songlists = data.data;
  },
  methods: {
    popUpFn() {
      MessageBox({
        title: "",
        message: "下载需要手机酷狗客户端支持",
        showCancelButton: true,
        confirmButtonText: "客户端下载",
      });
    },
  },
};
</script>

<style lang="less">
.banner {
  .mint-swipe {
    height: 6rem;
    .mint-swipe-item {
      img {
        height: 6rem;
        margin: 0.25rem;
      }
    }
  }
  .mint-swipe-indicators {
    bottom: 0.2rem;
    .mint-swipe-indicator {
      opacity: 0.7;
    }
  }
}

.songlist {
  .mint-cell {
    margin-top: 0.5rem;
  }
}
</style>