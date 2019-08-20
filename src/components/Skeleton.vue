<template>
    <div class="skeleton">
        <slot v-if="!loading"></slot>
        <div class="logo" v-if="loading">
            <img src="../../public/logo.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "skeleton",
        props: {
            loading: Boolean
        },
    }
</script>

<style scoped lang="scss">
    .skeleton {
        height: 100%;
        .logo {
            height: 100%;
            position: relative;
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 40%;
            }
        }
    }

</style>