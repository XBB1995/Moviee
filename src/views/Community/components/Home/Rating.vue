<template>
  <div class="rating">
    <!-- <span v-show="!this.rating">网络不太好呢~</span> -->
    <div class="mychart"></div>
  </div>
</template>

<script>
export default {
  name: "rating",
  data() {
    return {
      mychart: null
    };
  },
  props: {
    rating: Object
  },
  watch: {
    rating() {
      this.createFig();
    }
  },
  methods: {
    createFig() {
      // 日常访问被限制时的占位图
      if (!this.rating) {
        let res = [];
        let i = 0;
        while (i < 5) {
          res[i++] = Math.floor(Math.random() * 1000 + 1);
        }
        let option = {
          title: {
            text: "没网鸭",
            subtext: "ORZ",
            x: "left"
          },
          series: [
            {
              name: "占位图",
              type: "pie",
              radius: ["50%", "80%"],
              data: res,
              label: {
                normal: {
                  show: false
                }
              }
            }
          ]
        };
        this.mychart.setOption(option);
        return;
      }
      // 评分绘图
      let details = this.rating.details;
      let res = [];
      Object.keys(details).forEach(key => {
        res.push({
          value: details[key],
          name: key
        });
      });
      let option = {
        title: {
          text: "电影评分",
          subtext: "点击查看详细数据",
          x: "left"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "评分",
            type: "pie",
            radius: ["50%", "80%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            data: res
          }
        ]
      };
      this.mychart.setOption(option);
    }
  },
  components: {},
  mounted() {
    this.mychart = this.$echarts.init(document.querySelector(".mychart"));
    this.createFig();
  }
};
</script>

<style scoped lang="scss">
.rating {
  text-align: center;
  margin: 0.2rem 0;
  span {
    color: lightcoral;
    font-size: 0.3rem;
    font-weight: bold;
    padding: 0.2rem;
  }
  .mychart {
    height: 3rem;
    // background-color: pink;
  }
}
</style>