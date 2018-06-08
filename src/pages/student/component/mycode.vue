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
  		console.log("aaa")
  		this.$emit("event",this.isshow)
  	}
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.wrap
		position:fixed
		width:100%
		top:0
		bottom:0
		background:#3DA8F5
		.content
			margin:0.4rem auto 0
			width: 3.45rem
			.top
				width:100%
				background:rgba(255,255,255,1)
				overflow:hidden
				border-radius:0.04rem
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
					background:url(../../../../static/student-index-pictures/long-code.png)
					margin-bottom:0.1rem
				.code-2
					width:1.6rem
					height:1.6rem
					background:url(../../../../static/student-index-pictures/erwei-code.png)
					margin-bottom:0.4rem
</style>