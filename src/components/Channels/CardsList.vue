<template>
    <ul class="card-ul">
        <li class="card-li" v-for="item of infoList">
            <el-card :body-style="{ margin: '0', padding: '0' }" shadow="always">
                <van-image fit="cover" :src="item.imgUrl"
                           class="image"/>
                <div class="card-content">
                    <span class="title">{{item.title}}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{item.addTime}}</time>
                        <div class="like">
                            <van-icon :name="changeStatus(item.likeStatus)"
                                      @click="light(item.likeStatus,item.id)" class="like-icon"></van-icon>
                            <span>{{item.count}}</span>
                        </div>
                    </div>
                </div>
            </el-card>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "CardsList",
        props: {
            infoList: Array
        },
        data() {
            return {
                timer: null
            }
        },
        methods: {
            light(status, id) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    if (!status) {
                        this.$emit('getStatus', true, id)
                    } else {
                        this.$emit('getStatus', false, id)
                    }
                }, 200)
            },
            changeStatus(status) {
                return status ? "like" : "like-o"
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/vars';

    .card-ul {
        width: 50%;
        display: flex;
        flex-direction: column;
        margin: 0 .05rem;
        .card-li {
            margin: .06rem 0;
            .card-content {
                padding: 14px;

                .title {
                    font-size: .3rem;
                    font-weight: bold;
                    //@include text-ellipsis;
                }

                .bottom {
                    font-size: 13px;
                    color: #999;
                    margin-top: 13px;
                    line-height: 12px;
                    height: 12px;
                    position: relative;

                    .like {
                        position: absolute;
                        top: 50%;
                        right: 0;
                        transform: translateY(-50%);

                        .like-icon {
                            font-weight: bold;
                            margin-right: .1rem;
                        }

                    }
                }

                .image {
                    width: 100%;
                    display: block;
                }

                .clearfix:before,
                .clearfix:after {
                    display: table;
                    content: "";
                }

                .clearfix:after {
                    clear: both
                }

            }
        }
    }
</style>