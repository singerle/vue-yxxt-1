<!-- 入学准备-完善信息-第三页曾读学校 -->
<template>
	<div class="bgcolor">
		<div class="title">曾读学校</div>
		<div class="cdxx">
			<div class="xxxx">
				<p><span>开始时间</span><span>2012年6月10日</span></p>
				<p><span>结束时间</span><input placeholder=""></input><span>2015年7月16日</span></p>
				<p><span>学校名称</span><input placeholder="重庆大坪小学"></input><span></span></p>
				<p><span>担任职位</span><input placeholder="班长"></input><span></span></p>
				<p><span>证明人</span><input placeholder="张晓明"></input><span></span></p>
			</div>
		</div>
		<cdxxb></cdxxb>	
		<p class="add">
			<span>添加</span>
		</p>
		<div class="nextpage">
			<mt-button size="large" type="primary">完成</mt-button>
		</div>
	</div>
</template>

<script>
//导入曾读学校表组件复用
	import cdxxb from "@/pages/student/component/common/rxzb-wsxx-cdxx-info.vue"
	export default{
		name:'',
		components:{cdxxb},
		data(){
			return {
				
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
		.title
			font-size:0.13rem
			font-family:PingFang SC
			font-weight:bold
			line-height:0.31rem
			text-indent:0.12rem
			color:#333
		.cdxx //曾读学校
			border-top:0.01rem solid #e9e9e9
			margin-bottom:0.1rem
			.xxxx //详细信息
				padding:0 0.12rem
				background:#fff
				p
					border-bottom:0.01rem solid #e9e9e9
					font-size:0.16rem
					font-family:PingFang-SC-Medium
					color:#333
					line-height:0.44rem
					display:flex
					justify-content:space-between
					align-items:center
					input
						outline:none
						font-size:0.14rem
						font-family:PingFang-SC-Medium
						color:#555
						margin-left:-1rem
					span:first-child
						width:0.81rem
					span:last-child
						width:0.18rem
						height:0.18rem
						background:url(../../../../static/student-index-pictures/delete-hui.png)
				p:last-child
					border-bottom:0
				p:nth-of-type(2),p:first-child
					background:url(../../../../static/student-index-pictures/more.png) right center no-repeat 
					span:last-child
						font-size:0.14rem
						font-family:PingFang-SC-Medium
						color:#333
						margin-right:0.15rem
						background:none
						width:auto
						height:auto
		.nextpage
			padding:0 0.12rem
			margin-top:0.2rem
		.add
			display:flex
			height:0.51rem
			justify-content:center
			align-items:center
			background:#fff
			span
				padding-left:0.2rem	
				font-size:0.14rem
				font-family:PingFang-SC-Medium
				color:#408EDB	
				background:url(../../../../static/student-index-pictures/add.png) no-repeat
				line-height:0.15rem
				height:0.15rem
			
</style>