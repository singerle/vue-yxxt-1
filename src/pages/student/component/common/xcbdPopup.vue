<template>
	<div class="wrap">
	  	<div class="content">
	  		<div class="top">
	  			<h3>条形码</h3>
	  			<div class="code-1"></div>
	  			<p>20183910011111</p>
	  			<h3>二维码</h3>
	  			<div class="code-2"></div>
	  		</div>
	  		<div class="bottom"  @click="cancle">
	  			<p>取消</p>
	  		</div>
	  	</div>
  	</div>
</template>

<script>

export default {
  name: 'xcbdPopup',

  data () {
  	return {
  		isshow:false
  	}
  },
  methods:{
  	cancle(){
  		this.$emit("event",this.isshow)
  	}
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.wrap
		position:fixed
		width:100%
		height:100%
		background:rgba(0,0,0,.5)
		z-index:999
		.content
			position:fixed
			bottom:0
			width:100%
			height:5.22rem
			.top
				width:100%
				margin-bottom:0.02rem
				background:rgba(255,255,255,1)
				overflow:hidden
				h3,div,p	
					margin:0 auto
					text-align:center
				h3
					font-size:0.17rem
					font-family:PingFang-SC-Bold
					color:rgba(51,51,51,1)
					line-height:0.17rem	
					margin-top:0.4rem
					margin-bottom:0.2rem
				.code-1
					width:2.13rem
					height:1rem
					background:url(../../../../../static/student-index-pictures/long-code.png)
					margin-bottom:0.1rem
				.code-2
					width:1.6rem
					height:1.6rem
					background:url(../../../../../static/student-index-pictures/erwei-code.png)
					margin-bottom:0.4rem
			.bottom
				width:100%
				height:0.45rem
				display:flex
				justify-content:center
				align-items:center
				background:rgba(255,255,255,1)
				p
					font-size:0.17rem
					font-family:PingFang-SC-Medium
					color:rgba(51,51,51,1)
					line-height:0.17rem
</style>