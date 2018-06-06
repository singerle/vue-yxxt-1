<template>
	
    <div class="bgcolor">
    	<popup v-show="isshow" @event="cancelPopup"></popup>
    	<div class="header">
    		<div class="pic"></div>
    		<div class="student-info">
    			<h3 class="student-name">
    				<span class="xingming">李吱吱</span>
    				<span class="ico-1"></span>
    				<span class="ico-2"></span>
    				<span class="ico-3"></span>
    			</h3>
    			<p class="yuan">
    				<span class="yuan-name">理学院</span>
    				<span class="ico-4"></span>
    			</p>
    			<p class="xi">
    				<span>信息与计算科学&nbsp;&nbsp;(<span>工程计算与数据处理</span>)</span>
    			</p>
    		</div>
    	</div>
    	<div class="contain">
    		<div class="price"><h3>缴费信息</h3><p class="need-price">￥6000.00</p><p class="jfqk">未缴清</p></div>
    		<div class="room"><h3>所在寝室</h3><p class="fpqk">尚未分配</p></div>
    		<div class="tongzhishu"><h3>录取通知书</h3><p class="tzsqk">查看快递</p></div>
    	</div>
    	<div class="tongzhi">
    		<div class="tongzhi-pic"></div>
    		<div class="tognzhi-content">
    			<p>重庆理工大学热烈欢迎新同学。</p>
    			<p>关于选拔重庆理工大学2017级迎新志愿者的最新消息，请点击这里</p>
    		</div>
    	</div>
    	<ul class="app-list">
    		<li><div><img src="../../../../static/student-index-pictures/app-yiwancheng.png"></div><p>安全知识测试</p></li>
    		<li><div><img src="../../../../static/student-index-pictures/app-yiwancheng.png"></div><p>完善信息</p></li>
    		<li><p>保险购买</p></li>
    		<li><p>绿色通道</p></li>
    		<li><p>报到交通</p></li>
    		<li><p>走进理工</p></li>
    	</ul>
    	<div class="footer-fixed">
    		<div class="left" @click="tip">
    			<p>入学准备</p>
    		</div>
    		<div class="right">
    			<p>报道流程</p>
    		</div>
    	</div>
    </div>
    
</template>

