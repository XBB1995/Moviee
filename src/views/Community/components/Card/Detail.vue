<template>
  <div class="detail">
    <header>
      <router-link to="/community/more" tag="div" class="back">
        <van-icon name="arrow-left" />
      </router-link>
      <span class="title">movie {{$route.params.id}} 的影评</span>
    </header>
    <ul>
      <li v-for="comment of commentsList" :key="comment.id">
        <div class="container">
          <h3 class="user">{{comment.name}}:</h3>
          <p class="content">{{comment.body}}</p>
          <div class="footer">
            <span>
              <van-icon name="fire-o" />亮了(11)
            </span>
            <span>
              <van-icon name="comment-o" />评论(2)
            </span>
            <span>
              <van-icon name="envelop-o" />回复
            </span>
            <van-icon name="share" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "detail",
  data() {
    return {
      imgW: "1.8rem",
      imgH: "2.4rem",
      commentsList: []
    };
  },
  props: {
    movieInfo: Object
  },
  methods: {
    getDetails() {
      let id = this.$route.params.id;
      // console.log(id)
      axios
        .get("https://jsonplaceholder.typicode.com/comments", {
          params: {
            postId: 1
          }
        })
        .then(res => {
          const data = res.data;
          this.commentsList = data;
        });
    }
  },
  computed: {
    selectedCommentsList() {
      return this.commentsList.map(comment => {
        if (comment.id <= 10) return true;
      });
    }
  },
  created() {
    this.getDetails();
  }
};
</script>

<style scoped lang="scss">
.detail {
  padding: 0 0.3rem;
  margin-top: 1rem;
  header {
    position: fixed;
    height: 1rem;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 .3rem;
    .title {
      font-weight: bold;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
  .container {
    margin-bottom: 0.34rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .user {
      font-weight: bold;
    }
    .content {
      margin: 0.2rem 0.2rem 0.2rem 1rem;
      &::first-line {
        color: #f55;
      }
    }
    .footer {
      font-size: 0.2rem;
      margin-left: 1rem;
      margin-right: 0.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        margin-left: 0.05rem;
        padding-left: 0.1rem;
      }
    }
  }
}
</style>