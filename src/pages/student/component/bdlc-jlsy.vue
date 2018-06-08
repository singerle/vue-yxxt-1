<template>
	<!-- 报道流程-军旅生涯 -->

	<div class="bgcolor">
		<router-view></router-view>
		<div class="jlsy">
	 		<div class="pic"><img src=""></div>
	 		<div class="content">
		 		<p>军训时间</p>
		 		<p>军训安排</p>
		  		<p>军训要求</p>
		  		<p>军训生活</p>
	  		</div>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.bgcolor
		position:fixed
		top:0
		bottom:0
		width:100%
		background:#F2F2F2
		.jlsy
			width:100%
			padding:0.1rem 0.13rem 0 0.13rem
			border-top:0.01rem solid #ECECEC
			background:#fff
			.pic
				width:2.77rem
				height:1.56rem
				background:green
				margin-left:0.41rem
				border-radius:0.03rem
				margin-bottom:0.2rem
			.content
				padding-right:0.25rem
				p
					border-bottom:0.01rem solid #ECECEC
					font-size:0.16rem
					font-family:PingFang-SC-Medium
					color:#333
					line-height:0.44rem
					background:url(../../../../static/student-index-pictures/more.png) right center no-repeat 
	</style>
