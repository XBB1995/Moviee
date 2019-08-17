<template>
    <div class="header">
        <div class="img-wrapper" @click="showHarden">
            <img src="../../public/logo.png"/>
        </div>
        <div class="header-content">
            <span class="iconfont icon-left">&#xe791;</span>
            <input type="text" class="header-input" placeholder="窝登行程|新闻|趣图|视频">
            <span class="iconfont icon-right">&#xe78d;</span>
        </div>
        <el-popover
                placement="bottom"
                trigger="click"
                width="170"
                @show="show = true">
            <el-button-group>
                <el-button size="mini" icon="el-icon-picture">发图文</el-button>
                <el-button size="mini" icon="el-icon-video-camera-solid">发视频</el-button>
            </el-button-group>
            <span slot="reference" class="iconfont header-plus">&#xe794;</span>
        </el-popover>
        <van-overlay :show="show" @click="show = false"/>

    </div>
</template>

<script>
    export default {
        name: "header",
        data() {
            return {
                visible: false,
                show: false
            }
        },
        methods: {
            showHarden() {

            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        box-sizing: border-box;
        z-index: 999;
        background-color: #fff;
        font-size: .2rem;
        min-width: 6rem;
        display: flex;
        padding: 0.1rem .3rem;
        line-height: .6rem;
        .img-wrapper {
            position: relative;
            width: .6rem;
            height: .6rem;
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
            }
        }
        .header-content {
            flex: 1;
            display: flex;
            .header-input {
                flex: 1;
                background-color: rgba(0, 0, 0, 0.05);
                border-radius: .5rem;
                padding: 0 .2rem;
                text-indent: .6rem;
            }
            .icon-left,
            .icon-right {
                position: relative;
                top: 0;
                bottom: 0;
                font-size: .4rem;
            }
            .icon-left {
                left: .6rem;
            }
            .icon-right {
                right: .6rem;
            }

        }
        .header-plus {
            font-size: .4rem;
            font-weight: bold;
            color: red;
        }
    }
</style>