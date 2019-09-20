<template>
  <div class="movie">
    <div class="info">
      <span>正在热映</span>
      <router-link to="/community/more" class="checkAll" tag="span">详细信息 &gt;</router-link>
    </div>
    <ul class="ul">
      <li v-for="movie of movieList" :key="movie.id" @click="getRatingDetails(movie)">
        <div class="image">
          <van-image :src="movie.images.small" fit="scale-down" :width="imgW" :height="imgH" />
          <div class="star-wrapper">
            <span class="star">{{movie.rating.average}}分</span>
          </div>
        </div>
        <div class="title">{{movie.title}}</div>
      </li>
    </ul>
    <com-rating :rating="rating"></com-rating>
    <div class="list-wrapper" ref="wrapper">
      <router-view :movieList="movieList" :top="top" @ishow="handleListShow"></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ComRating from "../Home/Rating.vue";

export default {
  name: "movie",
  components: {
    ComRating
  },
  data() {
    return {
      movieList: [],
      top: [],
      imgW: "2.2rem",
      imgH: "3rem",
      rating: null
    };
  },
  watch: {
    movieList(newVal, oldVal) {
      this.rating = this.movieList[0].rating || {};
    }
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
          console.log(this.movieList);
        });
    },
    handleListShow() {
      // 点击后自动移入视口顶部平齐
      this.$refs.wrapper.scrollIntoView(true);
      // console.log("get info from module")
      // console.log(this.$el.scrollTop);
      // console.log(this.$refs.wrapper.scrollTop);
      // this.$refs.wrapper.scrollTop = 10
    },
    getRatingDetails(movie) {
      this.rating = movie.rating;
    },
    getTop() {
      axios
        .get(
          "https://www.easy-mock.com/mock/5d285a292b88e21970e06f77/example/api/getTop250"
        )
        .then(res => {
          const data = res.data;
          this.top = data.subjects;
        });
    }
  },
  created() {
      // 异步获取电影信息
    this.getMovieInfo();
    this.getTop();
  }
};
</script>

<style scoped lang="scss">
@import "../../../../assets/styles/vars";

.movie {
  height: 100%;
  padding-top: 0.9rem;
  .info {
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    span {
      font-size: 0.3rem;
    }
    .checkAll {
      color: #999;
      font-size: 0.28rem;
    }
  }
  .ul {
    display: flex;
    overflow: auto;
    padding: 0.1rem 0;
    margin-bottom: 0.1rem;
    justify-content: flex-start;
    .image {
      box-sizing: border-box;
      height: 3rem;
      width: 2.2rem;
      position: relative;
      box-shadow: 0 0.05rem 0.05rem #aaa;
      .star {
        position: absolute;
        left: 0.12rem;
        bottom: 0.06rem;
        color: orange;
        font-size: 0.26rem;
      }
    }
    .title {
      width: 2.2rem;
      margin-top: 0.12rem;
      font-size: 0.3rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .list-wrapper {
    margin-bottom: 1rem;
  }
}
</style>