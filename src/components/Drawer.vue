<template>
    <van-sticky>
        <div class="nav">
            <van-tabs v-model="active" swipeable class="my-tabs">
                <van-tab v-for="item in labelList" :title="item">
                    {{ item }}
                </van-tab>
            </van-tabs>
            <van-icon name="wap-nav" @click="showDrawer = true"
                      class="more" size=".5rem"></van-icon>
        </div>
        <el-drawer title="频道管理"
                   :visible.sync="drawer"
                   :direction="direction"
                   size="90%"
                   :modal="isModal"
                   v-show="showDrawer"
                   :before-close="handleClose">
            <div class="mychannel">
                <div class="mc-top">
                    <div class="mc-title">我的频道</div>
                    <span v-show="isClosable">拖动可排序</span>
                    <el-button type="text" size="small" class="com-btn"
                               @click="handleBtnClick">{{msg}}
                    </el-button>
                </div>
                <div class="com-tag">
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="tag of labelList"
                                :key="tag">
                            <el-tag class="tag" type="info" :closable="isClosable"
                                    @close="handleTagClose(tag)">{{tag}}
                            </el-tag>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="mychannel" v-show="showInterset">
                <div class="mc-top">
                    <div class="mc-title">兴趣分类</div>
                    <span>点击添加频道</span>
                </div>
                <div class="com-tag">
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="tag of disableList"
                                :key="tag">
                            <el-tag class="tag" type="info"
                                    @click="handleInterestTagAdd(tag)">{{tag}}
                            </el-tag>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="mychannel" v-show="showArticle">
                <div class="mc-top">
                    <div class="mc-title">文章分类</div>
                    <span>点击添加频道</span>
                </div>
                <div class="com-tag">
                    <el-row :gutter="20">
                        <el-col :span="6" v-for="tag of articleList"
                                :key="tag">
                            <el-tag class="tag" type="info"
                                    @click="handleArticleTagAdd(tag)">{{tag}}
                            </el-tag>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-drawer>
    </van-sticky>
</template>

<script>
    export default {
        name: "Drawer",
        data() {
            return {
                labelList: ["全部", "新品", "数码", "家居", "时尚", "海淘", "美食", "运动"],
                disableList: ["旅行", "汽车", "金融", "文娱", "亲子"],
                articleList: ["榜单", "经验", "众测", "资讯", "晒物"],
                drawer: true,
                showDrawer: false,
                direction: 'btt',
                isClosable: false,
                msg: '编辑',
                isModal: false,
                myis: true,
                active: 0
            }
        },
        computed: {
            showInterset() {
                return this.disableList.length === 0 ? false : true
            },
            showArticle() {
                return this.articleList.length === 0 ? false : true
            }
        },
        methods: {
            getInfo() {
                this.labelList = JSON.parse(localStorage.getItem("labelList") || ["empty"])
                this.disableList = JSON.parse(localStorage.getItem("disableList") || ["disable"])
                this.articleList = JSON.parse(localStorage.getItem("articleList") || ["article"])
            },
            handleClose() {
                this.showDrawer = false
                if (this.isClosable) {
                    this.handleBtnClick()
                }
                localStorage.setItem("labelList", JSON.stringify(this.labelList))
                localStorage.setItem("disableList", JSON.stringify(this.disableList))
                localStorage.setItem("articleList", JSON.stringify(this.articleList))
            },
            handleBtnClick() {
                this.isClosable = !this.isClosable
                this.msg = this.msg === "编辑" ? "完成" : "编辑"
            },
            handleTagClose(tag) {
                let delTag = this.labelList.splice(this.labelList.indexOf(tag), 1)
                this.disableList.push(delTag.toString())
            },
            handleInterestTagAdd(tag) {
                let addTag = this.disableList.splice(this.disableList.indexOf(tag), 1)
                this.labelList.push(addTag.toString())
            },
            handleArticleTagAdd(tag) {
                let addTag = this.articleList.splice(this.articleList.indexOf(tag), 1)
                this.labelList.push(addTag.toString())
            }
        },
        created() {
            this.getInfo()
        }
    }
</script>

<style scoped lang="scss">
    .nav {
        position: relative;
        .my-tabs {
            padding-right: .8rem;
        }
        .more {
            /*width: .8rem;*/
            position: absolute;
            top: 0;
            right: 0.2rem;
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
                margin: 0.3rem 0.1rem .1rem;
                /*flex: 1 0 20%;*/
                width: 100%;
                text-align: center;
                font-size: .3rem;
                color: #000;
            }
        }
    }
</style>