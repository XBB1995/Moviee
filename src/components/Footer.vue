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
                    {toAddress: '/home', icon: '&#xe796;', title: '首页', name: 'home'},
                    {toAddress: '/goods', icon: '&#xe78a;', title: '好价', name: 'goods'},
                    {toAddress: '/community', icon: '&#xe793;', title: '社区', name: 'community'},
                    {toAddress: '/wiki', icon: '&#xe795;', title: '百科', name: 'wiki'},
                    {toAddress: '/mine', icon: '&#xe790;', title: '我的', name: 'mine'},
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
        height: 1.5rem;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #333;
        .footer-ul {
            list-style: none;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .footer-li {
                &.router-link-exact-active {
                    color: #ff464f;
                }
                background-color: #fff;
                height: 1.5rem;
                /*line-height: 1.5rem;*/
                flex: 1;
                text-align: center;
                padding: .2rem 0 .1rem;
                .footer-icon {
                    display: block;
                    font-size: .8rem;
                    height: .2rem;
                    margin-bottom: .7rem;
                }
            }

        }
    }
</style>