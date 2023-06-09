import App from './App'

// #ifndef VUE3
import Vue from 'vue'

// main.js，注意要在use方法之后执行
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import url from "./config.js"
Vue.prototype.$url = url;
import util from './utils/index.js'
Vue.prototype.$util=util;

// 如此配置即可
uni.$u.config.unit = 'rpx'

import './uni.promisify.adaptor'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif