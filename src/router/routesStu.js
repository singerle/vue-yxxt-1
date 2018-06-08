import Vue from 'vue'
import Router from 'vue-router'

import popup from 'student/component/common/popup'
import xcbdPopup from 'student/component/common/xcbdPopup'
import index from 'student/component/index'
import aqzscs from 'student/component/rxzb-aqzscs'
import wsxx from 'student/component/rxzb-wsxx'
import bxgm from 'student/component/rxzb-bxgm'
import lstd from 'student/component/rxzb-lstd'
import bdjt from 'student/component/rxzb-bdjt'
import zjlg from 'student/component/rxzb-zjlg'
import bdlc from 'student/component/bdlc'
import xcbd from 'student/component/bdlc-xcbd'
import ssbl from 'student/component/bdlc-ssbl'
import xcjf from 'student/component/bdlc-xcjf'
import rxjy from 'student/component/bdlc-rxjy'
import jlsy from 'student/component/bdlc-jlsy'
import jxsj from 'student/component/bdlc-jlsy-jxsj'
import rxzb from 'student/component/rxzb'



import mycode from 'student/component/mycode'
import myinfo from 'student/component/myinfo'
import szqs from 'student/component/szqs'
import wsxx2 from 'student/component/rxzb-wsxx2'
import wsxx3 from 'student/component/rxzb-wsxx3'
import noticeDetail from 'student/component/notice-detail'
import noticeList from 'student/component/notice-list'

Vue.use(Router)

export default new Router({
  routes: [
  {path:'/mycode',name:'mycode',component: mycode,meta:{title:"显示个人身份码"}},
  {path:'/myinfo',name:'myinfo',component: myinfo,meta:{title:"学生个人信息页面"}},
  {path:'/szqs',name:'szqs',component: szqs,meta:{title:"所在寝室"}},
  {path:'/xcbdPopup',name:'xcbdPopup',component: xcbdPopup,meta:{title:"弹出二维码"}},
  {path:'/wsxx2',name:'wsxx2',component: wsxx2,meta:{title:"完善信息-亲属信息"}},
  {path:'/wsxx3',name:'wsxx3',component: wsxx3,meta:{title:"完善信息-曾读学校"}},
  {path:'/jxsj',name:'jxsj',component: jxsj,meta:{title:"军训时间测试"}},
  {path:'/noticeDetail',name:'noticeDetail',component: noticeDetail,meta:{title:"通知公告详情页"}},
  {path:'/noticeList',name:'noticeList',component: noticeList,meta:{title:"通知公告列表页"}},
    {
    	path: '/index',
    	name:'index', 
    	component: index, 
    	meta:{title:"迎新系统"}
    },
    {
    	path: '/rxzb',
    	name:'rxzb', 
    	component: rxzb, 
    	meta:{title:"入学准备"},
    	children:[
	    	{
	    		path:'/rxzb/aqzscs',
	    		name:'aqzscs',
	    		component:aqzscs,
	    		meta:{title:"安全知识测试"}
    		},
    		{
	    		path:'/rxzb/wsxx',
	    		name:'wsxx',
	    		component:wsxx,
	    		meta:{title:"完善信息"}
    		},
    		{
	    		path:'/rxzb/bxgm',
	    		name:'bxgm',
	    		component:bxgm,
	    		meta:{title:"保险购买"}
    		},
    		{
	    		path:'/rxzb/lstd',
	    		name:'lstd',
	    		component:lstd,
	    		meta:{title:"绿色通道"}
    		},
    		{
	    		path:'/rxzb/bdjt',
	    		name:'bdjt',
	    		component:bdjt,
	    		meta:{title:"报道交通"}
    		},
    		{
	    		path:'/rxzb/zjlg',
	    		name:'zjlg',
	    		component:zjlg,
	    		meta:{title:"走进理工"}
    		},
    	]
    },
    {
    	path: '/bdlc',
    	name:'bdlc',
    	component: bdlc,
    	meta:{title:"首页报道流程"},
    	children:[
    		{
	    		path:'/bdlc/xcbd',
	    		name:'xcbd',
	    		component:xcbd,
	    		meta:{title:"现场报道"}
    		},
    		{
	    		path:'/bdlc/ssbl',
	    		name:'ssbl',
	    		component:ssbl,
	    		meta:{title:"宿舍办理"}
    		},
    		{
	    		path:'/bdlc/xcjf',
	    		name:'xcjf',
	    		component:xcjf,
	    		meta:{title:"现场消费"}
    		},
    		{
	    		path:'/bdlc/rxjy',
	    		name:'rxjy',
	    		component:rxjy,
	    		meta:{title:"入学教育"}
    		},
    		{
	    		path:'/bdlc/jlsy',
	    		name:'jlsy',
	    		component:jlsy,
	    		meta:{title:"军旅生涯"},
	    		children:[{
	    			path:"/bdlc/jlsy/jxsj",
	    			name:"jxsj",
	    			component:jxsj,
	    			meta:{title:"军训时间"}
	    		}]
    		}
    	]
    },
  ]
})
