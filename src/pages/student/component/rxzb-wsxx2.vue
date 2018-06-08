<!-- 入学准备-完善信息-第二页亲属信息 -->
<template>
	<div class="bgcolor">
		<div class="title">亲属信息</div>
		<qsxxb></qsxxb>
		<p class="add">
			<span>添加</span>
		</p>
		<div class="nextpage">
			<mt-button size="large" type="primary">下一步</mt-button>
		</div>
	</div>
</template>

<script>
//导入亲属信息表组件复用
	import qsxxb from "@/pages/student/component/common/rxzb-wsxx-qsxx-info.vue"
	export default{
		name:'',
		components:{qsxxb},
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