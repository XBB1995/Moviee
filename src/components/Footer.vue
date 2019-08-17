<template>
    <div class="footer">
        <ul class="footer-ul">
            <router-link :to="item.toAddress" tag="li" class="footer-li"
                         v-for="item of footerList" :key="item.icon">
                <transition>
                    <span class="iconfont footer-icon" v-html="item.icon"></span>
                </transition>
                {{item.title}}
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                footerList: [
                    {toAddress: '/home', icon: '&#xe796;', title: '首页'},
                    {toAddress: '/game', icon: '&#xe795;', title: '比赛'},
                    {toAddress: '/community', icon: '&#xe793;', title: '社区'},
                    {toAddress: '/wiki', icon: '&#xe78a;', title: '装备'},
                    {toAddress: '/mine', icon: '&#xe790;', title: '我的'},
                ],
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
        transition: opacity ease 1s;
    }

    .footer {
        position: fixed;
        height: 1rem;
        left: 0;
        right: 0;
        bottom: 0;
        .footer-ul {
            list-style: none;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .footer-li {
                &.router-link-active {
                    color: #ff464f;
                    .footer-icon {
                        color: #ff464f;
                    }
                }
                font-size: .16rem;
                color: #999;
                background-color: #fff;
                height: 1rem;
                /*line-height: 1rem;*/
                flex: 1;
                text-align: center;
                .footer-icon {
                    color: #000;
                    display: block;
                    font-size: .5rem;
                    font-weight: bold;
                    height: .14rem;
                    margin: .1rem 0 .4rem;
                }
            }

        }
    }
</style>