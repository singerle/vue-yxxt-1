// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import index from './comps/index'
Vue.use(Router)
Vue.config.productionTip = false

const router = new Router({
  routes: [
    {
      path: '/pc',
      name: 'index',
      component: index
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
