<!-- 入学准备-完善信息 -->
<template>
	<div class="bgcolor">
		<div class="first">
			<div class="lxfs">
				<p><span>QQ/微信</span><input placeholder="w415976612"></input><span></span></p>
				<p><span>电子邮箱</span><input placeholder="415976612@qq.com"></input><span></span></p>
			</div>
		</div>
		<div class="second">
			<div class="content">
				<p><span>何时入党团</span><span>2015年6月12日</span></p>
				<p><span>健康状况</span><span>健康</span></p>
				<p><span>血型</span><span>O型</span></p>
				<p><span>户口性质</span><span>城镇户口</span></p>
				<p><span>户口所在地</span><span>重庆市沙坪坝区</span></p>
				<p><span>籍贯</span><span>重庆</span></p>
			</div>
		</div>
		<div class="nextpage">
			<mt-button size="large" type="primary">下一页</mt-button>
		</div>
	</div>
</template>

<script>
	export default{
		name:'',
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
		.first
			border-top:0.01rem solid #e9e9e9
			margin-bottom:0.1rem
			.lxfs //联系方式
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
					span:last-child
						width:0.18rem
						height:0.18rem
						background:url(../../../../static/student-index-pictures/delete-hui.png)
				p:last-child
					border-bottom:0
		.second
			.content
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
					background:url(../../../../static/student-index-pictures/more.png) right center no-repeat 
					span:last-child
						font-size:0.14rem
						font-family:PingFang-SC-Medium
						color:#333
						margin-right:0.15rem
				p:last-child
					border-bottom:0
		.nextpage
			padding:0 0.12rem
			margin-top:0.2rem
</style>