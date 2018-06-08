<!-- 入学准备-完善信息-第二页亲属信息模块 -->
<template>	
	<div class="qsxx">
		<div class="xxxx">
			<p><span>姓名</span><input placeholder="张仁宇"></input><span></span></p>
			<p><span>关系</span><input placeholder="母亲"></input><span></span></p>
			<p><span>联系电话</span><input placeholder="13685430024"></input><span></span></p>
			<p><span>年龄</span><input placeholder="38"></input><span></span></p>
			<p><span>工作单位</span><input placeholder="重庆云华科技"></input><span></span></p>
			<p><span>户口所在地</span><span>重庆市沙坪坝区</span></p>
			<p><span>职位</span><input placeholder="UI设计"></input><span></span></p>
			<p><span>政治面貌</span><span>党员</span></p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'qsxx',
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
		.qsxx //亲属信息
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
						background:url(../../../../../static/student-index-pictures/delete-hui.png)
				p:last-child
					border-bottom:0
				p:nth-of-type(6),p:last-child
					background:url(../../../../../static/student-index-pictures/more.png) right center no-repeat 
					span:last-child
						font-size:0.14rem
						font-family:PingFang-SC-Medium
						color:#333
						margin-right:0.15rem
						background:none
						width:auto
						height:auto
</style>