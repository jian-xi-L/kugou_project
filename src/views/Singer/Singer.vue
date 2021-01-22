<template>
  <div>
    <mt-cell v-for="(item, i) in singerlist" :key="i" :title="item.classname">
      <span></span>
      <img
        slot="icon"
        src="../../assets/img/arrow_icon.png"
        width="10"
        height="16"
        class="fr"
      />
    </mt-cell>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell } from "mint-ui";
Vue.component(Cell.name, Cell);

export default {
  data() {
    return {
      singerlist: [],
    };
  },
  async created() {
    let { data } = await this.$axios.get("/api/singer/class&json=true");
    console.log(data);
    this.singerlist = data.list;
  },
};
</script>

<style>
</style>