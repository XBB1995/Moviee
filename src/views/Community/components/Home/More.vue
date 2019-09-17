<template>
  <div class="more">
    <div class="more-wrapper">
      <van-tabs v-model="activeName" animated>
        <van-tab title="正在热映" name="hot">
          <div class="piaofang">
            <span>实时票房</span>
            <span>
              今日大盘
              <router-link to="/detail/123" tag="a">3464.1万&gt;</router-link>
            </span>
          </div>
          <card-list :movieList="movieList"></card-list>
        </van-tab>
        <van-tab title="Top10" name="top">
          <card-list :movieList="top"></card-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardList from "../Card/CardList.vue";

export default {
  name: "more",
  data() {
    return {
      activeName: "hot"
    };
  },
  props: {
    movieList: Array,
    top: Array
  },
  components: {
    CardList
  },
  mounted() {
    this.$emit("ishow");
    // 通过bus总线传递数据 监听自定义事件
    this.bus.$on("checkToTop", className => {
      this.activeName = className;
    });
  }
};
</script>

<style scoped lang="scss">
.more {
  .piaofang {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eee;
    padding: 0.2rem;
    margin: 0.2rem 0.6rem;
    a {
      color: #f55;
    }
  }
}
</style>