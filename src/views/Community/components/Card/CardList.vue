<template>
  <div class="info">
    <ul class="infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="disabled">
      <li v-for="movie of exactMoiveList" :key="movie.id">
        <movie-card :movieInfo="movie"></movie-card>
      </li>
    </ul>
    <div class="more">
      <p v-if="loading">加载中</p>
      <p v-if="noMore">加载完毕</p>
    </div>
  </div>
</template>

<script>
import MovieCard from "./Card.vue";

export default {
  name: "cardList",
  data() {
    return {
      threshold: 5,
      loading: false
    };
  },
  props: {
    movieList: Array
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
  methods: {
    loadMore() {
      this.loading = true;
      // this.$message("更多影片马上就到~");
      setTimeout(() => {
        this.loading = false;
        this.threshold += 2;
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.more {
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
        color: #f55;
        font-size: 0.3rem;
        font-weight: bold;
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
</style>