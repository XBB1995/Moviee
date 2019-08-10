<template>
    <div class="recommend">
        <home-swiper :list="swiperList"></home-swiper>
        <div class="nav">
            <ul class="nav-ul">
                <li class="nav-li" v-for="item of iconList" :key="item.id">
                    <p class="iconfont" v-html="item.icon"></p>
                    {{item.title}}
                </li>
            </ul>
        </div>
        <home-goods-item></home-goods-item>
        <home-goods-item></home-goods-item>
    </div>
</template>

<script>
    import axios from 'axios'
    import HomeSwiper from '@/components/Swiper.vue'
    import HomeGoodsItem from '@/components/GoodsItem.vue'

    export default {
        name: "HomeRecommend",
        data() {
            return {
                swiperList: [],
                iconList: [
                    {toAddress: '/home', icon: '&#xe796;', title: '首页', name: 'home'},
                    {toAddress: '/goods', icon: '&#xe78a;', title: '好价', name: 'goods'},
                    {toAddress: '/community', icon: '&#xe793;', title: '社区', name: 'community'},
                    {toAddress: '/wiki', icon: '&#xe795;', title: '百科', name: 'wiki'},
                    {toAddress: '/mine', icon: '&#xe790;', title: '我的', name: 'mine'},
                    {toAddress: '/mine', icon: '&#xe790;', title: '我的', name: 'mine'},
                ]
            }
        },
        components: {
            HomeSwiper,
            HomeGoodsItem
        },
        methods: {
            getHomeInfo() {
                axios.get('/mock/index.json')
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.swiperList = data.swiperList
                }
            },
        },
        mounted() {
            this.getHomeInfo()
        }
    }
</script>

<style scoped lang="scss">
    .recommend {
        background-color: #eee;
        .nav {
            background-color: #fff;
            /*height: 0;*/
            /*overflow: hidden;*/
            /*padding-bottom: 40%;*/
            padding: .1rem 0;
            .nav-ul {
                width: 100%;
                /*height: 100%;*/
                list-style: none;
                .nav-li {
                    display: inline-block;
                    width: 20%;
                    text-align: center;
                    /*padding: .05rem 0;*/
                    p {
                        color: red;
                        font-size: .8rem;
                    }
                }
            }
        }
    }

</style>