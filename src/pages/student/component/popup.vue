<template>
  <div class="wrap">
  	<div class="content">
  		<div class="top">
  			<p>完成“安全知识测试”、“完善信息”后解锁</p>
  		</div>
  		<div class="bottom">
  			<p @click="sure">我知道了</p>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'index-popup',
  data () {
  	return {

  	}
  },
  methods:{
  	sure(){
  		this.$emit("event",this.isshow)
  	}
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.wrap //包裹元素
		display:flex
		position:fixed
		z-index:999
		justify-content:center
		align-items:center
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
</style>