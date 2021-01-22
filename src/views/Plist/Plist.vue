<template>
  <div>
    <mt-cell v-for="(item, i) in plistlist" :key="i" :title="item.specialname">
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
      plistlist: [],
    };
  },
  async created() {
    let { data } = await this.$axios.get("/api/plist/index&json=true");
    console.log(data);
    this.plistlist = data.plist.list.info;
  },
};
</script>

<style>
</style>