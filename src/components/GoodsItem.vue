<template>
    <div class="goodsitem">
        <div class="item-left">
            <img src="https://img.alicdn.com/imgextra/i3/1037468546/O1CN0183M5e62D07KR12xOk_!!0-item_pic.jpg_430x430q90.jpg" alt="">
        </div>
        <div class="item-middle">
            <div class="title">Miiow 猫人 MR207 女士运动内衣</div>
            <Tag class="tag">运动服饰热度Top1</Tag>
            <div class="price">19.8元包邮</div>
            <div class="info">
                <div class="source">
                    <span>京东</span>|13:14
                </div>
                <div>
                    <span class="iconfont">&#xe78f;</span>
                    <span>145</span>
                </div>
                <div>
                    <span>值 74%</span>
                </div>
            </div>
        </div>
        <div class="item-right">
            <span class="iconfont item-del">&#xe78f;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props: {
            itemList: Array
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/vars';

    .goodsitem {
        padding: .2rem;
        display: flex;
        width: 100%;
        margin-top: .2rem;
        background-color: #fff;
        height: 3rem;
        align-items: center;
        position: relative;
        .item-left {
            /*width: 35%;*/
            /*height: 0;*/
            /*overflow: hidden;*/
            /*padding-bottom: 35%;*/
            width: 2.4rem;
            /*height: 2.6rem;*/
            /*padding-left: .1rem;*/
            border-radius: .1rem;
            /*<!--position: relative;-->*/
            /*<!--top: 50%; !*偏移*!-->*/
            /*<!--transform: translateY(-50%);-->*/
            img {
                width: 100%;
            }
        }
        .item-middle {
            height: 2.6rem;
            margin-left: .15rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
                font-size: .3rem;
                font-weight: bold;
                line-height: .5rem;
                margin-right: .4rem;
                //@include text-ellipsis;
            }
            .tag {
                background-color: #eee;
                color: #888;
                line-height: .3rem;
                height: .3rem;
                border-radius: .1rem;
                width: 2.4rem;
                text-align: center;
                @include text-ellipsis;
            }
            .price {
                color: red;
                font-weight: bold;
                font-size: .3rem;
                @include text-ellipsis;
            }
            .info {
                padding-right: .6rem;
                font-size: .2rem;
                color: #666;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .source {
                    @include text-ellipsis;
                }
            }
        }
        .item-del {
            /*float: right;*/
            position: absolute;
            top: .2rem;
            right: .2rem;
        }
    }
</style>