<template>
    <div>
        <ul>
            <li v-for="item of weather" :key="item.day">
                空气指数 {{item.wea}} {{item.tem}}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "nba",
        data() {
            return {
                cityId: '',
                weather: []
            }
        },
        methods: {
            handleWeather() {
                let _this = this
                axios.get('https://www.tianqiapi.com/api/', {
                    params: {
                        version: 'v1',
                        cityid: _this.cityId,
                        appid: '28636361',
                        appsecret: 'evU6UF5K'
                    }
                })
                    .then(res => {
                        let data = res.data
                        this.weather = data.data
                    })
            },
            handleCityList(city) {
                axios.get('https://www.easy-mock.com/mock/5d4f6b52bfbd2538192571c7/smzdm/citylist')
                    .then(res => {
                        let data = res.data
                        data.some(val=>{
                            if(val.cityZh === city||val.cityEn === city){
                                this.cityId = val.id
                                return true
                            }
                        })
                    })
            }
        },
        created() {
            this.handleCityList("beijing")
            this.handleWeather()
        }
    }
</script>

<style scoped>

</style>