import Vue from 'vue'
import Router from 'vue-router'

import index from 'student/component/index'
import popup from 'student/component/popup'
import xcbd from 'student/component/xcbd'
import xcbdPopup from 'student/component/xcbdPopup'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/index',name:'index', component: index, meta:{title:"迎新系统"}},
    {path: '/popup',name:'popup', component: popup, meta:{title:"首页弹窗组件"}},
    {path: '/xcbd',name:'xcbd', component: xcbd, meta:{title:"现场报道第一个页面"}},
    {path: '/xcbdPopup',name:'xcbdPopup', component: xcbdPopup, meta:{title:"现场报道第一个页面点击弹出扫码页面"}}
  ]
})
