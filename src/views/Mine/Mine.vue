<template>
  <div class="mine">
    <div class="echarts" ref="echarts">hello echarts</div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import echarts from "echarts";

export default {
  name: "mine",
  components: {
    Footer
  },
  mounted() {
    var myChart = echarts.init(this.$refs.echarts);
    var option = {
      backgroundColor: "#666",
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: "销量",
          type: "pie",
          radius: "55%",
          data: [
            { value: 235, name: "视频广告" },
            { value: 274, name: "联盟广告" },
            { value: 310, name: "邮件营销" },
            { value: 335, name: "直接访问" },
            { value: 400, name: "搜索引擎" }
          ],
          itemStyle: {
              color: '#c23531',
            //   shadowBlur:200,
            // shadowOffsetX: 0,
            // shadowOffsetY: 0,
            // shadowColor: "rgba(0,0,0,.5)",
            emphasis: {
              shadowBlur: 200,
              shadowColor: "pink"
            }
          }
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>

<style scoped lang="scss">
.mine {
  height: 20rem;
  .echarts {
    margin-top: 2rem;
    height: 4rem;
    width: 100%;
  }
}
</style>
