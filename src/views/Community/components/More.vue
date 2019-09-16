<template>
  <div class="more">
    <div class="more-wrapper">
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
            <ul
              class="infinite-list"
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="disabled"
            >
              <li v-for="movie of exactMoiveList" :key="movie.collect_count">
                <movie-card :movieInfo="movie"></movie-card>
              </li>
            </ul>
            <div class="more">
              <p v-if="loading">加载中</p>
              <p v-if="noMore">加载完毕</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="详细评分" name="coming">
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import MovieCard from "./Card.vue";
import axios from "axios";

export default {
  name: "more",
  data() {
    return {
      activeName: "hot",
      threshold: 5,
      loading: false
    };
  },
  props: {
    movieList: Array
  },
  methods: {
    loadMore() {
      this.loading = true;
      // this.$message("更多影片马上就到~");
      setTimeout(() => {
        this.loading = false;
        this.threshold += 2;
      }, 1000);
    }
  },
  components: {
    MovieCard
  },
  computed: {
    exactMoiveList() {
      return this.movieList.slice(0, this.threshold);
    },
    noMore() {
      return this.threshold >= 10;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  mounted() {
    this.$emit("ishow");
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
      .infinite-list {
        padding: 0;
        overflow: auto;
        height: 100%;
      }
      .more {
        padding: 0.1rem;
        text-align: center;
        p {
          &::before {
            content: "————";
          }
          &::after {
            content: "————";
          }
        }
      }
    }
  }
}
</style>