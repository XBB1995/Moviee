<template>
  <div class="movie">
    <div class="info">
      <span>热门影片</span>
      <router-link to="/more" class="checkAll" tag="span">查看全部 &gt;</router-link>
    </div>
    <ul class="ul">
      <li v-for="movie of movieList" :key="movie.collect_count">
        <div class="image">
          <van-image :src="movie.images.small" fit="scale-down" :width="imgW" :height="imgH" />
          <div class="star-wrapper">
            <span class="star">{{movie.rating.average}}分</span>
          </div>
        </div>
        <div class="title">{{movie.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "movie",
  data() {
    return {
      movieList: [],
      imgW: "2.2rem",
      imgH: "3rem"
    };
  },
  methods: {
    getMovieInfo() {
      axios
        .get(
          "https://www.easy-mock.com/mock/5d285a292b88e21970e06f77/example/api/getMovieInfo"
        )
        .then(res => {
          const data = res.data;
          this.movieList = data.subjects;
        });
    }
  },
  created() {
    this.getMovieInfo();
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/styles/vars";

.movie {
  height: 100%;
  padding-top: 0.9rem;
  .info {
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    .checkAll {
      color: #999;
      font-size: 0.1rem;
    }
  }
  .ul {
    display: flex;
    overflow: auto;
    padding: 0.1rem 0;
    justify-content: flex-start;
    .image {
      box-sizing: border-box;
      height: 3rem;
      width: 2.2rem;
      position: relative;
      .star {
        position: absolute;
        left: .12rem;
        bottom: .06rem;
        color: orange;
        font-size: 0.1rem;
      }
    }
    .title {
      margin-top: 0.06rem;
      font-size: 0.1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>