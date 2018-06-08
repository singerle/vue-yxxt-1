// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from '@/router/routesStu'
import '@/common/stylus/index.styl'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Vuex)
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
