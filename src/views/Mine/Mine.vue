<template>
    <div class="mine">
        <mine-header></mine-header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import MineHeader from '@/views/Mine/components/Header.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'mine',
        components: {
            MineHeader,
            Footer
        }
    }
</script>

<style scoped lang="scss">
    .mine {
        height: 20rem;
    }
</style>
