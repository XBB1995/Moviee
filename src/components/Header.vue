<template>
    <div class="header">
        <a class="header-class">分类</a>
        <div class="header-content">
            <span class="iconfont icon-left">&#xe791;</span>
            <input type="text" class="header-input" placeholder="方便食品">
            <span class="iconfont icon-right">&#xe78d;</span>
        </div>
        <span class="iconfont header-plus">&#xe794;</span>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped lang="scss">
    .header {
        background-color: #fff;
        font-size: .2rem;
        min-width: 6rem;
        display: flex;
        padding: 0.1rem .3rem;
        line-height: .6rem;
        .header-class {
            color: #666;
        }
        .header-content {
            flex: 1;
            display: flex;
            .header-input {
                flex: 1;
                background-color: rgba(0,0,0,0.05);
                border-radius: .5rem;
                padding:  0 .2rem;
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