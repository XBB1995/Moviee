<template>
    <div class="community">
        <community-header></community-header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import CommunityHeader from '@/views/Community/components/Header.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'community',
        components: {
            CommunityHeader,
            Footer
        }
    }
</script>

<style scoped lang="scss">
    .community {
        height: 20rem;
    }
</style>
