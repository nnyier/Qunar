import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import City from '../components/city/city'
import InHome from '../components/city/citypages/inhome'
import OutHome from '../components/city/citypages/outhome'
import Detail from '../components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/city',
    component: City,
    children: [{
      path: '/',
      redirect: 'inhome'
    },
    {
      path: 'inhome',
      component: InHome
    },
    {
      path: 'outhome',
      component: OutHome
    }]
  }, {
    path: '/detail/:id',
    component: Detail
  }],
  // 每次切换路由，都让页面滚动到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
