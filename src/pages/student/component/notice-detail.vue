<template>
<!--通知公告-通知公告列表页-内容详情页 -->
<div class="bgcolor">
  	<div class="notice-detail">
	  	<h3>英语四级考试咨询</h3>
	  	<p class="shijian">
	  		<span>
	  			<span class="date">05-21</span>&nbsp;<span class="time">09:36</span>
	  		</span>
	  		<span class="viewer">1285</span>
	  	</p>
	  	<div class="pic"></div>
	  	<p class="detail">大学英语考试是教育部主管的一项全国性的英语考试，其目的是对大学生的实际英语能力进行客观、准确的测量，为大学英语教学提供测评服务。大学英语考试是一项大规模标准化考试，在设计上必须满足教育测量理论对大规模标准化考试的质量要求，是一个“标准关联的常模参照测验”。大学英语四、六级考试作为一项全国性的教学考试由“国家教育部高教司”主办，分为四级考试(CET-4)和六级考试(CET-6)，每年各举行两次。从2005年1月起，报道成绩满分为710分，不设及格线，凡考试成绩在220分以上的考生，由国家教育部高教司委托“全国大学英语四六级考试委员会”发给成绩单。</p>
	</div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.bgcolor
		position:fixed
		top:0
		bottom:0
		background:#f7f7f7
		.notice-detail
			padding:0 0.12rem
			border-top:0.01rem solid #ECECEC
			background:#fff
			h3
				margin:0.2rem 0 0.14rem
				color:#333
				font-size:0.16rem
				font-family:PingFang-SC-Bold
				line-height:0.16rem
			.shijian
				display:flex
				justify-content:space-between
				font-family:PingFang-SC-Medium
				font-size:0.12rem
				color:#999
				line-height:0.12rem
				.viewer
					text-indent:0.18rem
					background:url(../../../../static/student-index-pictures/eye.png) no-repeat left center
			.pic
				margin:0.2rem auto 0.14rem
				width:1.44rem
				height:1.44rem	
				background:url(../../../../static/student-index-pictures/notice-show.png)
			.detail
				font-size:0.13rem
				line-height:0.24rem	
				text-indent:2em
				font-family:PingFang-SC-Medium
				padding-bottom:0.13rem
</style>
