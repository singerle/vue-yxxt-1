<!-- 报到流程-宿舍办理页面 -->
<template>
  <div class="xcbd">
  	<mt-popup v-model="popupVisible" position="bottom">
   	 <popup @event="cancleProup" v-show="popupVisible"></popup>
   	</mt-popup>
   	<div class="top">
   		<div class="pic"><img src=""></div>
   		<p>学生本人凭录取通知书和身份证在公寓管理人员处领取钥匙并办理入住手续。</p>
   		<p>完成报名后，领取以下物品：</p>
		<p>1、《寝室安全手册》&nbsp;一本</p>
		<p>2、寝室钥匙&nbsp;一把</p>
		<p>3、寝室大楼门禁卡&nbsp;一张</p>
		<p>地点:学生公寓大厅</p>
   	</div>
   	<div class="bottom">
   		<div class="banli" @click="handleCode">
   			<p>出示身份码进行办理</p>
   		</div>
   	</div>
  </div>
</template>

<script>
import popup from "@/pages/student/component/common/xcbdPopup.vue"
export default {
  name: '',
  components:{popup},
  data(){
  	return {
  		popupVisible:false
  	}
  },
  methods:{
  	handleCode(){
  		this.popupVisible=true
  	},
  	cancleProup(isshow){
  		this.popupVisible=isshow
  	}
  }
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
			.banlihou //办理完成后的样式
				width:3.51rem
				height:0.46rem
				display:flex
				justify-content:center
				align-items:center
				background:rgba(255,255,255,1)	
				p
					font-size:0.17rem
					font-family:PingFang-SC-Medium
					color:rgba(51,51,51,1)
</style>