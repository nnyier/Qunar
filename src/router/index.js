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
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City,
    children: [{
      path: 'inhome',
      name: 'InHome',
      component: InHome
    },
    {
      path: 'outhome',
      name: 'OutHome',
      component: OutHome
    }
    ]
  }]
})
