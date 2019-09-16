import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 全局引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vant
import Vant from 'vant'
import 'vant/lib/index.css'
// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
