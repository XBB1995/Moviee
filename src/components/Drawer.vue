<template>
    <div>
        <div class="nav">
            <van-tabs v-model="active" swipeable class="my-tabs">
                <van-tab v-for="item of labelList" :title="item.name">
                    <keep-alive>
                        <component :is="item.comp"></component>
                    </keep-alive>
                </van-tab>
            </van-tabs>
            <van-icon name="wap-nav" @click="showDrawer = true"
                      class="more" size=".5rem"></van-icon>
        </div>
        <el-drawer title="频道管理"
                   :visible.sync="drawer"
                   :direction="direction"
                   size="100%"
                   :modal="isModal"
                   v-show="showDrawer"
                   :before-close="handleClose">
            <div class="mychannel border-bottom">
                <div class="wrapper">
                    <el-tag type="info" size="medium">
                        推荐
                    </el-tag>
                    <div class="right">
                        <span>默认为首页</span>
                        <el-switch
                                style="display: inline-block"
                                v-model="on"
                                active-color="#13ce66"
                                inactive-color="#ccc">
                        </el-switch>
                    </div>
                </div>
            </div>
            <div class="mychannel">
                <div class="mc-top">
                    <div class="mc-title">我的频道</div>
                    <span v-show="isClosable">（拖动可排序）</span>
                    <el-button type="text" size="small" class="com-btn"
                               @click="handleBtnClick">{{msg}}
                    </el-button>
                </div>
                <div class="com-tag">
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="tag of labelList"
                                :key="tag.name">
                            <el-tag class="tag" type="info"
                                    :closable="isClosable"
                                    size="medium" @close="handleTagClose(tag)">{{tag.name}}
                            </el-tag>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="mychannel" v-show="showInterset">
                <div class="mc-top">
                    <div class="mc-title">未添加频道</div>
                    <span>（点击添加到我的频道）</span>
                </div>
                <div class="com-tag">
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="tag of disableList"
                                :key="tag.name">
                            <el-tag class="tag" type="info" size="medium"
                                    @click="handleInterestTagAdd(tag)">{{tag.name}}
                            </el-tag>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
    import nba from './Channels/Nba.vue'
    import rec from './Channels/Rec.vue'

    export default {
        name: "Drawer",
        data() {
            return {
                labelList: [
                    {name: "推荐", comp: 'rec', idx: 1},
                    {name: "行程", comp: 'nba', idx: 2},
                    {name: "赛程", comp: 'rec', idx: 3},
                    {name: "数据", comp: 'nba', idx: 4},
                    {name: "图片", comp: 'rec', idx: 5},
                    {name: "视频", comp: 'nba', idx: 6}
                ],
                disableList: [
                    {name: "NBA", comp: 'nba', idx: 7},
                    {name: "壁纸", comp: 'nba', idx: 8},
                    {name: "表情包", comp: 'nba', idx: 9},
                    {name: "段子", comp: 'nba', idx: 10},
                    {name: "plus", comp: 'nba', idx: 11}
                ],
                drawer: true,
                showDrawer: false,
                direction: 'btt',
                isClosable: false,
                msg: '编辑',
                isModal: false,
                myis: true,
                active: 0,
                on: false
            }
        },
        components: {
            nba,
            rec
        },
        computed: {
            showInterset() {
                return this.disableList.length === 0 ? false : true
            },
            isAble(tag){
                if (tag.name === "推荐") {
                    return true
                }
            }
        },
        methods: {
            getInfo() {
                this.labelList = JSON.parse(localStorage.getItem("labelList")) || this.labelList
                this.disableList = JSON.parse(localStorage.getItem("disableList")) || this.disableList
            },
            handleClose() {
                this.showDrawer = false
                if (this.isClosable) {
                    this.handleBtnClick()
                }
                localStorage.setItem("labelList", JSON.stringify(this.labelList))
                localStorage.setItem("disableList", JSON.stringify(this.disableList))
            },
            handleBtnClick() {
                this.isClosable = !this.isClosable
                this.msg = this.msg === "编辑" ? "完成" : "编辑"
            },
            handleTagClose(tag) {
                let delTag = this.labelList.some((item, index) => {
                    if (item.idx === tag.idx) {
                        this.disableList.push(this.labelList.splice(index, 1)[0])
                        return true
                    }
                })
            },
            handleInterestTagAdd(tag) {
                let addTag = this.disableList.some((item, index) => {
                    if (item.idx === tag.idx) {
                        this.labelList.push(this.disableList.splice(index, 1)[0])
                        return true
                    }
                })
            }
        },
        created() {
            this.getInfo()
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/vars';

    .nav {
        position: relative;
        /*height: 5rem;*/
        .my-tabs {
            /*padding-right: .8rem;*/
        }
        .more {
            width: .8rem;
            position: absolute;
            top: 0;
            /*height: .9rem;*/
            right: 0;
            line-height: .9rem;
            /*top: 0;*/
            /*right: .2rem;*/
            /*top: .98rem;*/
            background-color: #fff;
        }
    }

    .mychannel {
        margin: 0 0 .4rem;
        padding: 0 .2rem;
        .wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 0.2rem .2rem;
            .right {
                float: right;
                span {
                    margin-right: .2rem;
                }
            }
        }
        .mc-top {
            display: flex;
            align-items: center;
            span {
                color: #999;
                font-size: .2rem;
                margin-left: .2rem;
            }
            .mc-title {
                font-size: .3rem;
                font-weight: bold;
                color: #000;
            }
            .com-btn {
                position: absolute;
                right: 0.4rem;
                color: #f55;
            }
        }
        .com-tag {
            .tag {
                margin: 0.3rem 0 .1rem;
                /*flex: 1 0 20%;*/
                width: 100%;
                line-height: .55rem;
                text-align: center;
                font-size: .24rem;
                color: #000;
                @include text-ellipsis;
            }
        }
    }
</style>