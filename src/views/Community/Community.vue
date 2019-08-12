<template>
    <div class="community">
        <community-header></community-header>
        <Drawer></Drawer>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import CommunityHeader from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import Drawer from '@/components/Drawer.vue'

    export default {
        name: 'community',
        components: {
            CommunityHeader,
            Footer,
            Drawer
        }
    }
</script>

<style scoped lang="scss">
    .community {
        height: 20rem;
    }
</style>