<script type="ecmascript-6">
import popup from "@/pages/student/component/popup.vue"
export default {
  name: '',
  components:{popup},
  data () {
    return {
    	isshow:false	
    }
  },
  methods:{
  	tip(){
  		this.isshow=!this.isshow
  		
  	},
  	cancelPopup(isshow){
  		this.isshow=isshow
  	}
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.bgcolor
	position:fixed
	top:0
	bottom:0
	width:100%
	background:#f7f7f7
	z-index:2
	.header //头部显示的学生详细信息
		overflow:hidden
		font-family:PingFang-SC-Medium
		color:#333333
		font-size:0.13rem
		background-color:#3FB4FF
		padding-bottom:0.48rem
		.pic //学生头像
			float:left
			margin-left:0.14rem
			background:url(../../../../static/student-index-pictures/pic.png)
			width:0.75rem
			height:0.75rem
		.student-info //学生信息栏
			float:left
			width:2.76rem
			margin-top:0.03rem
			margin-left:0.10rem
			.student-name //学生基本信息
				font-size:0
				.xingming //学生姓名
					display:inline-block
					font-size:0.17rem
					font-family:PingFang-SC-Bold
					color:#fff
					margin-top:0.04rem
					vertical-align:top
				.ico-1 //学生性别图标
					display:inline-block
					margin-left:0.06rem
					margin-top:0.06rem
					width:0.14rem
					height:0.14rem
					vertical-align:top
					background:url(../../../../static/student-index-pictures/man.png)
				.ico-2,.ico-3
					display:inline-block
					width:0.24rem
					height:0.24rem
				.ico-2 //学生信息二维码
					margin-left:0.14rem
					margin-right:0.09rem
					background:url(../../../../static/student-index-pictures/iOS.png)
				.ico-3 //通知书图标
					background:url(../../../../static/student-index-pictures/book.png)
			.yuan //学生所在学院
				font-size:0.14rem
				color:#fff
				margin-top:0.05rem
				margin-bottom:0.08rem
				padding-left:0.2rem
				background:url(../../../../static/student-index-pictures/yuan.png) no-repeat
				.ico-4
					float:right
					margin-right:0.12rem
					width:0.08rem
					height:0.13rem
					background:url(../../../../static/student-index-pictures/more.png)
			.xi //学生所在系
				font-size:0.13rem
				color:#fff
				padding-left:0.2rem
				background:url(../../../../static/student-index-pictures/xi.png) no-repeat
	.contain
	//学生缴费信息等突出显示栏
		margin:-0.37rem auto 0
		display:flex
		justify-content:space-around
		width:3.45rem
		height:0.8rem
		background:rgba(255,255,255,1)
		border-radius:0.04rem
		box-shadow:0.01rem 0.01rem 0.05rem rgba(80,113,159,0.5)
		div
			width:33%
			text-align:center
			h3
				font-family:PingFang-SC-Medium
				font-size:0.14rem
				color:#333333
				margin-top:0.14rem
				margin-bottom:0.1rem
		.price
			.need-price
				font-size:0.12rem
				font-family:PingFang-SC-Medium
				color:rgba(239,90,83,1)
				line-height:0.12rem
				margin-bottom:0.07rem
			.jfqk
				font-size:0.12rem
				font-family:PingFang-SC-Medium
				color:rgba(61,168,245,1)
				line-height:0.12rem
		.room
			.fpqk
				font-size:0.12rem
				font-family:PingFang-SC-Medium
				color:rgba(153,153,153,1)
				line-height:0.12rem
				padding-top:0.06rem
		.tongzhishu
			.tzsqk
				font-size:0.12rem
				font-family:PingFang-SC-Medium
				color:rgba(61,168,245,1)
				line-height:0.12rem
				padding-top:0.06rem
	.tongzhi //通知栏
		padding:0.16rem 0 0 0.12rem
		height:0.48rem
		width:100%
		margin-top:0.1rem
		background:#fff
		.tongzhi-pic//通知图标
			float:left
			width:0.37rem
			height:0.32rem
			background:url(../../../../static/student-index-pictures/notice.png)
		.tognzhi-content //通知内
			float:left
			margin-left:0.16rem
			font-size:0.13rem
			font-family:PingFang-SC-Medium
			line-height:0.13rem
			color:rgba(51,51,51,1)
			background:#fff
			p //控制通知消息，超出隐藏并显示...
				width:2.92rem
				overflow:hidden
				text-overflow:ellipsis
				white-space:nowrap
				cursor:pointer
			p:first-child
				margin-bottom:0.09rem
				margin-top:-0.03rem
	.app-list //应用入口图标列表
		display:flex
		flex-wrap:wrap
		justify-content:space-between
		margin-top:0.11rem
		li
			width:1.24rem
			height:1.22rem
			margin-bottom:0.01rem
			background-color:#fff
			position:relative
			div
				position:absolute
				top:0.1rem
				right:0.1rem
			p
				margin-top:0.8rem
				text-align:center
				font-size:0.14rem
				line-height:0.14rem
				font-family:PingFang-SC-Medium
				color:rgba(51,51,51,1)
		li:nth-of-type(1)
			background-image:url(../../../../static/student-index-pictures/app-list-test.png)
		li:nth-of-type(2)
			background-image:url(../../../../static/student-index-pictures/app-list-info.png)
		li:nth-of-type(3)
			background-image:url(../../../../static/student-index-pictures/app-list-baoxian.png) 
		li:nth-of-type(4)
			background-image:url(../../../../static/student-index-pictures/app-list-gou.png) 
		li:nth-of-type(5)
			background-image:url(../../../../static/student-index-pictures/app-list-bus.png) 
		li:nth-of-type(6)
			background-image:url(../../../../static/student-index-pictures/app-list-school.png) 
	.footer-fixed //底部固定两栏
		width:100%
		height:0.49rem
		display:flex
		position:fixed
		bottom:0
		background:#fff
		.left
		.right
			width:50%
			display:flex
			align-items:center
			justify-content:center
		.left
			font-size:0.15rem
			font-family:PingFang-SC-Bold
			color:rgba(51,51,51,1)
			line-height:0.15rem
		.right
			font-size:0.15rem
			font-family:PingFang-SC-Bold
			color:rgba(153,153,153,1)
			line-height:0.15rem
</style>