<template>
    <div class="home">
        <home-header></home-header>
        <!--<div v-if="show">-->
            <!--<van-skeleton title :row="5"/>-->
            <!--<van-skeleton title :row="5"/>-->
            <!--<van-skeleton title :row="5"/>-->
            <!--<van-skeleton title :row="5"/>-->
        <!--</div>-->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <Drawer></Drawer>
        </van-pull-refresh>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeHeader from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import Drawer from '@/components/Drawer.vue'

    export default {
        name: 'home',
        data() {
            return {
                isLoading: false,
                // show: true
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功')
                    this.isLoading = false
                }, 500)
            }
        },
        components: {
            HomeHeader,
            Drawer,
            Footer
        },
        mounted() {
            // setTimeout(() => {
            //     this.show = false
            // }, 500)
        }
    }
</script>

<style scoped lang="scss">
    .home {
        padding: .8rem 0 1.5rem;
    }
</style>
