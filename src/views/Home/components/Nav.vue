<template>
    <div class="nav">
        <router-link tag='div' @click.native="handlerLeftClick"
                     class="nav-tag1" to="/home/recommend">
            <div class="title">推荐</div>
        </router-link>
        <router-link tag='div' class="nav-tag2" to="/home/like" @click.native="handlerRightClick">
            <div class="title">关注</div>
        </router-link>
        <div class="footer">
            <transition-group>
                <div class="bottom-border-left" key="l" v-show="showLeft"></div>
                <div class="bottom-border-right" key="r" v-show="!showLeft"></div>
            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Homenav",
        data() {
            return {
                showLeft: true
            }
        },
        methods: {
            handlerRightClick() {
                this.showLeft = false
            },
            handlerLeftClick() {
                this.showLeft = true
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-enter,
    .v-leave-to {
        opacity: 0;
    }
    .v-enter-active,
    .v-leave-active {
        transition: opacity .4s;
    }
    .nav {
        height: .8rem;
        width: 100%;
        background-color: #fff;
        margin-top: .1rem;
        line-height: .7rem;
        position: relative;
        overflow: hidden;
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        .nav-tag1,
        .nav-tag2 {
            /*width: 25%;*/
            display: inline-block;
            position: absolute;
            /*margin: 0 .6rem;*/
            height: .8rem;
            color: #000;
            /*box-sizing: border-box;*/
            font-weight: bold;
            font-size: .3rem;
            &.router-link-active {
                color: red;
                .title {
                    padding-bottom: .2rem;
                    box-sizing: border-box;
                    height: .8rem;
                    /*border-bottom: .08rem solid red;*/
                }
            }
        }
        .nav-tag1 {
            left: 35%;
            transform: translateX(-50%);
        }
        .nav-tag2 {
            left: 65%;
            transform: translateX(-50%);
            &:before {
                content: '99+';
                display: inline-block;
                vertical-align: center;
                text-align: center;
                position: absolute;
                left: .63rem;
                top: .1rem;
                line-height: .34rem;
                width: .6rem;
                border-radius: .5rem;
                background-color: red;
                color: #fff;
                font-size: .2rem;
            }
        }
        .footer {
            position: relative;
            left: 0;
            right: 0;
            top: .7rem;
            height: .1rem;
            .bottom-border-left,
            .bottom-border-right {
                position: absolute;
                height: .1rem;
                background-color: red;
                display: inline-block;
                width: .6rem;
            }
            .bottom-border-left {
                left: 35%;
                transform: translateX(-50%);
            }
            .bottom-border-right {
                left: 65%;
                transform: translateX(-50%);
            }
        }

    }
</style>