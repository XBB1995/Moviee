<template>
    <div class="home">
        <home-header></home-header>
        <home-nav></home-nav>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeHeader from '@/components/Header.vue'
    import HomeNav from '@/views/Home/components/Nav.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'home',
        data() {
            return {}
        },
        components: {
            HomeHeader,
            HomeNav,
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
