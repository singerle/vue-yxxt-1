<template>
  <div class="xcbd">
   	<div class="top">
   		<div class="pic"><img src=""></div>
   		<p>学生本人凭录取通知书、准考证、居民身份证办理报到手续。</p>
   		<p>完成报名后，领取以下物品：</p>
		<p>1、《学生手册》 一本</p>
		<p>2、《新手入学教育安排》 一本</p>
		<p>3、校园一卡通 一张</p>
		<p>4、热水卡 一张</p>
		<p>若自愿购买了大学生医保，需要完成办理。</p>

   	</div>
   	<div class="bottom">
   		<div class="banli"><p>出示身份码进行办理</p></div>
   	</div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.xcbd
		.top
			width:100%
			padding:0.1rem 0.13rem 0 0.13rem
			border-top:0.01rem solid #ECECEC
			.pic
				width:2.77rem
				height:1.56rem
				background:green
				margin-left:0.41rem
				border-radius:0.03rem
			p
				padding-left:0.26rem
				font-size:0.13rem
				font-family:PingFang SC
				color:rgba(51,51,51,1)
				line-height:0.23rem	
			p:nth-of-type(1)
				padding-left:0
				margin:0.14rem 0 0.04rem 0
				text-indent:0.26rem
				font-family:PingFang-SC-Medium
		.bottom
			border-top:0.01rem solid #ECECEC
			height:0.66rem
			width:100%
			display:flex
			justify-content:center
			align-items:center
			position:fixed
			bottom:0
			.banli //出示身份码进行办理
				width:3.51rem
				height:0.46rem
				display:flex
				justify-content:center
				align-items:center
				box-shadow:0.01rem 0.01rem 0.02rem rgba(85,178,245,0.5)
				background:rgba(61,168,245,1)
				border-radius:0.06rem
				p
					font-size:0.17rem
					font-family:PingFang-SC-Medium
					color:rgba(255,255,255,1)
					
</style>
