<!-- 入学准备-完善信息 -->
<template>
	<div class="bgcolor">
		
		<div class="first">
			<div class="school">
				<p><span>QQ/微信</span><input></input></p>
				<p><span>电子邮箱</span><span>暂无数据</span></p>
			</div>
		</div>
		<div class="second">
			<div class="room">
				<p><span>寝室名称</span><span>暂无数据</span></p>
				<p><span>寝室性别</span><span>男</span></p>
				<p><span>床位号</span><span>暂无数据</span></p>
				<p><span>收费标准</span><span>暂无数据</span></p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'',
		data(){
			return {
				popupVisible:true,
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
		.first
			border-top:0.01rem solid #e9e9e9
			margin-bottom:0.1rem
			.school
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
					
					span:last-child
						font-size:0.14rem
						font-family:PingFang-SC-Medium
						color:#999
				p:last-child
					border-bottom:0
		.second
			.room
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
					
					span:last-child
						font-size:0.14rem
						font-family:PingFang-SC-Medium
						color:#999
				p:last-child
					border-bottom:0
</style>