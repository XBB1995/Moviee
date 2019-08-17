<template>
    <div class="game">
        <game-header></game-header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import GameHeader from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'game',
        components: {
            GameHeader,
            Footer
        }
    }
</script>

<style scoped lang="scss">
    .goods {
        height: 20rem;
    }
</style>
