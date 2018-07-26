import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home/home'
// import City from '../components/city/city'
// import InHome from '../components/city/citypages/inhome'
// import OutHome from '../components/city/citypages/outhome'
// import Detail from '../components/detail/detail'

Vue.use(Router)
export default new Router({
  // 异步加载组件
  routes: [{
    path: '/',
    component: () => import('@/components/home/home')
  }, {
    path: '/city',
    component: () => import('../components/city/city'),
    children: [{
      path: '/',
      redirect: 'inhome'
    },
    {
      path: 'inhome',
      component: () => import('../components/city/citypages/inhome')
    },
    {
      path: 'outhome',
      component: () => import('../components/city/citypages/outhome')
    }]
  }, {
    path: '/detail/:id',
    component: () => import('../components/detail/detail')
  }],
  // 每次切换路由，都让页面滚动到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
