<template>
  <div class="card">
    <div class="item-left">
      <van-image :src="movieInfo.images.small" fit="scale-down" :width="imgW" :height="imgH" />
    </div>
    <div class="item-middle">
      <div class="title">{{movieInfo.title}}</div>
      <div class="rating-wrapper">
        豆瓣评分
        <span class="rating">{{movieInfo.rating.average}}</span>
      </div>
      <div class="actor">主演:{{casts}}</div>
      <div class="info">
        <div class="tag">
          标签:
          <van-tag v-for="(tag, index) of movieInfo.genres" :key="index"
          round plain color="#f55" class="tags">{{tag}}</van-tag>
        </div>
        <div>
          <span>值得看 74%</span>
        </div>
        <button class="details">影评</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      imgW: "1.8rem",
      imgH: "2.4rem"
    };
  },
  props: {
    movieInfo: Object
  },
  computed: {
    casts() {
      const actor = [];
      this.movieInfo.casts.forEach(cast => {
        actor.push(cast.name);
      });
      return actor.join(",");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/styles/vars";

.card {
  display: flex;
  width: 100%;
  margin-top: 0.2rem;
  background-color: #fff;
  height: 2.6rem;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 0.1rem 0.1rem;
  /*border: 1px solid red;*/
  box-sizing: border-box;
  .item-left {
    border-radius: 0.1rem;
    flex: 0 0 1.8rem;
  }
  .item-middle {
    border-bottom: 1px solid #f55;
    height: 100%;
    padding: .1rem 0.15rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    position: relative;
    .title {
      font-size: 0.4rem;
      font-weight: bold;
      line-height: 0.4rem;
      margin-right: 0.2rem;
      //@include text-ellipsis;
    }
    .rating-wrapper {
      line-height: 0.3rem;
      height: 0.3rem;
      border-radius: 0.1rem;
      /*width: 2.4rem;*/
      text-align: center;
      .rating {
        font-size: 0.4rem;
        color: rgb(226, 174, 29);
      }
    }
    .actor {
      font-size: 0.3rem;
      width: 4rem;
      @include text-ellipsis;
    }
    .info {
      width: 100%;
      font-size: 0.2rem;
      padding-right: 0.2rem;
      color: #666;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tag {
          .tags {
              margin-left: .1rem;
          }
      }
    }
    .details {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 0.2rem;
      background-color: #f55;
      border-radius: 0.3rem;
      color: #fff;
      padding: 0.12rem 0.2rem;
    }
  }
}
</style>