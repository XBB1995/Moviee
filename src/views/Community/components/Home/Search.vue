<template>
  <div class="search">
    <div class="search-header">
      <span class="iconfont icon-left">&#xe791;</span>
      <input
        type="text"
        class="search-input"
        @focus="handleFocus"
        @blur="handleBlur"
        v-model="keywords"
        placeholder="电影名称 | 类别"
      />
      <button class="hot-spot" v-show="!inSearch" @click="handleTopBtn">
        Top指数
        <van-icon name="chart-trending-o"></van-icon>
      </button>
      <button class="search-cancel-btn" v-show="inSearch">取消</button>
    </div>
    <div class="search-content" ref="content">
      <ul>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunitySearch",
  data() {
    return {
      inSearch: false,
      keywords: ""
    };
  },
  methods: {
    handleFocus() {
      this.inSearch = true;
      this.$refs.content.style.display = "block";
    },
    handleBlur() {
      this.inSearch = false;
      this.$refs.content.style.display = "none";
    },
    handleTopBtn() {
      // 通过bus总线传递数据 通过自定义事件传递参数
      this.bus.$emit("checkToTop", "top");
    }
  }
};
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 0.2rem;
  padding: 0.1rem 0.3rem;
  position: fixed;
  z-index: 999;
  .search-header {
    width: 90%;
    height: 0.6rem;
    line-height: 0.6rem;
    .search-input {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 0.5rem;
      width: 50%;
      transition: width 0.4s ease;
      text-indent: 0.6rem;
      font-size: 0.26rem;
      &:focus {
        width: 100%;
        transition: width 0.4s ease;
      }
    }
    .icon-left {
      position: absolute;
      top: 0.1rem;
      bottom: 0;
      left: 0.4rem;
      font-size: 0.4rem;
    }
    .hot-spot,
    .search-cancel-btn {
      color: #f55;
      position: absolute;
      top: 0.1rem;
      right: 0.3rem;
      background: transparent;
    }
    .hot-spot {
      font-size: 0.3rem;
      font-weight: bold;
    }
    .search-cancel-btn {
      color: #999;
    }
  }
  .search-content {
    display: none;
  }
  .active {
    display: block;
  }
}
</style>