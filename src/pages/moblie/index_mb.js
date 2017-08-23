// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Router from 'vue-router'
import index from './home/home'
import containt from './containt/containt'
import region from './containt/region'
import college from './containt/college'
import store from './vuex/store'
require('vue-swipe/dist/vue-swipe.css')
Vue.use(Router)
Vue.use(Vuex)

Vue.config.productionTip = false

let router = new Router({
  routes: [
    {
      path: '/home',
      name: 'index',
      component: index
    },
    {
      path:'/containt',
      name:'containt',
      component:containt,
       children:[
         {path:'/containt/region',component:region},
         {path:'/containt/college',component:college}
       ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  var path = store.getters.historyPath;
  var goback = JSON.parse(sessionStorage.getItem('goback'));
  if(goback){
    sessionStorage.removeItem('goback');
    if(path){
      next({path:path})
    }else{
      next({path:to})
    }
  }
  else{
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
