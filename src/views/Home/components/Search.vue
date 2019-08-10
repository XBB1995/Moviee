<template>
    <div class="search">
        <a class="search-class">分类</a>
        <div class="search-content">
            <span class="iconfont icon-left">&#xe791;</span>
            <input type="text" class="search-input" placeholder="方便食品">
            <span class="iconfont icon-right">&#xe78d;</span>
        </div>
        <span class="iconfont search-plus">&#xe794;</span>
    </div>
</template>

<script>
    export default {
        name: "HomeSearch"
    }
</script>

<style scoped lang="scss">
    .search {
        background-color: #fff;
        font-size: .2rem;
        min-width: 6rem;
        display: flex;
        padding: 0.1rem .3rem;
        line-height: .6rem;
        .search-class {
            color: #666;
        }
        .search-content {
            flex: 1;
            display: flex;
            .search-input {
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
        .search-plus {
            font-size: .4rem;
            font-weight: bold;
            color: red;
        }
    }
</style>