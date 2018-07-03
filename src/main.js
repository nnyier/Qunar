// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import '../src/common/css/reset.css'
// 解决移动端1px边框问题(多倍屏下，1px会被渲染为多px)
import '../src/common/css/border.css'
import '../src/common/css/iconfont.css'

Vue.config.productionTip = false
// 解决移动端点击延迟300ms
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
