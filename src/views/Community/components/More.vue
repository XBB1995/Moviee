<template>
  <div class="more" ref="more">
    <van-tabs v-model="activeName" animated>
      <van-tab title="正在热映" name="hot" class="hot">
        <div class="piaofang">
          <span>实时票房</span>
          <span>
            今日大盘
            <a>3464.1万&gt;</a>
          </span>
        </div>
        <div class="info">
          <ul>
            <li v-for="movie of movieList" :key="movie.collect_count">
              <movie-card :movieInfo="movie"></movie-card>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="即将上映" name="coming">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import MovieCard from "./Card.vue";
import axios from "axios";

export default {
  name: "more",
  data() {
    return {
      activeName: "hot"
    };
  },
  props: {
    movieList: Array
  },
  components: {
    MovieCard
  },
  mounted() {
    this.$emit("ishow")
  }
};
</script>

<style scoped lang="scss">
.more {
  .hot {
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
    .info {
    }
  }
}
</style>