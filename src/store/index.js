import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  //   state: state,
  //   actions: actions,
  //   mutations: mutations
  state,
  actions,
  mutations,
  //   类似于vue的computed属性
  getters: {
    doubleCity(state) {
      return state.city + ' ' + state.city
    }
  }
})
