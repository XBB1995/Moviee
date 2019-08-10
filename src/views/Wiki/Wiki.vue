<template>
    <div class="wiki">
        <wiki-header></wiki-header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import WikiHeader from '@/views/Wiki/components/Header.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'wiki',
        components: {
            WikiHeader,
            Footer
        }
    }
</script>

<style scoped lang="scss">
    .wiki {
        height: 20rem;
    }
</style>
