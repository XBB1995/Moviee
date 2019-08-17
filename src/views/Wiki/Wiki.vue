<template>
    <div class="wiki">
        <wiki-header></wiki-header>
        <Recommend></Recommend>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import WikiHeader from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import Recommend from './components/Recommend.vue'
    export default {
        name: 'wiki',
        data() {
            return {}
        },
        components: {
            WikiHeader,
            Footer,
            Recommend
        }
    }
</script>

<style scoped lang="scss">
    .wiki {
        /*height: 30rem;*/
        padding: .8rem 0 1.5rem;
    }
</style>
