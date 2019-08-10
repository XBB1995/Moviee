<template>
    <div class="home">
        <home-search></home-search>
        <home-header></home-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeHeader from '@/views/Home/components/Header.vue'
    import HomeSearch from '@/views/Home/components/Search.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'home',
        data() {
            return {}
        },
        components: {
            HomeHeader,
            HomeSearch,
            Footer
        }
    }
</script>

<style scoped lang="scss">
    .home {
        /*height: 30rem;*/
        padding-bottom: 1.5rem;
    }
</style>
