// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store'
// 如果浏览器没有promise 会自动添加es6 新特性 解决部分浏览器白屏问题
import 'babel-polyfill'
import '../src/common/css/reset.css'
// 解决移动端1px边框问题(多倍屏下，1px会被渲染为多px)
import '../src/common/css/border.css'
import '../src/common/css/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 解决移动端点击延迟300ms
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
