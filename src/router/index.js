import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import City from '../components/city/city'
import InHome from '../components/city/citypages/inhome'
import OutHome from '../components/city/citypages/outhome'

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
  }]
})
