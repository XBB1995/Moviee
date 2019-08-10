<!-- The ref attr used to find the swiper instance -->
<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
    export default {
        name: 'carrousel',
        props: {
            list: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    autoplay: true,
                    loop: true
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    // ...
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },
            showSwiper() {
                return this.list.length
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            // console.log('this is current swiper instance object', this.swiper)
            // this.swiper.slideTo(3, 1000, false)
        }
    }
</script>

<style scoped lang="scss">
    .wrapper /deep/ .swiper-pagination-bullet {
        opacity: 0.4;
        background-color: #fff;
    }

    .wrapper /deep/ .swiper-pagination-bullet-active {
        opacity: 1;
    }

    .wrapper {
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 40.88%;
    }

    .swiper-img {
        width: 100%;
    }
</style>