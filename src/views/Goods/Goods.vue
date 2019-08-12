<template>
    <div class="goods">
        <goods-header></goods-header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import GoodsHeader from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'Goods',
        components: {
            GoodsHeader,
            Footer
        }
    }
</script>

<style scoped lang="scss">
    .goods {
        height: 20rem;
    }
</style>
