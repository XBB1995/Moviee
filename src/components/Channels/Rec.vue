<template>
    <div class="rec">
        <div class="wrapper">
            <cards-list :infoList="getList(imgInfoList, 0)"
                        @getStatus="ChangeStatus"></cards-list>
            <cards-list :infoList="getList(imgInfoList, 1)"
                        @getStatus="ChangeStatus"></cards-list>
        </div>
        <div class="footer" v-show="toBottom">
            <span>—————— 我是有底线的 ——————</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import CardsList from '../Channels/CardsList.vue'

    export default {
        name: "rec",
        data() {
            return {
                imgInfoList: [],
                toBottom: false
            }
        },
        components: {
            CardsList
        },
        methods: {
            getPicInfo() {
                axios.get('https://www.easy-mock.com/mock/5d4f6b52bfbd2538192571c7/smzdm/api/getpic')
                    .then(this.getPicInfoSucc)
            },
            getPicInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.imgInfoList = data.swiperList
                }
            },
            getList(list, status) {
                return list.filter((item, index) => {
                    if (status === 0 && index % 2 === 0) {
                        return item
                    }
                    if (status === 1 && index % 2 === 1) {
                        return item
                    }
                })
            },
            ChangeStatus(...status) {
                this.imgInfoList.some(item => {
                    if (item.id === status[1]) {
                        item.likeStatus = status[0]
                        item.count = status[0] ? item.count + 1 : item.count - 1
                        return true
                    }
                })
            }
        },
        mounted() {
            this.getPicInfo()
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/vars';
    .rec {
        .wrapper {
            display: flex;
            padding: .1rem;
        }
        .footer {
            margin-top: .4rem;
            text-align: center;
        }
    }
</style>