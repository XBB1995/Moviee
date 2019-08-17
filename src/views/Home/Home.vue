<template>
    <div class="home">
        <home-header></home-header>
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
                isLoading: false
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
        }
    }
</script>

<style scoped lang="scss">
    .home {
        padding: .8rem 0 1.5rem;
    }
</style>
