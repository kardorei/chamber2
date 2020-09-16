import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/css/font.css'
import './assets/js/flexible.js'

// 全局过滤器
import * as custom from "./utils/filters.js";
Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key])
})

Vue.config.productionTip = false

// axios全局配置
import axios from 'axios'
// 把axios注入到Vue对象原型中，使得每个Vue对象都可以使用this获取到axios(把axios赋值给$axios)
Vue.prototype.$axios = axios

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')