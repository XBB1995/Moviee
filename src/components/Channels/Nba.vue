<template>
    <div class="route">
        <el-timeline>
            <el-timeline-item :timestamp="activity.time" placement="top"
                              :color="activity.color"
                              v-for="activity of activities" :key="activity.id">
                <el-card class="tag">
                    <div class="inner-card">
                        <van-image fit="cover" :src="activity.imgUrl"
                                   width="2rem" height="2rem"/>
                        <div class="info">
                            <h1>活动: {{activity.title}}</h1>
                            <p>地点: {{activity.position||"未知"}}</p>
                            <p>时间: {{activity.time}}</p>
                        </div>
                        <span class="status" v-show="activity.status">已结束</span>
                    </div>
                </el-card>
            </el-timeline-item>
            <el-timeline-item>
                <template v-slot="dot">
                    <div>
                        <h1>More...</h1>
                    </div>
                </template>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "route",
        data() {
            return {
                activities: [
                    {
                        title: '哈登中国行',
                        time: '2019-7-15',
                        position: "上海",
                        status: true,
                        imgUrl: 'https://wx1.sinaimg.cn/mw690/0068Hvlkly1g6gau6x6wpj30u011iwkw.jpg'
                    },
                    {
                        title: '小明出马',
                        time: '2019-9-15',
                        status: false,
                        imgUrl: 'https://wx1.sinaimg.cn/mw690/0068Hvlkly1g6gau6x6wpj30u011iwkw.jpg',
                        color: 'skyblue'
                    },
                    {
                        title: '哈登骑车',
                        time: '2019-12-15',
                        status: false,
                        imgUrl: 'https://wx1.sinaimg.cn/mw690/0068Hvlkly1g6gau6x6wpj30u011iwkw.jpg'
                    }
                ]
            }
        },
        methods: {},
        created() {
        }
    }
</script>

<style scoped lang="scss">
    .route {
        padding: .2rem;
        .inner-card {
            display: flex;
            flex-direction: row;
            /*justify-content: space-around;*/
            position: relative;
            .info {
                margin-left: .2rem;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: relative;
                h1 {
                    font-size: .36rem;
                    font-weight: bold;
                }
            }
            .status {
                border: .04rem solid red;
                padding: .04rem;
                color: red;
                font-size: .3rem;
                font-weight: bold;
                position: absolute;
                top: 65%;
                right: 0;
                transform: rotate(-30deg) translate(-10%);
            }

        }
    }
</style>