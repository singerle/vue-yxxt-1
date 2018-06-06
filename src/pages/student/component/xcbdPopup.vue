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
  		<div class="bottom">
  			<p @click="sure">取消</p>
  		</div>
  		<mt-popup v-model="isshow" position="bottom"><p>他就是士大夫撒都是分散水电费</p></mt-popup>
  	
  	</div>

  </div>
</template>

<script>

export default {
  name: 'xcbd-popup',

  data () {
  	return {
  		isshow:false
  	}
  },
  methods:{
  	sure(){
  		this.isshow=!this.isshow
  	}
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.wrap //包裹元素
		position:fixed
		z-index:999
		width:100%
		height:100%
		background:rgba(0,0,0,.5)
		.content //内容元素
			opacity:1
			.top //上半部分内容区
				display:flex
				justify-content:center
				align-items:center
				width:2.7rem
				height:1.19rem
				background:rgba(255,255,255,1)
				border-radius:0.1rem 0.1rem 0 0
				h3
					font-size:0.17rem
					font-family:PingFang-SC-Bold
					color:rgba(51,51,51,1)
					line-height:0.17rem
				p
					width:1.3rem
					font-size:0.14rem
					font-family:PingFang-SC-Medium
					color:rgba(0,0,0,1)
					line-height:0.25rem
					text-align:center
			.bottom //下部分的点击确认区
				width:2.7rem
				height:0.44rem
				background:rgba(85,178,245,1)
				border-radius:0 0 0.1rem 0.1rem
				display:flex
				justify-content:center
				align-items:center
				p
					font-size:0.15rem
					font-family:PingFang-SC-Medium
					color:rgba(255,255,255,1)
					line-height:0.15rem
					text-align:center
			mt-popup
				p
					width:20rem
					height:10rem
					background:red
</style>