<template>
    <div class="mine">
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'mine',
        components: {
            Footer
        }
    }
</script>

<style scoped lang="scss">
    .mine {
        height: 20rem;
    }
</style>
