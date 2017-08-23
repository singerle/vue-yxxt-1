import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import * as getters from './getter'
Vue.use(Vuex)
const state = {
    'historyPath':'',
    'goback':''
}

// 定义所需的 mutations
const mutations = {
    // SET_BTNSTATE(state) {
    // 	state.btnstu = state;
    // },
    SET_PATH(sta,data){
        state.historyPath=data;
    },
    SET_GOBACK(sta,data){
        state.goback = data;
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})