<template>
    <div class="header">
        <router-link tag='div'
                     class="header-tag1" to="/home/recommend">
            <div class="title">推荐</div>
        </router-link>
        <router-link tag='div' class="header-tag2" to="/home/like"
        >
            <div class="title">关注</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .header {
        background-color: #fff;
        margin-top: .1rem;
        line-height: .7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .header-tag1,
        .header-tag2 {
            position: relative;
            margin: 0 .6rem;
            height: .8rem;
            color: #000;
            box-sizing: border-box;
            font-weight: bold;
            font-size: .3rem;
            &.router-link-exact-active {
                color: red;
                .title {
                    padding-bottom: .2rem;
                    box-sizing: border-box;
                    height: .8rem;
                    border-bottom: .08rem solid red;
                }
            }
        }
        .header-tag2 {
            &:before {
                content: '99+';
                display: inline-block;
                vertical-align: center;
                text-align: center;
                position: absolute;
                left: .8rem;
                top: .1rem;
                line-height: .34rem;
                width: .6rem;
                border-radius: .5rem;
                background-color: red;
                color: #fff;
                font-size: .2rem;
            }
        }
    }
</style>